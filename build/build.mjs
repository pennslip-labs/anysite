#!/usr/bin/env node
// Anytype export -> static site data builder.
//
// Usage: node build/build.mjs [contentDir] [outDir] [--main slug] [--no-types]
// Defaults: contentDir = "content", outDir = "docs"
//
// Reads every .md file (Anytype object export) and every .schema.json file
// (Anytype type definition) anywhere under contentDir, resolves the links
// between objects, and writes a single docs/data.json that the static
// viewer (site/index.html + site/app.js) reads at runtime. Any other file
// (images, attachments Anytype put under files/) is copied through
// unchanged at its original relative path so existing "files/xxx.jpg"
// references in the export keep working untouched. Rooted builds copy only
// assets referenced by objects reachable from --main.

import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const positionalArgs = [];
let mainObjectSlug = null;
let hasMainArg = false;
let renderTypes = true;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--main") {
    hasMainArg = true;
    mainObjectSlug = args[++i];
  } else if (args[i].startsWith("--main=")) {
    hasMainArg = true;
    mainObjectSlug = args[i].slice("--main=".length);
  } else if (args[i] === "--no-types") {
    renderTypes = false;
  } else {
    positionalArgs.push(args[i]);
  }
}
const contentDir = path.resolve(REPO_ROOT, positionalArgs[0] || "content");
const outDir = path.resolve(REPO_ROOT, positionalArgs[1] || "docs");

if (hasMainArg && (!mainObjectSlug || mainObjectSlug.startsWith("--"))) {
  console.error("Missing object slug after --main.");
  console.error("Usage: node build/build.mjs [contentDir] [outDir] --main object-slug");
  process.exit(1);
}

if (!fs.existsSync(contentDir)) {
  console.error(`Content directory not found: ${contentDir}`);
  console.error(`Put your Anytype export (the .md files, schemas/ and files/ folders) there, or pass a path:`);
  console.error(`  node build/build.mjs path/to/export docs`);
  process.exit(1);
}

// ---------- 1. walk the export ----------

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const allFiles = walk(contentDir);
const mdFiles = allFiles.filter((f) => f.endsWith(".md"));
const schemaFiles = allFiles.filter((f) => f.endsWith(".schema.json"));
const assetFiles = allFiles.filter(
  (f) => !f.endsWith(".md") && !f.endsWith(".schema.json")
);

console.log(
  `Found ${mdFiles.length} objects, ${schemaFiles.length} type schemas, ${assetFiles.length} asset files.`
);

// ---------- 2. parse schemas ----------

// typesByTitle: "Note" -> { title, iconName, plural, typeKey, properties: [...] }
const typesByTitle = {};

for (const file of schemaFiles) {
  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch (e) {
    console.warn(`Could not parse schema ${file}: ${e.message}`);
    continue;
  }
  const properties = Object.entries(raw.properties || {}).map(([label, def]) => ({
    label,
    key: def["x-key"] || label,
    format: def["x-format"] || (def.type === "array" ? "list" : "text"),
    order: def["x-order"] ?? 999,
    featured: !!def["x-featured"],
    hidden: !!def["x-hidden"],
    readOnly: !!def.readOnly,
    description: def.description || "",
    isArray: def.type === "array",
  }));
  properties.sort((a, b) => a.order - b.order);

  typesByTitle[raw.title] = {
    title: raw.title,
    iconName: raw["x-icon-name"] || "file-text",
    plural: raw["x-plural"] || raw.title + "s",
    typeKey: raw["x-type-key"] || raw.title.toLowerCase(),
    properties,
  };
}

function fallbackType(title) {
  return {
    title: title || "Object",
    iconName: "file-text",
    plural: (title || "Object") + "s",
    typeKey: (title || "object").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    properties: [],
  };
}

// ---------- 3. parse objects ----------

