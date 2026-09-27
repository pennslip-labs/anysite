/* Anytype export viewer — reads ./data.json, renders everything client-side. */
(function () {
  "use strict";

  const $app = document.getElementById("app");
  const $rail = document.getElementById("rail");
  let DATA = null;

  // ---------------- utilities ----------------

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function slugFromMdRef(ref) {
    const base = ref.split("/").pop().split("#")[0].split("?")[0];
    return base.replace(/\.md$/i, "");
  }

  function objTitle(slug) {
    const o = DATA.objects[slug];
    return o ? o.title : slug;
  }

  function typeDef(typeTitle) {
    return (DATA.types && DATA.types[typeTitle]) || { title: typeTitle, properties: [], plural: typeTitle + "s" };
  }

  function fmtDate(v) {
    const d = new Date(v);
    if (isNaN(d)) return String(v);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function objLink(slug, opts) {
    opts = opts || {};
    const o = DATA.objects[slug];
    if (!o) return `<a class="missing-link" href="#/missing/${encodeURIComponent(slug)}.md">${esc(slug)}</a>`;
    const cls = opts.chip ? "chip link" : "";
    return `<a class="${cls}" href="#/o/${encodeURIComponent(slug)}">${esc(o.title)}</a>`;
  }

  function isImagePath(p) {
    return /\.(png|jpe?g|gif|webp|svg|bmp)$/i.test(p);
  }

  // ---------------- markdown rendering ----------------

  function renderMarkdown(body) {
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      let hrefStr = typeof href === "object" ? href.href : href;
      let textStr = typeof href === "object" ? href.text : text;
      if (!hrefStr) hrefStr = "";
      if (/\.md($|[?#])/i.test(hrefStr) && !/^https?:\/\//i.test(hrefStr)) {
        const slug = slugFromMdRef(hrefStr);
        if (DATA.objects[slug]) return `<a href="#/o/${encodeURIComponent(slug)}">${textStr}</a>`;
        return `<a class="missing-link" href="#/missing/${encodeURIComponent(slug + ".md")}" title="Not found in this export">${textStr}</a>`;
      }
      const targetAttr = /^https?:\/\//i.test(hrefStr) ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${esc(hrefStr)}"${targetAttr}>${textStr}</a>`;
    };
    renderer.image = (href, title, text) => {
      let hrefStr = typeof href === "object" ? href.href : href;
      let textStr = typeof href === "object" ? href.text : text;
      return `<img src="${esc(hrefStr)}" alt="${esc(textStr || "")}" loading="lazy">`;
    };
    try {
      return marked.parse(body || "", { renderer });
    } catch (e) {
      return `<pre>${esc(body || "")}</pre>`;
    }
  }

  // ---------------- property rendering ----------------

  function renderPropValue(format, val, isArray) {
    if (val === null || val === undefined || val === "" || (Array.isArray(val) && val.length === 0)) {
      return null;
    }
    const arr = Array.isArray(val) ? val : [val];

    switch (format) {
      case "object": {
        return arr.map((v) => {
          if (typeof v === "string" && v.endsWith(".md")) return objLink(slugFromMdRef(v), { chip: true });
          return `<span class="chip">${esc(v)}</span>`;
        }).join(" ");
      }
      case "tag":
        return arr.map((t) => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">${esc(t)}</a>`).join(" ");
      case "date":
        return arr.map(fmtDate).join(", ");
      case "checkbox":
        return arr.map((v) => (v ? "✓ yes" : "— no")).join(", ");
      case "status":
        return arr.map((v) => `<span class="status-pill">${esc(v)}</span>`).join(", ");
      case "email":
        return arr.map((v) => `<a href="mailto:${esc(v)}">${esc(v)}</a>`).join(", ");
      case "phone":
        return arr.map((v) => `<a href="tel:${esc(v)}">${esc(v)}</a>`).join(", ");
      case "url":
        return arr.map((v) => `<a href="${esc(v)}" target="_blank" rel="noopener">${esc(v)}</a>`).join(", ");
      case "emoji":
        return arr.map((v) => `<span style="font-size:20px">${esc(v)}</span>`).join(" ");
      case "file":
        return arr.map((v) => {
          if (isImagePath(v)) return `<img class="prop-image" src="${esc(v)}" loading="lazy">`;
          return `<a href="${esc(v)}">${esc(v.split("/").pop())}</a>`;
        }).join(" ");
      default:
        if (typeof val === "boolean") return val ? "✓ yes" : "— no";
        if (Array.isArray(val)) {
          if (val.every((v) => typeof v === "string" && v.endsWith(".md"))) {
            return val.map((v) => objLink(slugFromMdRef(v), { chip: true })).join(" ");
          }
          return val.map((v) => `<span class="chip">${esc(v)}</span>`).join(" ");
        }
        return esc(String(val));
    }
  }

  function renderProperties(obj) {
    const type = typeDef(obj.typeTitle);
    const skipLabels = new Set(["Object type", "id", "Backlinks"]);
    const schemaByLabel = {};
    type.properties.forEach((p) => (schemaByLabel[p.label] = p));

    const rows = [];
    const seen = new Set();

    // schema-ordered props first
    for (const p of type.properties) {
      if (skipLabels.has(p.label) || p.hidden) continue;
      seen.add(p.label);
      if (!(p.label in obj.properties)) continue;
      const html = renderPropValue(p.format, obj.properties[p.label]);
      if (html === null) continue;
      rows.push({ label: p.label, html, featured: p.featured });
    }
    // any leftover custom props not in schema
    for (const [label, val] of Object.entries(obj.properties)) {
      if (skipLabels.has(label) || seen.has(label)) continue;
      const html = renderPropValue(null, val);
      if (html === null) continue;
      rows.push({ label, html, featured: false });
    }

    if (!rows.length) return "";
    const featured = rows.filter((r) => r.featured);
    const rest = rows.filter((r) => !r.featured);

    const rowHtml = (r) => `<div class="prop-row"><div class="prop-key">${esc(r.label)}</div><div class="prop-val">${r.html}</div></div>`;

    let html = `<div class="props">${featured.map(rowHtml).join("")}`;
    if (rest.length) {
      html += `<details class="more-props"><summary>${rest.length} more propert${rest.length === 1 ? "y" : "ies"}</summary>${rest.map(rowHtml).join("")}</details>`;
    }
    html += `</div>`;
    return html;
  }

  // ---------------- pages ----------------

  function pageHome() {
    const types = Object.values(DATA.types).sort((a, b) => a.title.localeCompare(b.title));
    const counts = {};
    Object.values(DATA.objects).forEach((o) => (counts[o.typeTitle] = (counts[o.typeTitle] || 0) + 1));

    const recent = Object.values(DATA.objects)
      .filter((o) => o.properties["Last modified date"])
      .sort((a, b) => new Date(b.properties["Last modified date"]) - new Date(a.properties["Last modified date"]))
      .slice(0, 12);

    return `
      <div class="home-hero">
        <h1>Notes</h1>
        <p>${DATA.objectCount} objects across ${types.length} types, exported from Anytype and rendered here with working cross-links, backlinks and search.</p>
      </div>
      <table class="type-table">
        <thead><tr><th>Type</th><th>Count</th></tr></thead>
        <tbody>
          ${types.map((t) => `<tr><td><a href="#/type/${encodeURIComponent(t.title)}">${esc(t.plural)}</a></td><td>${counts[t.title] || 0}</td></tr>`).join("")}
        </tbody>
      </table>
      ${recent.length ? `<h2 style="font-family:var(--mono);font-size:12px;color:var(--faint);">Recently modified</h2>
      <table class="list-table"><tbody>
        ${recent.map((o) => `<tr><td>${objLink(o.slug)}</td><td style="color:var(--faint);font-family:var(--mono);font-size:12px;">${esc(o.typeTitle)}</td><td style="color:var(--faint);font-family:var(--mono);font-size:12px;">${fmtDate(o.properties["Last modified date"])}</td></tr>`).join("")}
      </tbody></table>` : ""}
      ${DATA.brokenRefs.length ? `<p class="footer-note">${DATA.brokenRefs.length} referenced file${DATA.brokenRefs.length === 1 ? "" : "s"} could not be found in this export. <a href="#/diagnostics">View details</a>.</p>` : ""}
    `;
  }

  function pageType(typeTitle) {
    const type = typeDef(typeTitle);
    const objs = Object.values(DATA.objects).filter((o) => o.typeTitle === typeTitle);
    if (!objs.length) return `<div class="crumbs"><a href="#/">Home</a></div><p class="empty-state">No objects of type "${esc(typeTitle)}" found.</p>`;

    const featuredCols = type.properties.filter((p) => p.featured && !["Object type", "id", "Backlinks", "Tag", "Creation date", "Last modified date"].includes(p.label)).slice(0, 3);
    objs.sort((a, b) => a.title.localeCompare(b.title));

    return `
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span>${esc(type.plural)}</div>
      <h1 style="font-size:26px;margin:0 0 18px;">${esc(type.plural)}</h1>
      <table class="list-table">
        <thead><tr><th>Title</th>${featuredCols.map((c) => `<th>${esc(c.label)}</th>`).join("")}</tr></thead>
        <tbody>
          ${objs.map((o) => `<tr><td>${objLink(o.slug)}</td>${featuredCols.map((c) => `<td>${renderPropValue(c.format, o.properties[c.label]) || ""}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  function pageTag(tag) {
    const objs = Object.values(DATA.objects).filter((o) => {
      const t = o.properties["Tag"];
      return Array.isArray(t) && t.includes(tag);
    }).sort((a, b) => a.title.localeCompare(b.title));

    return `
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span>tag: ${esc(tag)}</div>
      <h1 style="font-size:26px;margin:0 0 18px;">#${esc(tag)}</h1>
      ${objs.length ? `<table class="list-table"><tbody>
        ${objs.map((o) => `<tr><td>${objLink(o.slug)}</td><td style="color:var(--faint);font-family:var(--mono);font-size:12px;">${esc(o.typeTitle)}</td></tr>`).join("")}
      </tbody></table>` : `<p class="empty-state">No objects tagged "${esc(tag)}".</p>`}
    `;
  }

  function pageObject(slug) {
    const obj = DATA.objects[slug];
    if (!obj) return pageMissing(slug + ".md");
    const type = typeDef(obj.typeTitle);
    const created = obj.properties["Creation date"];
    const modified = obj.properties["Last modified date"];

    const outLinks = (obj.outLinks || []).filter((s) => s !== slug);
    const inLinks = (obj.inLinks || []).filter((s) => s !== slug);

    return `
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span><a href="#/type/${encodeURIComponent(obj.typeTitle)}">${esc(type.plural)}</a><span class="sep">/</span>${esc(obj.title)}</div>
      <div class="obj-header">
        <span class="type-badge">${esc(obj.typeTitle)}</span>
        <h1>${esc(obj.title)}</h1>
        <div class="obj-meta">${created ? "created " + fmtDate(created) : ""}${modified ? " · updated " + fmtDate(modified) : ""}</div>
      </div>
      ${renderProperties(obj)}
      <div class="body-content">${renderMarkdown(obj.body)}</div>
      ${outLinks.length ? `<div class="links-section"><h2>Links to</h2><div class="link-chips">${outLinks.map((s) => objLink(s, { chip: true })).join("")}</div></div>` : ""}
      ${inLinks.length ? `<div class="links-section"><h2>Linked from</h2><div class="link-chips">${inLinks.map((s) => objLink(s, { chip: true })).join("")}</div></div>` : ""}
    `;
  }

  function pageMissing(ref) {
    const entry = DATA.brokenRefs.find((b) => b.ref.toLowerCase() === ref.toLowerCase());
    return `
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span>missing</div>
      <div class="missing-page">
        <h1 style="font-size:24px;">Not found in this export</h1>
        <p>Something links to <code>${esc(ref)}</code>, but no object with that filename was included in this export. It may have been deleted, or excluded when exporting from Anytype.</p>
        ${entry && entry.referencedBy.length ? `<h2 style="font-family:var(--mono);font-size:12px;color:var(--faint);">Referenced by</h2><div class="link-chips">${entry.referencedBy.map((s) => objLink(s, { chip: true })).join("")}</div>` : ""}
      </div>
    `;
  }

  function pageDiagnostics() {
    const rows = DATA.brokenRefs.slice().sort((a, b) => b.referencedBy.length - a.referencedBy.length);
    return `
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span>diagnostics</div>
      <h1 style="font-size:24px;">Broken references</h1>
      <p style="color:var(--muted)">${rows.length} filename${rows.length === 1 ? "" : "s"} referenced somewhere in this export but not present in it.</p>
      <table class="list-table">
        <thead><tr><th>Missing file</th><th>Referenced by</th></tr></thead>
        <tbody>
          ${rows.map((r) => `<tr><td><a href="#/missing/${encodeURIComponent(r.ref)}"><code>${esc(r.ref)}</code></a></td><td>${r.referencedBy.map((s) => objLink(s, { chip: true })).join(" ")}</td></tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  // ---------------- router ----------------

  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [head, ...rest] = hash.split("/");
    const param = decodeURIComponent(rest.join("/"));

    let html;
    if (!hash || head === "") html = pageHome();
    else if (head === "o") html = pageObject(param);
    else if (head === "type") html = pageType(param);
    else if (head === "tag") html = pageTag(param);
    else if (head === "missing") html = pageMissing(param);
    else if (head === "diagnostics") html = pageDiagnostics();
    else html = pageHome();

    $app.innerHTML = html;
    window.scrollTo(0, 0);
    highlightRailActive();
  }

  function highlightRailActive() {
    $rail.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    const current = location.hash || "#/";
    $rail.querySelectorAll(`a[href="${CSS.escape(current)}"]`).forEach((a) => a.classList.add("active"));
  }

  // ---------------- rail (sidebar) ----------------

  function renderRail() {
    const types = Object.values(DATA.types).sort((a, b) => a.title.localeCompare(b.title));
    const counts = {};
    Object.values(DATA.objects).forEach((o) => (counts[o.typeTitle] = (counts[o.typeTitle] || 0) + 1));
    const tagCounts = {};
    Object.values(DATA.objects).forEach((o) => {
      const t = o.properties["Tag"];
      if (Array.isArray(t)) t.forEach((tag) => (tagCounts[tag] = (tagCounts[tag] || 0) + 1));
    });
    const topTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 30);

    document.getElementById("rail-body").innerHTML = `
      <nav>
        <h2>Types</h2>
        <ul>
          ${types.filter((t) => counts[t.title]).map((t) => `<li><a href="#/type/${encodeURIComponent(t.title)}"><span>${esc(t.plural)}</span><span class="count">${counts[t.title]}</span></a></li>`).join("")}
        </ul>
      </nav>
      <nav>
        <h2>Tags</h2>
        <div class="tag-cloud">
          ${topTags.map(([tag, n]) => `<a href="#/tag/${encodeURIComponent(tag)}" title="${n} objects">${esc(tag)}</a>`).join("")}
        </div>
      </nav>
    `;
  }

  // ---------------- search ----------------

  function initSearch() {
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    const index = Object.values(DATA.objects).map((o) => ({ slug: o.slug, title: o.title, type: o.typeTitle }));

    function doSearch(q) {
      q = q.trim().toLowerCase();
      if (!q) { results.innerHTML = ""; results.style.display = "none"; return; }
      const hits = index
        .map((e) => ({ e, score: e.title.toLowerCase().indexOf(q) }))
        .filter((x) => x.score !== -1)
        .sort((a, b) => a.score - b.score || a.e.title.length - b.e.title.length)
        .slice(0, 15);
      results.style.display = "block";
      if (!hits.length) { results.innerHTML = `<div class="search-empty">No matches</div>`; return; }
      results.innerHTML = hits.map((h) => `<a href="#/o/${encodeURIComponent(h.e.slug)}"><span>${esc(h.e.title)}</span><span class="hit-type">${esc(h.e.type)}</span></a>`).join("");
    }

    input.addEventListener("input", () => doSearch(input.value));
    input.addEventListener("focus", () => { if (input.value) doSearch(input.value); });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-box")) { results.style.display = "none"; }
    });
    results.addEventListener("click", () => { results.style.display = "none"; input.value = ""; });
    document.addEventListener("keydown", (e) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); input.focus(); }
      if (e.key === "Escape") { results.style.display = "none"; input.blur(); }
    });
  }

  // ---------------- theme + rail toggle ----------------

  function initChrome() {
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("anytype-viewer-theme", next); } catch (e) {}
    });
    try {
      const saved = localStorage.getItem("anytype-viewer-theme");
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch (e) {}

    const railToggle = document.getElementById("rail-toggle");
    railToggle.addEventListener("click", () => $rail.classList.toggle("collapsed"));
  }

  // ---------------- boot ----------------

  fetch("data.json")
    .then((r) => r.json())
    .then((data) => {
      DATA = data;
      renderRail();
      initSearch();
      initChrome();
      route();
      window.addEventListener("hashchange", route);
    })
    .catch((err) => {
      $app.innerHTML = `<p style="padding:40px;color:var(--missing)">Could not load data.json: ${esc(err.message)}. Did you run the build script?</p>`;
    });
})();
