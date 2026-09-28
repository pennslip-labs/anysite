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
id: bafyreiermh4mervmqkolmkdxvtee65yhqds5nh4ibyyjsqqnso6hvoszm4
---
# ch. 7 functions   
Progress: In progress
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv lecture slides vvv***   
[CS2214\_07\_Functions.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_07_Functions.pdf)   
***function*** > denoted as $\text{f} :A \to B$, given that $A$ and $B$ are two none empty sets, where function *f* is a mapping from an element (a) from $A$ to an element (b) in $B$. otherwise can denoted as $\text{f}(a) = b$, and can be called a ***total function***   
- can be understood as the relation $\text{f} \sube A \times B$; satisfying two conditions   
    1. every $a \in A$ appears as the first entry of the couple in the relation f   
    2. no 2 distinct elements of the relation have the same first entry. that is, input $a$ can have 0 xor 1 uniquely mapped output of $b$.   
    3. together the above two compile into the following: $\forall aA$ there is a unique $b$ in $B$ such that $a$ is in relation with $b$. giving the overall definition below   
   
    $$
\forall a \in A, \space \exist! b \in B ((a,b) \in f)
$$   
- A is the domain shown as $f(\text{Dom(f)})$   
- B is the codomain, shown as $f(\text{Codom(f)})$   
- b is called the produced image. while b is the pre-image that makes b.   
   
two functions are equal when they have the same domain and codomain, and have the same mapping between their elements   
# graphs of functions   
given a function f, its graph would be the set of pairs $\{(a,b) \| a \in A \land f(a) = b\} \in A \times B$. taking note that this definition matches the definition of a graph in terms of a relation.   
can only call a function a graph given that its domain and codomain are subsets of $\R$. allowing it to be drawn on the cartesian plane   
# properties of functions   
## partial functions   
***partial function*** > given a function f from A to B, where specifically all elements of B are mapped to a subset of A. that is, the input is restricted.   
commonly used in computer science where programmers need to restrict certain input either for code level function interactions, or user level program interactions so that everything runs in a controlled and more predictable manner   
## injective functions   
***injective function*** > (can be either total, or partial) function f is injective (or *one-to-one*) iff distinct elements of the domain have distinct elements of the codomain. meaning if multiple pre-images map to a single image, it must mean those pre-images are all the same. or, $(f(a) = f(b)) \to (a = b)$   
injectivity depends on the domain, and the chosen relation   
### injectivity examples   
say we have the function $f:\N \to \N, f(x) = x^2$. this function is injective as when we assume for some $x,y \in \N, f(x) = f(y)$. meaning $x^2=y^2$. which can only happen if $x=y$. since both the domain and codomain are positive integers, the output and input is restricted to a specific input and specific output.   
now say we have the function $f:\Z \to \N, f(x) = x^2$. this function isnt injective as when we assume for some $x,y \in \Z, f(x) = f(y)$. meaning $x^2= y^2$. which can only happen when $x = -y$. as with the domain being on the set of integers, it means we have to also consider the input being negative. which in the case of the functions relation defined as $x^2$, means there can be 2 possible inputs that can produce the same image.   
take the example $f(-1) = f(1) = 1$. the two distinct inputs have the same image yet different pre-images   
as another example, say we have function $f: \R \to \R, f(x)=\sin(x)$. this function is not injective as for $f(x) = f(y)$, that would mean $\sin(x) = \sin(x+2\pi)$. which is two different pre-images with the same image.   
though if we were to restrict the domain to $[-\frac \pi 2, \frac \pi 2 ]$ due to the definition of $\sin$, now the function becomes injective   
## surjective functions   
***surjective function*** > (can be total or partial) occurs iff every element of the codomain is mapped to an element of the domain. or in other words, iff for any b in the codomain, there is an a in the domain such that $f(a)=b$   
### examples of surjectivity   
say we have the function $f:\N \to \N, f(x) = \|x\|$. this would be surjective as given the domain and codomain are from the same sets, and with the nature of the relation of the two (the absolute value of $x$), all values of the codomain will map to a value in the codomain.   
say we have the function $f: \N \to \Z, f(x) = \|x\|$. this function is not surjective as by definition of an absolute value, $\|x\| \ge 0$, thus making the negative integers of the codomain not reachable.   
even if we had the function $f:\Z \to \Z, f(x) = \|x\|$, it would be the same issue as some of the codomain could not be reached due to the definition of the   
the codomain and the nature of the function both matter for surjectivity, in a similar to injectivity with its domain and function definition   
## bijective functions   
***bijective function*** > must be a total function that is both injective and surjective. thus meaning all pre-images must map to a unique image, and all images must be mapped to an image. everything in the codomain and the domain must be completely and uniquely mapped to one another.   
being a composition of injectivity and surjectivity, bijectivity then depends on the domain, codomain, and the relation of the function   
say we have the function  $f:\N \to \N, f(x) = x^2$ again. this isnt bijective as though it’s injective, its not surjective as not every natural number is the square of a natural number.   
take for example, $\neg \exist n (f(n) = n^2 = 2)$   
say now we have the function $f: \R^+ \to \R^+, f(x) = x^2$. this would be bijective.   
injective through an assumption that given $x, y \in \R^+$ and $f(x) = f(y)$. it means $x^2 = y^2$, which would happen only if $x = y$. “two positive number have the same square if their the same number”   
surjective through the use of roots ($\sqrt{\space}$). as with the definition of surjectivity, this means all pre-images must be mapped to an image, that is $f(x) = y$. which we can use the root function to illustrate that through   
skipped everything from bijective to application to sets   
# multisets   
given $S$ (a set with $a \in S$ elements; the support of the multiset) and $m : S \rightarrow \Z^+$ is a function. the multiplicity of $a$ ($m(a)$) would be the number of occurances of $a$ in the multiset.   
…   
***multiset*** > a structure that allows you to count the number of times an obect appears in a set $S$ (given the order of appearance doesnt matter)   
can be written in the following ways (given using the multiset $M = (S, m)$ where $S = \{a, b, c\}, m(a) = 2, m(b) = 3, m(c) = 1$):   
- set notation $M = \{a, a, b, b, b, c\}$   
- object multicplisty pairs $M = \{(a,2),(b,3),(c,1)\}$   
- multiplicative $M = \{2a, 3b, 1c\}$   
- power $M = \{a^2, b^3, c^1\}$   
   