function splitFrontmatter(raw) {
  // Anytype md files start with "---\n<yaml>\n---\n<body>". Bodies can
  // themselves contain literal "---" horizontal rules, so we only look
  // for the frontmatter delimiters at the very start of the file.
  if (!raw.startsWith("---")) return { fm: {}, body: raw };
  const rest = raw.slice(3);
  const end = rest.indexOf("\n---");
  if (end === -1) return { fm: {}, body: raw };
  const yamlText = rest.slice(rest.startsWith("\n") ? 1 : 0, end);
  let bodyStart = end + 4;
  if (rest[bodyStart] === "\n") bodyStart += 1;
  const body = rest.slice(bodyStart);
  let fm = {};
  try {
    fm = yaml.load(yamlText) || {};
  } catch (e) {
    console.warn(`YAML parse issue: ${e.message}`);
  }
  return { fm, body };
}

function extractTitle(body, slug) {
  const lines = body.split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith("# ")) return t.slice(2).trim();
  }
  return slug;
}

function stripLeadingTitle(body, title) {
  const lines = body.split("\n");
  const idx = lines.findIndex((l) => l.trim() === `# ${title}`);
  if (idx !== -1) {
    lines.splice(idx, 1);
    // drop one blank line right after, if present
    if (lines[idx] !== undefined && lines[idx].trim() === "") lines.splice(idx, 1);
  }
  return lines.join("\n");
}

const objects = {}; // key: slug -> object record
const slugByBasename = {}; // "note.md" -> slug   (basenames are unique in an export)

for (const file of mdFiles) {
  const slug = path.basename(file, ".md");
  const rawText = fs.readFileSync(file, "utf-8");
  const { fm, body } = splitFrontmatter(rawText);
  const title = extractTitle(body, slug);
  const relDir = path.relative(contentDir, path.dirname(file));

  const typeArr = fm["Object type"];
  const typeTitle = Array.isArray(typeArr) ? typeArr[0] : typeArr || "Object";

  const record = {
    slug,
    id: fm.id || slug,
    title,
    typeTitle,
    relDir, // used to resolve relative asset/link paths
    properties: fm,
    body: stripLeadingTitle(body, title),
  };
  objects[slug] = record;
  slugByBasename[path.basename(file)] = slug;
}

console.log(`Parsed ${Object.keys(objects).length} objects.`);

if (mainObjectSlug && !objects[mainObjectSlug]) {
  console.error(`Main object not found: ${mainObjectSlug}`);
  console.error("Use the object's Markdown filename without the .md extension.");
  process.exit(1);
}

// ---------- 4. resolve links + compute backlink graph ----------

const mdLinkRe = /\]\(([^)]+\.md)\)/g;

function resolveRef(ref, fromRelDir) {
  // ref may be a bare filename ("note.md") or a relative path
  // ("../foo/note.md"). We resolve purely by basename since Anytype
  // basenames are unique within an export.
  const base = path.basename(ref.split("#")[0].split("?")[0]);
  return slugByBasename[base] || null;
}

const brokenRefs = {}; // basename -> [slugs of objects that reference it]

function noteBroken(ref, fromSlug) {
  const base = path.basename(ref);
  (brokenRefs[base] ||= new Set()).add(fromSlug);
}

for (const rec of Object.values(objects)) {
  rec.outLinks = new Set(); // slugs this object points to (any source)

  // (a) links inside the markdown body
  for (const m of rec.body.matchAll(mdLinkRe)) {
    const target = resolveRef(m[1], rec.relDir);
    if (target) rec.outLinks.add(target);
    else noteBroken(m[1], rec.slug);
  }

  // (b) relation-style frontmatter properties whose values are filenames
  for (const [key, val] of Object.entries(rec.properties)) {
    if (key.toLowerCase() === "backlinks") continue;
    const arr = Array.isArray(val) ? val : [val];
    for (const item of arr) {
      if (typeof item === "string" && item.endsWith(".md")) {
        const target = resolveRef(item, rec.relDir);
        if (target) rec.outLinks.add(target);
        else noteBroken(item, rec.slug);
      }
    }
  }
}

// computed backlinks = union of "declared Backlinks property" (already
// filename refs, handled above as outLinks) with everyone who actually
// links to this object anywhere else in the export.
for (const rec of Object.values(objects)) rec.inLinks = new Set();
for (const rec of Object.values(objects)) {
  for (const target of rec.outLinks) {
    if (objects[target]) objects[target].inLinks.add(rec.slug);
  }
}

