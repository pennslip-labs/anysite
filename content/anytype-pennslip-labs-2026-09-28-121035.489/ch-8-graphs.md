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
id: bafyreigibnqjn2gdoxton5ab7admwvgwhzghkhz773gsqb2f5x47njb6be
---
# ch. 8 graphs   
Progress: In progress
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv slides vvv***   
[CS2214\_08\_Graphs.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_08_Graphs.pdf)   
***graph*** > made up of a set of V vertices/points that rep objects, and a set of E edges/segments connection pairs of vertices and reps relations between objects. using the notation $G = (V,E)$   
# simple graphs   
***directed graph*** > given the set $E \sube V \times V$, if $(a, b) \in E$, then $a$ is the initial vertex and $b$ is the terminal vertex of the edge $(a,b)$.   
- (a,a) would be a loop   
- edges here are drawn using arrows to show direction   
- usually used to represent the flow of information or a path   
- known as a simple graph   
   
***undirected graphs*** > when edges have no direction, no starting points - just ending points. just a connection like a 2-way road.   
- loops are still possible here   
- between the same 2 vertices, there can be only one edge   
- useful in representing various connections like in a network   
- also known as a simple graph   
   
# multigraphs   
***directed multigraphs*** > the same as the other version, but with the added possibility that there can be multiple edges between the same vertices   
***undirected multigraphs*** > same shit   
***weighted multigraphs*** > where each edge is given a number/weight to represent some additional info that allows an edge to be compared with one another. (like the length of an edge or something between two cities given an edge as a highway)   
# graph properties (simple or multi)   
***degree*** > the number of vertices that are connected to a single vertex. otherwise the vertices adjacent to itself   
- the neighborhood of a vertex $v$ is the set $N(v)$ is all the adjacent vertices to $v$   
- note that this is only possible to calculate in undirected graphs   
- the neighborhood of a subset of vertices in a graph $A \sub V$, then $N(A)$ would encompass all the vertices that are adjacent to at least one of those vertices in A. like a cul-de-sac that has only one road that connect it to the rest of the community   
   
***handshaking theorem*** > for any undirected (multi)graph, we can get the number of edges within a graph through below   
$$
2\|E\| = \sum\_{v \in V} \text{deg}(v)
$$   
- each edge has 2 endpoint, so the sum of all the vertex degrees is the twice the number of edges.   
- then of course, the sum of degrees of the vertices of an undirected (multi)graph is even   
   
***degree sequence*** > is simply the sequence of degrees for each vertex in a graph listed in decreasing order. to help further know we have the correct numbers in the sequence, the *degree sequence $= \|E\|$,* or otherwise should be the same as the *handshake theorem* over 2 ($\frac {\sum\_{v \in V} \text{deg}(v)} 2$)   
example of the above   
## degrees in directed graphs   
***in-degree*** > the number of edges that point towards a vertex. denoted as $\text{deg}^-(v)$   
***out-degree*** > the number of edges that point away from the vertex. denoted as $\text{deg}^+(v)$   
a loop on a vertex counts towards both the in/out-degree of that same vertex   
to find the number of edges in an (simple/multi) directed graph. similar to the handshake theorem but slightly modified   
$$
\|E\| = \sum\_{v \in V} \text{deg}^-(v) = \sum\_{v \in V} \text{deg}^+(v)
$$   
the proof for the above, is that the in and out degrees will match as once you have a out degree somewhere, it will be balanced out by an in degree somewhere else.   
# special graphs   
***complete graphs*** > when given $n$ vertices ($K\_n$), is an undirected simple graph. ie, *there must be only one edge between any two edges and all vertices can be reached by one another*   
***cycle*** > a cycle $C\_n$  (that is $n \ge 3$) is an undirected simple graph made of $n$ vertices where each vertex is connects to one another in a giant loop and $n -1$ is the number of edges . can be used to model local area networks.   
***wheel*** > a wheel $W\_n$ (that is when $n \ge 3$, with $2n$ edges) is an undirected simple graph built adding one additional vertex in a *cycle* that connects to every other vertex in the cycle. used to model local area networks along with a central connected hub   
note that for the wheel, the number of vertices is actually $n + 1$. as it takes a normal cycle, and then adds a vertex connecting to all other vertices. but for this course is denoted as $W\_{k-1 = n}$ where $k$ is the actual number of vertices in the graph   
***cube*** > an n-cube or n-dimensional hypercube is a graph denoted as $Q\_n$ where each vertex is labelled with a $n$ length bit integer.   
- *two vertices are adjacent given their bit assignment is different by only one bit*   
- so a 2D cube would have bit labels of length 2, and a 3D cube would have bit labels of length 3, and so on   
   
