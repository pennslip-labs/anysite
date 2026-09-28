---
# yaml-language-server: $schema=schemas/page.schema.json
Object type:
    - Page
Backlinks:
    - cs-2214.md
    - cs2214-discrete-math.md
Creation date: "2026-06-03T20:41:00Z"
Created by:
    - Desean
id: bafyreiax43zo2rktrkjpk36ngh3erg2ha6zpslxwofcs4wq2kr2wxftnce
---
# Ch. 9: Trees   
Progress: Done
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv slides vvv***   
[CS2214\_09\_Trees.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_09_Trees.pdf)   
***undirected tree*** > is a *connected* undirected graph that contains no *simple circuits*. also, we know its a tree iff every pair of distinct vertices they can only reach each other by exactly one path   
***forest*** > a disjoint group of trees that are included in one definition of a graph $G$. containing no simple circuits, or where not all vertices can be reached from one another (in directed or undirected case)   
***rooted trees*** (directed trees) > a directed graph that truly behaves like a tree as there is a root, that has no inbound edge (the origin, with in-degree of 0).   
- every other node must have an in-bound degree of exactly 1   
- is a weakly connected directed acyclic graph   
- nodes with no out-bound degree are the leaves   
- there can only be one root, while there can be ($\infin$) amount of leaves   
- any nodes with exactly one in-bound degree while having a out-bound degree $> 0$ is an internal node   
   
for rooted trees, we use family-like terms (parent, child, ancestor, descendant, sibling, etc)   
linux file systems are a good example of a rooted tree   
# properties of trees   
trees are a graph where the removal of any edge disconnects the graph (are minimally connected). though the’re maximally acyclic, where adding any single edge would create a cycle within the tree.   
given if graph $G$ has finite vertices $n$, then it has $n -1$ egdes while being minimally connected and maximally acyclic   
***depth*** > when considering a rooted tree, we can measure the distance from a given node to the root node. essentially the depth of the vertex is its distance from the root   
- the root has depth 0   
- the depth of the whole tree is the max depth that can be found   
   
***height*** > (when considering rooted trees) is the maximum distance a vertex can be from the root (?)   
think of the depth and the height as the reversal of each other. where the depth goes from the root to the internal/leaf vertex, and height goes from internal/leaf vertex to root. following the usual definition of the two can help in remembering how they work.   
note: that (some how) depth and height are the same thing (as seen in the slides, would need to prove how)   
the height of the root will match the max depth in the tree   
# m-ary trees   
***m-ary tree*** > a rooted tree where every internal vertex has upmost of $m$ outbound edges.   
***full m-ary tree*** > a rooted try where every internal vertex has exactly $m$ outbound edges   
an m-ary tree of height $h$ has at most $m^h$ leaves (can be proven through induction)   
## binary search trees   
here we can directly talk about having upmost 2 children, (left/right child).   
- given a totally ordered set, we can create a binary search tree and assign each element a key   
- in a way that the keys in the left of the descendant is smaller than the key in question   
- and also the keys in the right descendants is greater than the key in question   
   
the great thing about these trees, is that within each step of traversing the tree for a vertex, we shrink the search space by half. as we are comparing to the current vertex key with the target key, and we know which direction in the tree to go   
## balanced trees   
the height of the tree coincides with its depth, meaning if there are very long branches, the search algorithm becomes less efficient as it might as well be searching iteratively through a list.   
the ideal binary search tree, would be to have all the leaves have either height $H$ or   
$H -1$. this is how we can make BST algorithm the most efficient.   
though when adding/removing new elements, we must make sure that the tree remains balanced to keep this property (***self balancing binary search trees***)   
# tree traversals   
traversals allow you to flatten out the density of a tree (given that the tree has some form of ordering) we can then list out the elements of the tree we can get the ordered list of elements   
given that $T$ is a rooted tree with root $r$ (everything is defined in terms of the base case). the same process as what was used in [data structures and algorithms CS-2210](https://app.notion.com/p/data-structures-and-algorithms-CS-2210-2d712276ddb4819587b8eab5bd55c9d3?pvs=21), though only difference is that a tree in this course may have more than 2 children.   
the *in-order traversal* though is usually reserved for binary trees   
## spanning trees (undirected)   
***spanning tree*** > is a graph (tree) that is well connected (in the finite sense)   
***spanning forest*** > the subgraph of $G$ that is a *forest* and contains all vertices of $G$   
thus when asked to form a spanning tree from a graph, we use the available edges and vertices in a connected graph (in the undirected case). if not connected, then do the next best thing and make spanning trees within those forests.   
note that despite a having a connected graph, you can forcefully make it a spanning forest depending on how you illustrate the connection. and is even acceptable to consider each node as a forest to make a spanning forest   
- examples of spanning trees and forests   
   
### algorithms to find notable spanning (undirected) trees   
***depth-first search*** > creates spanning trees with long branches and few leaves. ie will naturally form a single line within a connected graph.   
- it’s possible for the algorithm to traverse and mark each node with in a way that forms a single un-branching line   
- though it can form branches if the algorithm needs to back track when encountering a dead-end, while knowing there’s more nodes to find in the tree   
   
***bread-first search*** > forms a spanning tree with as many short branches as possible   
- given an initial node, will add it a list of nodes that need to be visited. this list tracks the nodes that its neighbors that need to be visited still   
- then you add its neighboring nodes while removing the node that was just visited (ensuring that its marked so the algorithm can know that its already visited)   
- then based on whatever order is defined, select one of the nodes in the list, and then add its neighbors (given they haven’t been marked already to the list, while removing that current (root) node.   
- this pattern continues until all nodes have been visited and the list is empty   
   
review slide pages from 42-59 for examples of what it could look like   
## spanning trees (directed case)   
when a directed graph is strong connected, then its possible to form a spanning tree. though when weakly connected, a spanning forest is at most what can be accomplished.   
- examples of spanning directed trees   
