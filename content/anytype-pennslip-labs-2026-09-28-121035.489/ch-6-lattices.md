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
id: bafyreifpl3yga3u3z23hvyf3l2t7yl4thcw446phvsrrsc7ujppatzcdnu
---
# ch. 6 Lattices   
Progress: Done
Week: week 6
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv slides vvv***   
[CS2214\_06\_Lattices.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_06_Lattices.pdf)   
# lattices as order theoretic structures   
## simple terms   
***lattice*** > a nonempty totally ordered set (a poset, is reflexive, antisymmetric, and transitive) where every pair of elements has a *lowest upper bound* (LUB) and an *greatest upper bound* (GLB)   
***lgb*** (join) > similar to the idea of “$\ge$” where its the element that’s directly above both elements. AKA, the lowest of the things above both elements   
using the example hasse diagram to the side, the GLB of D and E ($D \lor E$) would be C   
***GLB*** (meet) > the highest of the things below both elements   
with the hasse diagram, the GLB of A and B ($A \land B$) would be Top   
```
  Top
 /   \
A     B
 \   /
   C
  / \
 D   E

```
a lattice in simple terms is a *poset*, where every pair of elements has a unique *join* and a unique *meet*   
## example using $P(A)$   
in visualizing with sets more clearly, union and intersection can be used given the poset (otherwise denote as $(P(A), \sube)$) where $A=\{1,2\}$ and 𝑃(𝐴) = {∅, {1}, {2}, {1, 2}}.   
using subset inclusion $\sube$, this will indicate when a set is “less than or equal to” another set if its the subset of said set. its our way of comparing two sets against each other   
the $P(A)$ is a lattice as with any two elements of $P(A)$, then can always be found a LUB and a GLB.   
say $B= \{1\}$ and $C=\{2\}$. $B\cup C = \{1,2\}$ would be the join ($\lor$); representing the smallets set that includes everything from both.   
whereas $B \cap C = \empty$ would be the largest set thats shared between both; representing the meet of B and C ($\land$)   
```
  {1,2}
  /    \
{1}    {2}
 \     /
    ∅

```
through this hasse diagram, can see how exactly they map out in relation to one another.   
where the top contains all subsets, and the bottom is contained in all subsets   
### what $(P(A),\sube)$ actually means:   
- looking at the set of all subsets of A   
- we’re organizing them using the subset relation as our ordering rule   
- thus forming a poset (partially ordered set)   
- this is the structure of how we would define a lattice   
    - the set we’re pulling from   
    - the ordering rule used in the set   
   