## multiset operations   
…   
# cardinality of infinite sets   
in doing this, you must start in an abstract sense through comparison of two set rather than explicit definition through the number of elements (like in finite sets)   
- two different sets have the same cardinality if there is a bijective function between them ($\|A\|=\|B\|$   
- then theyre A is less or eqaul to be B given theres an injective funciton between them $\|A\| \le \|B\|$   
- then A is stricly less than B if theres an injective function from A to B but no bijective funciton between them   
   
with the above, set $S$ is finite for a suitable $n \in \N$, $S$ has the same cardinality as $\{1, 2, 3, … ,n\}$. thus making $n$ the cardinality of $S$ ($\|S\| = n$, and still here $\|\empty\| = 0$)   
- the number of bijections can only occur if both sets have the same number of elements   
- and then if thats the case, then the number of bijections would be $n!$   
   
we know $S$ (in using the same comparison to set $\N$ is inifite given that it **can’t** be put in a bijective correspondence with any set (like $\N$) no matter what $n$ is. that is, its impossible to map all elements of $S$ to every element of $\N$ for unique and exclusive pairs (injective and surjective)   
make zero sense   
***countability*** > a set is countable if either it’s finite or has the same cardinality as $\N$ (in partciulary, if as the same cardinality as the set of natural numbers, it’s *countably infinite*).   
- additionally, a set is countably infinite iff its elements can be arranged into an infinite ordered sequence   
- note that for this course $\Z$ has the same cardinality as $\N$, and thus is also countably infinite   
   
???   
- even rational numbers (Q) are countable, as they’re either terminated at some point after the decimal place, or a sequence of a single repeated digit. plus, they can be easily represented as fractions   
- note that infinitely countable sets have the cardinality of $\aleph\_0$ (some hebrew char and a subscript 0)   
   
some weird examples given the set of prime numbers   
***uncountability*** > a set is uncountable given that its strictly greater than infinity (some how)   
- is not bijective in correspondence with $\N$ (its elements can’t be arranged in an infinite sequence   
- $\R$ is countable for this reason. impossible to list even a subset of $\R$ where each one directly follows the other, as there will always be a number that can be placed between the two   
- the set of real numbers is on a continuum, making it impossible to fully represent the direct next number of another one   
- particularly real number has this property as it include the set of irrational numbers (numbers that cannot be represented cleanly by a fraction)   
- uncountable sets have a cardinality that is greater than $\aleph\_0$   
   
??? zero sense   
