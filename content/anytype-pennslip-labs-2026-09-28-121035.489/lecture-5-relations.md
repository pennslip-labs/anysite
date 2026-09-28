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
Links:
    - ch-10-number-theory.md
id: bafyreiav3sdbfn22axgh6tj2wmpr4j6ndwdcdtqkdrr6povn5zqzcynjhe
---
# lecture 5: relations   
Progress: In progress
Week: week 4
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv slides vvv***   
[CS2214\_05\_Relations.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_05_Relations.pdf)   
***binary relation*** > a relation R is a subset of the product of AxB ($R \sube A \times B$). which can also be true of the product of AxA. the idea is the same   
- some homework to help with understanding   
   
# binary relation properties   
this is all based on the relation composed of $R\sube A\times A$   
***reflexivity*** > when all possible pairs where both entries are the same is present in the relation. (all entries of the form (a,a) are in the entry)   
$$
\forall a(a\in A \rightarrow (a,a) \in R)
$$   
***irreflexivity*** > when the relation contains no pairs with matching entries.   
$$
\forall A(a \in A \rightarrow (a,a) \notin R)
$$   
careful, as reflexivity is not the negation of irreflexivity. its possible of a relation to be neither.   
***symmetry*** > when theres the pair (a,b) then it implies (b,a) must exist too (both (a, b) and (b,a) must be present in the relation)   
$$
\forall a,b \in A((a,b)\in R \rightarrow (b,a) \in R)
$$   
***antisymmetry*** > if both pairs (a,b) and (b,a) is present in the relation, then it implies a=b (the only way for both pairs to exist in the relation)   
$$
\forall a,b \in A [((a,b) \in R \land (b,a) \in R) \rightarrow a=b]
$$   
***asymmetry*** > if the pair (a,b) exist, then (b,a) cant exist as well   
$$
\forall a,b \in ((a,b) \in R \rightarrow (b,a) \notin R)
$$   
- a relation is asymmetric iff its both antisymmetric and irreflexive   
   
***transitivity*** > when pairs (a,b) and (b,c) exist, then (a,c) must exist as well   
$$
\forall a,b,c \in A [((a,b) \in R \land (b,c) \in R) \rightarrow (a,c) \in R]
$$   
**heavy note**, understand that any of these definitions above can be vacuously true due to their definition. as without the premise then the implication can neither be proven true or false. thus its always true   
## Relationship ordering properties   
***partial order*** >  binary relation that is *reflexive, antisymmetric,* and *transitive*\*\*.\*\* given its a binary relation $R$ on set $A$, then the par $(A,R)$ is a *partially ordered set* or a ***poset***.   
a *poset* is a relation that organizes its elements based on hierarchy or precedence. though not every pair of elements are comparable to one another. meaning not every elements of the pair is used in the relation   
note that partial order simply models $\le$. so the moment there are the properties above found, we can flatten the relation to be something like $(\le, A)$ or $(\sube, A)$.   
- Example of a poset using subset inclusion   
    Let $A = \{ \emptyset, \{1\}, \{1,2\} \}$   
- Reflexive: Every set is a subset of itself.   
- Antisymmetric: If $X \subseteq Y$ and $Y \subseteq X$, then $X = Y$   
- Transitive: If $X \subseteq Y$ and $Y \subseteq Z$, then $X \subseteq Z$   
   
✅ So $\subseteq$ is a partial order on the power set of any set.   
***total order*** > is a *poset* though with the added restriction that every pair is comparable. that is, It’s reflexive, antisymmetric, transitive, and $\forall a,b$ theres either $a \le b$ or $b \le a$   
- example of a totally ordered set   
    Let $A = \{1, 2, 3, 4\}$   
- Reflexive: $a\leq a$   
- Antisymmetric: If $a \leq b$ and $b \leq a$, then $a = b$   
- Transitive: If $a \leq b$ and $b \leq c$, then $a \leq c$   
- Total: For any $a, b$, either $a \leq b$ or $b \leq a$. essentially is the first half of antisymemtry. but doesnt care whether or not $a = b$ holds. it just makes sure that all tuples can be compared against one another   
   
✅ So $(\{1,2,3,4\}, \leq)$ is a **totally ordered set**   
total order is simply either strict order or partial order (modelling either $<$ or $\le$ respectively) .which *adds totality* where every pair within the set is comparable   
***strict order*** >  binary relation that is irreflexive, transitive, and asymmetric. usually used to model “less than” or “precedes” relationships. best used in cases for ranking, priority, or precedence   
- strict order example   
    Let $A = \{1, 2, 3\}$ and define $R$ as the relation $<$   
    - Irreflexive: No number is less than itself. impossible to have flipped pairs due to its relationship behavior. thus is irreflexive   
    - Transitive: If $1 < 2$ and $2 < 3$, then $1 < 3$   
    - Asymmetric: If $1 < 2$, then $2 < 1$ is false and cant exist in $R$   
   
    ✅ So $<$ is a **strict total order** on $N$   
   