***bipartite graphs*** > when a graphs vertices are even, and are able to alternate between coloring its vertices with two colors such that the same color is not adjacent to itself   
a graph with loops cannot be bipartite no matter the color assignment   
***complete bipartite graph*** > when a graph is bipartite, but each colored vertex connects to all the vertices of the opposite color   
# operations on graphs   
***subgraphs*** > (on a multigraph) given a graph $G = (V,E)$, its subgraph can be denoted by $H = (W,F)$ where $W \sube V$ and $F \sube E$.   
- we know that H is a *proper* subgraph of G when $H \ne G$   
- ***induced subgraph*** > essentially is a subgraph where, given the chosen vertices in $H$, only the that involve those vertices can be in that subgraph   
- an example of an induced subgraph   
    Let’s say your original graph $G$ has:   
    - Vertices: $V = \{a, b, c, d\}$   
    - Edges: $E = \{(a,b), (b,c), (c,d), (a,d)\}$   
   
    Now take subset graph, $S = \{a, b, d\}$   
    Then the **induced subgraph** $G[S]$ has:   
    - Vertices: $\{a, b, d\}$   
    - Edges: $\{(a,b), (a,d)\}$  — because those are the edges between $a, b, d$ in the original graph.   
   
    You **don’t** include $(b,c)$ or $(c,d)$ because $c \notin S$.   
   
subgraphs work on both undirected and simple graphs   
***union*** > the union of two simple graphs (denoted as $G\_1 \cup G\_2$) will cause the union of their edge and vertex list (the same notation)   
# representing graphs   
***adjacency list*** > a table specifying the vertices that are adjacent to each vertex of the graph.   
- a vertex with no edges is denoted as / in the table   
- for directed graphs, the list should distinguish between the initial vertex, and its corresponding terminal vertex   
- for a multi graph in particular, the list of adjacent or terminal vertices will simply have repetitions of the same vertex if there are numerous edges to the same terminal vertex   
   
an adjacency list is just a simple representation of a graphs edges, through the use of only its vertices.   
***adjacency matrix*** > given a simple *directed* graph, assuming $\|V\| = n$ and there is a chosen ordering of eahc verticy in $V$, the adjacency matrix of $G$ is the $n \times n$ matrix $A\_G = [a\_{ij}]$, where   
$$
a\_{ij} = \begin{cases}    1 & \text{if } (v\_i, v\_j) \in E \\
0 & \text{if otherwise}
\end{cases}
$$   
- an entry is set to 1 only if theres an edge between the initial vertex $v\_i$ and terminal vertex $v\_j$   
- again the look of the matrix depends on the ordering of the vertices   
- important to note, always when looking at the matrix, the rows will always associate with the first entry, whereas the columns associate with the second entry. (rows to $i$ and columns to $j$)   
   
note that we know there are loops if there are reflexive entries, and we are dealing with a multi graph if we are there are symmetric entries as well. (there only need to be one case of a symmetric pair to ID it as a multi graph)   
the adjacency matrix of an simple *undirected* graph is the same definition as above, though note that if there is an edge between two vertices, then it must be represented symmetrically in the matrix. that is, *the matrix of an undirected graph will be fully symmetric*   
when constructing a *multi undirected/directed graph*, the setup is the same. the only difference is that $a\_{ij}$ is now defined as “the number of edges between vertices $v\_i$ and $v\_j$”   
graph was drawn assuming that the vertices had a natural ordering from 1 to 4   
***incidence matrices*** > given a *directed* graph where the number of vertices equates to $n$,  their ordering is chosen, and the number of edges equates to $k$ with their ordering being chosen as well, the incidence matrix of $G$ is a $n \times k$ matrix $M\_G = [m\_{ij}]$ where on the left describes a *directed* graph, the right describes a *undirected* graph   
$$
m\_{ij} = \begin{cases} -1 & \text{if } v\_i \text{ is the initial vertex of } e\_j \\
1 & \text{if } v\_i \text{ is the terminal vertex of } e\_j \\
0 & \text{if } e\_j \text{ is is a loop on } v\_i \text{or if } v\_i \text{ is unrelated to } e\_j
\end{cases}
$$   
$$
m\_{ij} = \begin{cases} 2 & \text{if } e\_j \text{ is a loop at } v\_i \\
1 & \text{if } e\_j \text{ is not a loop and } v\_i \text{ is one of its endpoints} \\
0 & \text{if otherwise}
\end{cases}
$$   
similar to before, the incidence matrix’ appearance depends on the ordering of the vertices and edges   
# properties of graphs (extended)   
***isomorphism*** > given two different graphs, they’re *isomorphic* if there is a bijective function $f : V\_1 \rightarrow V\_2$ where any two vertices $a,b \in V\_1$, there is an edge from a to b in $G\_1$ iff there is an edge from $f(a)$ to $f(b)$ in $G\_2$ as well. otherwise known as an ***isomorphism of graphs***. to do a comparison the two graphs must be both   
- directed xor,   
- undirected xor,   
- multi xor,   
- simple   
   