## example of the lattice $(\N, \le)$ and $(L, \le)$   
given $n,k\in \N$ we can say $\text{max}(n,k) = n \lor k$ and $\text{min}(n,k) = n \land k$. where then the set is ordered given that $n\le k$.   
- thus the upper bounds of the set $\{n,k\}$ would be $k$ incrementing ($k, k+1,k+2,...$. where then the LUB would simply be $k$.   
- in the same way the lower bounds of the same set would be from $0 \text{ to } n$ . where the GLB would be $n$.   
- the same would be true for any totally ordered set $(S,\le)$: for any $a,b \in S, a  \lor b = \text{max}*{\le} (a,b)$ and $a \land b = \text{min}*\le(a,b)$ (or simply the maximum and minimum of the set $\{a,b\}$ with respect to the order $\le$ respectivley)   
   
within another example, let $(L,\le)$ be a lattice. rewritting the definitions of lub and glb in terms of $\lor$ (meet) and $\land$ (join), we have that for any $a,b,c \in L$:   
1. $a \le a \lor b$ and $b \le a \lor b$ (meaning $a \lor b$ is an upper bound for $\{a,b\}$)   
2. if $a \le c$ and $b \le c$ then $a \lor b \le c$ (that is, $a \lor b$ is the smallest upper bound for $\{a,b\}$)   
3. $a \land b \le a$ and $a\land b \le$ (meaning $a\land b$ is a lower bound for $\{a,b\}$\_   
4. if $c \le a$ and $c \le b$, then $c \le a  \land b$ (that is, $a \land b$ is the greatest lower bound for $\{a,b\}$   
   
for point 1 helps build toward point 2. and that point 3 helps build toward point 4 above.   
*find the proof for points 3 and 4 (1 and 2 in slides)*   
# lattices as algebraic structures/   
in a more algebraic definition, ***lattice*** > a triplet $(L, \land , \lor)$ made of a set L and 2 binary operations meet and join on L that satisfy the following axioms:   
the same theorems proved above. and similar to the thereoms found in propositional logic   
# equivalence between the 2 definitions of lattices   
the “order-theoretic” lattice gives rise to the “algebraic” lattice given the definition: $a \lor b = \text{lub}*\le(\{a,b\})$ and $a \land b = \text{glb}*\le(\{a,b\})$   
also, given an algebraic lattice, we can define an order relation $\le$ on L by $a \le b \text{ iff } a \lor b = \text{ iff } a\land b = a$ (from the properties seen above). resulting in the poset $(L, \le)$ as a lattice as well, in which for any $a,b \in L, \text{lub}*\le(\{a,b\}) = a \lor b$ and $\text{glb}*\le (\{a,b\}) = a \land b$   
exercise to prove how the binary relation $\le$ defined as the above is a partial order on L   
any order theoritic lattice is also a algebraic lattice and vice versa. thus both can be used interchangeably   
# bounded lattices   
***bounded lattice*** > when $(L, \le)$ has a max $\top$ and a min $\bot$ \*\*\*\*\*\*or defined explicitly as there being 2 elements $\top, \bot \in L$ such that $\forall a \in L (\bot \le a \le \top)$.   
the elements max and min also have algebraic representations as well (using join and meet). where,   
1. $\forall a \in L, a \lor \bot = a$ (min is the neutral element of the join operation)   
2. $\forall a \in L, a \land \top = a$ (max is the neutral element of the meet operation)   
   
exercise, show that in a bounded lattice, the min is the unique neutral element of the join, in respect to max and meet   
any none-empty finite lattice $(L, \le)$ is automatically bounded. meaning $\top = \text{lub}(L)$ and $\bot = \text{glb}(L)$ will always be true   
for example:   
- the poset $(\N , \le)$ of natural numbers with their usual order relation is a lattice, given that $\N$ is a totally ordered set   
- though its not bounded as though it has a min 0, theres no maximum on the set $\N$   
   
a way to create a bounded lattice from $(\N, \le)$:   
can be done by introducing an extra element say $\infin$ or even just $\top$. and then extend the order so that $\infin$ serves as the max by the following,   
$(\N \cup \{ \infin \}, \le)$, where $n \le k$ as usual if $n,k \in \N$, and $\forall n \in \N (n \le \infin)$ creating the hasse diagram →   
theres also a way to define the set $\N$ as a bounded lattice without introducing a new element in the set $\N$. which is done through the ***divisibility relation*** (using the symbol \|). where $n\|k \text{ iff } k$ is a multiple of $n$. *can figure out and show how \| is a partial order on $\N$*   
now given $(\N, \|)$ as a poset, the max is 0 (as 0 is the multiple of any natural) and min would be 1 (as any natural number is a multiple of 1). from this we can say that for any $n,k \in \N$,   
- n meet k is the same as the lub of n and k, which is also the same as the lcm of n and k as well   
- the join of n and k equates to the glb of n and k, and is the same as the gcd of n and k   
- note that $\text{gcd}(n,0) =n, \text{ gcd}(n, 1) = 1, \text{ lcm}(n, 0) = 0, \text{ lcm}(n, 1) = n$   
   
# complemented lattices   
given the bounded lattice $(L, \le)$, the complement of an element $a \in L$ is an element $b \in L$ such that $a \lor b = \top$ and $a \land b = \bot$   
***complemented lattice*** > a bounded lattice where each element has a complement   
an element of a lattice may have more than one complement   
may be helpful for the midterm   
# distributive lattices   
***distributive lattice*** > a lattice where $\forall x,y,z \in L$,   
- the join distributes over the meet   
- the meet distributes over the join   
- like expanding polynomials. thus a lattice is distributive if through its original form, it can be equated to at least one of the distributive form with three elements as above.   
   
## distributive and complements   
if a bounded lattice is distributive, then every one its elements has at most one complement. which can be proven   
conversely, in a complemented distributive lattice, every element $x$ has a complement $\neg x$. and $\neg \neg x = x$   
# boolean algebras   
***boolean algebras*** > a complemented distributive lattice. that is, a set $B$ containing a min and a max, and the binary ops join and meet, and the unary operation $\neg$ such that $\forall x,y,z \in B$, the following axioms hold   
for example, the set of first order logic with the truth values $\{0,1\}$ is a boolean algebra with respect to the operation jon and meet. which very much act like lor and land   
look into lindenbaum-tarski algebra   