const mainReachableSlugs = new Set();
if (mainObjectSlug) {
  const pending = [mainObjectSlug];
  while (pending.length) {
    const slug = pending.pop();
    if (mainReachableSlugs.has(slug)) continue;
    mainReachableSlugs.add(slug);
    pending.push(...objects[slug].outLinks);
  }
}

// ---------- 5. assemble output ----------

function pickType(title) {
  return typesByTitle[title] || fallbackType(title);
}

const outObjects = {};
const includedObjects = Object.values(objects).filter(
  (rec) => !mainObjectSlug || mainReachableSlugs.has(rec.slug)
);
const includedAssetFiles = mainObjectSlug
  ? assetFiles.filter((file) => {
      const basename = path.basename(file);
      return includedObjects.some((rec) =>
        `${rec.body}\n${JSON.stringify(rec.properties)}`.includes(basename)
      );
    })
  : assetFiles;
for (const rec of includedObjects) {
  outObjects[rec.slug] = {
    slug: rec.slug,
    id: rec.id,
    title: rec.title,
    typeTitle: rec.typeTitle,
    relDir: rec.relDir === "." ? "" : rec.relDir,
    properties: rec.properties,
    body: rec.body,
    outLinks: [...rec.outLinks].filter((slug) => !mainObjectSlug || mainReachableSlugs.has(slug)),
    inLinks: mainObjectSlug
      ? rec.slug === mainObjectSlug
        ? []
        : [...rec.inLinks].filter((slug) => mainReachableSlugs.has(slug))
      : [...rec.inLinks],
  };
}

const outTypes = {};
for (const [title, def] of Object.entries(typesByTitle)) {
  if (!mainObjectSlug || includedObjects.some((rec) => rec.typeTitle === title)) {
    outTypes[title] = def;
  }
}
// also register any object types that appeared in the export without a schema file
for (const rec of includedObjects) {
  if (!outTypes[rec.typeTitle]) outTypes[rec.typeTitle] = fallbackType(rec.typeTitle);
}

const outBroken = Object.entries(brokenRefs).map(([ref, fromSet]) => ({
  ref,
  referencedBy: [...fromSet].filter((slug) => !mainObjectSlug || mainReachableSlugs.has(slug)),
})).filter((entry) => entry.referencedBy.length);

const data = {
  generatedAt: new Date().toISOString(),
  objectCount: Object.keys(outObjects).length,
  mainObject: mainObjectSlug,
  renderTypes,
  types: outTypes,
  objects: outObjects,
  brokenRefs: outBroken,
};

// ---------- 6. write output ----------

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "data.json"), JSON.stringify(data));
console.log(`Wrote ${path.join(outDir, "data.json")} (${(fs.statSync(path.join(outDir, "data.json")).size / 1024).toFixed(0)} KB)`);

// copy the static viewer (site/*) into outDir, without clobbering data.json we just wrote
const siteDir = path.join(REPO_ROOT, "site");
for (const f of fs.readdirSync(siteDir)) {
  fs.copyFileSync(path.join(siteDir, f), path.join(outDir, f));
}

// copy retained assets through at their original relative paths
let copied = 0;
const includedAssetSet = new Set(includedAssetFiles);
for (const file of assetFiles) {
  const rel = path.relative(contentDir, file);
  const dest = path.join(outDir, rel);
  if (!includedAssetSet.has(file)) {
    if (fs.existsSync(dest)) fs.rmSync(dest);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(file, dest);
  copied++;
}
console.log(`Copied ${copied} asset files.`);

if (outBroken.length) {
  console.log(`\n${outBroken.length} referenced filenames were not found in the export (shown as "missing" links in the viewer):`);
  for (const b of outBroken.slice(0, 15)) console.log(`  - ${b.ref}  (referenced by ${b.referencedBy.length} object${b.referencedBy.length === 1 ? "" : "s"})`);
  if (outBroken.length > 15) console.log(`  ...and ${outBroken.length - 15} more`);
}

console.log(`\nDone. Serve/deploy the "${path.relative(REPO_ROOT, outDir)}" folder.`);