in essence a *isomorphism of graphs* is simply the comparison of two graphs. where their are identical if both graphs have the same number of vertices, and the same edges between those vertices.   
thus $f : V\_1 \rightarrow V\_2$ is simply a graph comparison function that ignore edge labels and vertex ordering   
isomorphism is the abstract comparison of two graphs. ignoring the arrangement of vertices and the shape of edges. it only analyzes the adjacency list/matrix, doesn't worry itself with the aesthetics of the graphs   
## solving $f : V\_1 \rightarrow V\_2$   
example isomorphic graph   
we can solve for $f$ despite the labels of the two graphs above being different. $f$ is simply a function that maps the $V\_1$ to the vertices $V\_2$ so that the edges connecting in each respective graph matches without edges or vertices being left out. explicitly we have the below:   
$$
f : \{a ,b , c, d\} \rightarrow \{ v\_1, v\_2, v\_3, v\_4 \}
$$   
which then means $f(a) = v\_1, f(b) = v\_2$ and etc. then we need to check of the mapped parings from $f$ for their adjacent vertices of $f$. if they’re all consistent then the graphs is isomorphic.   
***pr***e***served isomorphism*** > the same as normal isomorphism, though with the added comparison of each graphs edge labels/weight and vertex ordering   
*graph isomorphism* is a NP problem as algorithms for this today have a worst case time complexity of $O(\|V\|)$. though this is considering that everything is done linearly. in otherwords, the comparison of two *large* graphs is quite hard.   
thus proving that two graphs are not isomorphic is easier than solving for isomorphism, either through have different number of edges, vertices, or one graph having edges between two vertices where the other graph doesn’t   
example of non-isomorphic graphs   
for the above, finding that the two graphs are not isomorphic is easier than trying to find isomorphism. given we are dealing with directed graphs, we can use the fact that if we find a difference in the number of edges/vertices, along with if each vertex has the same number of in and out degrees. which can see that if we mapped $f(b) = s$, then we can see that they’re in/out degrees miss match, which indicates non-isomorphism   
understand that with the above, we **cant use the same tricks to prove isomorphism**. the same grueling work that we had to do in the first example has to be done to do that.   
graph isomorphism is often used in:   
- molecular comparisons   
- circuitry comparisons   
   
***path*** > a sequence of edges that begins at a vertex, and ends at a different vertex, with other vertices in between them. essentially a sequence of $n -1$ edges and $n$ vertices   
- in an *undirected* (multi)graph, it’s a sequence of $n$ edges such that for all $1 \le e\_i \le n$ edges and $e\_{i+1}$ have a common end point. or in talking about vertices, given $n$ vertices, such that for $e\_i$ has the end points $v\_{i-1}$ and $v\_i$. **thus the path from $v\_0 = v\_v$ ,**   
    - the path (in a simple graph) can be identified as a tuple of the the vertices within that path   
    - the path in a multi graph, must be a tuple of edges given that each edges has some label attached to them   
- in a *directed* (multi)graph, the definition remains the same, with the added detail that the you must abide by the flow of the arrows. (the distinction of a path is the same as the above, vertex tuple for a simple graph, and a edge tuple for a multi-graph)   
- ***ci***r***cuit*** > a path of length $> 0$ from a vertex that leads back the same origin vertex   
    - ***simple circuit*** > when a circuit does not contain any repeated edges (otherwise known as *cycles*)   
    - ***acyclic graph*** > when a undirected graph contains no simple circuits   
    - ***directed acyclic graph (DAG)*** > a directed graph with no simple circuit   
- the length of a path is determined by the number of edges within it   
   