unlike total ordered sets and posets, strict orders never relate an element to itself. see the slight difference in relation definition between the example for strict order, and the one for total order   
note that when needing to *induce* a new ordering (say making a strict order into a partial order), you simply need to just add a little extra in the definition of the relation for it to inhibit the properties of the target ordering. the base comparison logic (either $\le$ or $<$) doesnt actually change   
- **From partial to strict**: You **remove reflexivity** by excluding pairs where a = b.   
    $a < b \iff a \leq b \land a \neq b$   
- **From strict to partial**: You **add reflexivity** by including $(a, a)$ for all $a$.   
    $a≤b  ⟺  a<b∨a=b$   
   
# combining relations with operations   
relations use the same *union, intersection,* and, *compliment* operators as normal sets   
the ***inverse relation*** $R^{-1}$ is simply the entries of R but where the order of the *tuples* are flipped/reversed   
look for a more clear definition of it like how it is above. ( the ones in the slide is confusing)   
***composition of relations*** > a transitive relationship between two relations (similar to how it was defined above but with set as whole) for example the composition of $R\_2 \sube B\times C$ with $R\_1 \sube A \times B$ forms $R\_2 \circ R\_2 \sube A \times C$   
$$
R\_2 \circ R\_1 = \{(a,c) \in A \times C \|[\exist b \in B ((a,b) \in R\_1 \land (b,c) \in R\_2) ]\}
$$   
***power relations*** > simply is a relation (specifically when $R \sube A \times A$) composition of itself n times. essentially finding the pairs (a,b) and (b,c) and including the transitive pair (a,c) in the newly composed relation.   
- Let’s say $A = \{1, 2, 3\}$, and define: $R = \{(1, 2), (2, 3)\}$   
    note that $R^n$ is simply the $n$ amount of transitive steps that can be be made. with the example below, for $n = 2$ we look for two pairs from the set $A \times A$ to form the transitive pair (regardles if it’s present in $R$). but if $n = 3$, then we look for transitive pairings using 3 pairs ($(a, b), (b,c), (c,d)$ thus $R^3 = (a,d)$   
    Then:   
    - $R^1 = R$   
    - To compute $R^2$, look for pairs $(a, b)$ and $(b, c)$ in $A \times A$   
   
    Here:   
    - $(1,1), (2,2), (3,3), (1,2), (1,3), (2,3), (2,1), (3,2) \in A \times A$   
    - which are are the two step transitive pairs within the set $A \times A$   
    - note that reflexive pairs is always included when talking about transitivity when considering $R^n$   
   
    So we get:   
    - $(1, 3) \in R^2$   
   
    Thus:   
    $R^2=\{ (1,1), (2,2), (3,3), (1,2), (1,3), (2,3), (2,1), (3,2) \}$ which makes sense as $R \sub R^2 \sub A \times A$   
    if you were to continue here to $R^3$ and onward, it would look for the same transitive path. though seeing as $R^2$ only has one element, all subsequent relations will be an empty set $\empty$   
   
note that to find $R^3$ you have to find $R^2$ first, and so on.   
additionally, any relation that is both reflexive and transitive, means that said relation to the $n^\text{th}$ power be the same as the $R$. primarily from the fact that with reflexive pairs being present, it allows more possible transitive pairs to occur. which allows all pairs in the relation to be reached by an intermediate element. making all pairs in $R$ also in the subsequent powers of $R$.   
***symmetric closure*** > an operation where you take a given relation and then include all flipped pairs in it. denoted as $R^\text{sym}$ or $R \cup R^{-1}$. based on the notation alone, the steps to finding this is quite simple.   
***transitive closure*** > an operation where, given a relation all transitive pairs are added to the relation. is denoted as $R^+$. essentially is a union of $R \cup R^n$ where $n$ represents however many compositions are need to form $R^+ = R \cup R^n$   
also holds for powers of relations. where a general rule is that $(R^n)^\text{sym} = R^n \cup (R^n)^{-1}$. which holds for all $n^\text{th}$ powers of $R \ge 1$.   
# equivalence relations   
a relation $R \sube A \times A$ is a equivalence relation if it’s reflexive, symmetric, and transitive. thus given any tuple $(a,b) \in R$, $a$ and $b$ are equivalent ot one another.   
is used frequently for [congruence modulo](ch-10-number-theory.md) $m$. for example, the relation $\{(a,b) \in \Z \times \Z \mid a \equiv b \mod m\}$   
- is *reflexive* as for any element in $a$ in $\Z$, it will still meet the criteria for modulo as it would just be $(a \equiv a \mod m)$   
- is *symmetric* as the pairs $(a,b)$ and $(b,a)$ are both in $\Z \times \Z$. and both would belong to the same equivalence class where $a \equiv b \mod m$  or $b \equiv a \mod m$   
- is *transitive* as any pairs that meet the congruence modulo will also contain any possible transitive tuples as well in respect to their equivalence class. you can walk from various tuples in the relation and still stay in the same equivalence class   
-    
   
key thing with equivalence relations and congruence modulo $m$, is that reflexivity, transitivity, and symmetry can held without leaving a a equivalence class.   
# relations and matrices   
simply placing A on the rows of the matrix and placing B on the columns. making sure the relation of course is finite. the presence of a pair will indicate there being either a one or zero in the matrix position.   
be sure to pick out a consistent ordering of the sets A and B as it may produce a different matrix   
from knowing the ordering of A and B along with a already produced matrix we can infer what R would be   
relational properties can be seen through the matrix as well   
- reflexive iff all elements on the main diagonal (along the identity matrix line) are 1   
- irreflexive iff all the elements on the main diagonal are 0   
- symmetric iff $m\_{ij}=m\_{ji}$ (the matrix itself is symmetric where all entries set as 1, have another entry set to 1 in the reverse indices (i,j) to (j,i))   
- antisymmetric iff for any entries not along any of the diagonals or where `i != j` the entries are either 1 or 0 (that is $m\_{ij} = 0 \lor m\_{ji} = 0$)   
   
# relations and graphs   
***directed graph*** > consists of a set of $V$ vertices (nodes/points) and a set $E \sube V \times V$ of *edges*. where $V \times V$ represents all the possible edges that can exist within the respective graph.   
- given $(a,b) \in E$, $a$ would be the *initial vertex* while $b$ would be the *terminal vertex* of the edge $(a,b)$   
- ***loop*** > an edge of the form $(a,a)$   
- edges are drawn as arrows from the initial vertex to the terminal vertex   
- a ***graph*** is denoted then as $G=(V,E)$   
   
for example, the graph $G=(V,E)$ with $V=\{0,1,2\}$ and $E=\{(0,0),\space(0,1),\space(1,0)\}$ would look like the image here →   
a *relation* $R \sube A \times B$ can be shown as a graph with $V=A \cup B$ and the edge set $E$ renamed as $R$
if $A \neq B$, then the elements of A and B must be kept seperate through the use of a venn diagram (to help indicate which set an element belongs to) this is in spite of having similar elements   
though when drawing $R \sube A \times A$ the venn diagram of $A$ isnt needed   
for example, for $A = \{0,1,2,3\}$, $R=\{(x,y) \in A \times A \space \|\space  x \text{ is a multiple of } y\}$  can be represented as the graph,   
Hasse diagrams are a bi-product of posets and totally ordered relations   
## graphs and relational properties   
- the relation is *reflexive* iff all elements of $V$ have a loop (all $V$ have edges of the form $(a,b)$)   
- a relation is *irreflexive* iff no elements of V have a loop   
- a relation is *symmetric* iff there are double the amount of edges (ie, where ever theres $\forall x,y \in V((x,y)\in R \rightarrow (y,x) \in R)$)   
- its *antisymmetric* iff given an edge $(x,y)$ where $x\neq y$, then $(y,x)$ cant exist as an edge in $R$ (ie, while excluding any reflexive edges, there cant exist any double edges)   
- its *transitive* iff when given the edges $(x,y)$ and $(y,z)$, then the edge $(x,z)$ exist as well   
   
remember that with symmetry, antisymmetry, and transitivity, there is the possibility that they can be vacuously true. peep back at [binary relation properties](lecture-5-relations.md)   
in using the picture above as an example, we can no examine the properties it has:   
- every vertex has a loop so $R$ is *reflexive*   
- (0,1) is an edge, though theres no (1,0) edge so $R$ is not *symmetric*   
- while ignoring the reflexive edges, when there’s a edge $(x,y)$ then there cant be an edge $(y,x)$. which is the case; making $R$ *antisymmetric*   
- can see that the graph is *transitive* as since the flow of edges tend toward the vertex 1, we can see that no matter the path, $(x,y) \land(y,z) \rightarrow (x,z)$ is satisfied to be true.   