if a graph is acyclic (only when the graph is undirected) then by the definition of the simple circuit, the graph in question is also a simple graph   
a non simple circuit example here could be if we ran through $(x, c, d, x)$ twice, as multiple edges would be repeated   
despite a path containing the same vertex more than once, it can still be a simple path/circuit so long as the same edge is not is not repeated   
# connectivity   
***connectivity*** > given an undirected (multi)graph, it’s connected if between every pair of vertices there is at least one path. otherwise, the graph is ***disconnected***. in other words, every vertex must have an edge between one another that allows a path to form through all vertices.   
- ***undirected connected components*** > a graphs connected components is all the subgraphs that form the full graph   
    - when a graph is connected when there is only a single connected component which is the whole graph itself   
    - thus when there are multiple connected components within a graph, then it indicates the graph is disconnected   
   
now the resulting graph after removing some edges and vertices results in the graph being made up of 3 connected components (subgraphs G, H, and J)   
for a graph to remain connected, you cannot add any more vertices without it loosing that connectivity, lest you add an edge that connects that vertex to the rest of the graph.   
thus when adding or even removing edges/vertices (regardless of the graph type), its indicative to check whether the graph still remains connected, as some removals and additions of vertices/edges result in disconnection   
***connectivity*** (directed graphs) > is based on two properties, if neither of the properties below are true, then the graph is disconnected   
- ***weakly connected*** > occurs if you forget about the direction of arrows (the ***underlying undirected graph***), then all vertices still have a path between them.   
- ***strongly connected*** > if between every pair of vertices there is at least one path that leads to the vertices in both directions (this refers to the proper notion of connectivity, which implies weak connectivity)   
   
example of directed graph connectivity   
connected components within directed graphs, then takes the definition of weakly and strongly connected notion, and applies it to each component.   
- note that a component made up of only one vertex, is both *strongly/weakly connected*   
- when the whole graph is weakly connected, then it implies that the full graph is made up of strongly connected connected components   
    - note that, there can be different levels of connected components (peep the example below)   
   
it’s neither weakly or strongly connected as even when we consider the underlying undirected graph here, vertex $d$ has no edges to any other vertex. which without weak connectivity, theres no chance of there being strong connectivtiy   
***awesome theorem*** > gives the number of possible of paths between vertices in either a directed or undirected (multi)graph.   
- given we have available its adjacency matrix $A$ (in respect to vertex ordering), for any integer $k > 0$, the number of distinct paths of length $k$ from $v\_i$ to $v\_j$ is equal to then $(i,j)$ entry of $A^k$.   
- this proof is through induction on $k$   
   
## Euler paths and circuits   
given any directed/undirected (multi)graph:   
- ***Euler path*** > is a simple path containing every edge of the entire graph   
    - when a undirected graph contains a Euler path:   
        - if the graph is connected (no strangling vertices)   
        - if exactly two vertices have an odd degree (which will be the start and end points)   
    - when a directed graph has a Euler path:   
        - is strongly connected   
        - exactly one vertex has out-degree = in-degree + 1 (the starting vertex)   
        - exactly one vertex has in-degree = out-degree + 1 (the ending vertex)   
        - all other vertices have equal in-degree and out-degrees   
- ***Euler circuit*** > is a graph simple circuit containing every edge of the entire graph   
    - Euler circuits in undirected graphs:   
        - when the graph is connected   
        - every vertex has an even degree   
    - Euler circuits in directed graphs:   
        - when the graph is strongly connected   
        - every vertex has an equal in-degree and out-degree   
   
if not all vertices in a graph have an even degree, then there can’t exist Euler circuit. furthermore, if there are more than 2 vertices with odd degrees, then neither a Euler circuit or Euler path can exist   
an undirected graph has an Euler circuit iff every vertex has an even degree, and all of its verteces with a degree $> 0$ belong to a single connected component   
# Hamilton paths and circuits   
where Euler paths/circuits concern edges, Hamilton paths/circuits concern vertices   
***Hamilton path*** > is a simple path that passes through every vertex of $G$ exactly once   
H***amilton circuit*** > a simple circuit that passes through the start vertex exactly twice (a circuit that starts and ends at the same vertex) and passes through every other vertex in the graph exactly once.   
despite being simply defined, and similar to Euler paths/circuits, there is no known simple sufficient conditions that can be met to identify when a Hamilton path/circuit is present. thus you have to check the graph iteratively in order to find the existence of one   
## some Hamilton theories   
***theorem G. A. Dirac*** >   
