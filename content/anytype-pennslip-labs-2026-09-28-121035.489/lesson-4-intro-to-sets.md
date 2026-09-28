---
# yaml-language-server: $schema=schemas/page.schema.json
Object type:
    - Page
Backlinks:
    - cs2214-discrete-math.md
Creation date: "2026-06-03T20:41:00Z"
Created by:
    - Desean
id: bafyreiezv2rqbnuwfo4olh463d3jsbud6jy3c6nokilj6t2u3a2wmsv5sy
---
# lesson 4: intro to sets   
Progress: Done
Week: week 3
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv slides vvv***   
[CS2214\_04\_Sets.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_04_Sets.pdf)   
## naive set theory   
(informal def of a set) ***set*** > an unordered collection of object called *elements* or *members* of the set. denoted as $a\in S$ (the object $a$ is an element of $S$.)   
note that reading set builder notation (for example $A = \{2x-1 \mid x \text{ is a integer, } x^2 -3 < 2\}$) reads in the following way:   
- the LHS details the behaviour of the the numbers within the set itself. the range, similar to y in a function   
- the RHS is detailing the domain, in which the values x can take on, so then the RHS can be broken down into explicit definition as $x = -2,-1,0,1,2$. meaning these are the values of x that can be plugged into the LHS   
   
### russels paradox   
the set theory above gives way to paradox’s as the object can be anything. especially as it has the implicit assumption that any property can be used to form a set. peep the example below that will illustrate this   
based on the preliminary remarks that 1) a set may contain other sets as elements, and 2) a set may contain itself as an element   
# important stuff to keep in mind when using sets   
note that within the notation of defining sets (especially in set building notation, $\empty =$ {}. which means an empty set. though {$\empty$} denotes a set containing an empty set.   
And a universal set is said to be a set containing all possible objects within its universe (the properties being considered)   
important sets of numbers and their symbols   
something to consider when examining a set where its elements have some weird relation with one another.   
## subsets and power sets   
note that $\empty$ is the subset of any set: $\forall \text{A}, \space \empty \subset \text{A}$. while the subset of A thats not A itself is a ***proper subset***.   
the ***power set*** of A is the set of all subsets of A, given the set of subsets is denoted as $S$, you get   

$$

\text{power set of A} = P(A) = \{ S | S  \subseteq A \}


$$
examples to help strengthen power sets   
in general if A has $n$ elements, then P(A) has $2^n$ elements. which can be proven by induction   
***review slides 19-26 for the operations on sets***   
# set identities   
given *U* represents the set containing the whole universe of objects, theres these notable set identities (which is identical to whats seen in predicate identities)   
## proving set identities   
three ways of doing so,   
1. prove that the LHS and the RHS are one and the same (LHS=RHS through intuitive reasoning)   
2. using set-builder notation (using the definition of the operations used to expand what the set means, and then reorganize to get LHS = RHS   
3. membership tables (truth tables essentially)   
   
# cardinality   
a set is finite when it has some natural number $n$ number of elements. otherwise its infinite   
the cardinality of a finite set S would render as \|S\| = the number of elements $n$.   
example of how it would be used   
the cardinality of an infinite set is inifinite, though there are different sizes of infinite.   
# cartesian products and intro to relations   
## tuples   
and $n$ ***tuple*** is a collection of ordered objects in which it contains $n$ elements (denoted with round brackets instead of curly brackets with sets). *similar to the notion of arrays in C and Java.*   
two tuples are equal iff they have the same $n$ size with the same order of objects.   
## cartesian product   
the cartesian product is simply a set of all ordered tuples from the elements of set A and B. denoted as below   
$$
A \times B = \{(a,b)\|a\in A\land b\in B\}
$$   
the cartesian product of n sets of the same set A with $n$ elements will create a set with $n$ sized tuples and $n$ number of tuples. where each can be matched to one another by some natural number i.   
note that the subset R of the cartesian product A x B is a ***binary relation*** (due in part to there only being two parent sets involved with *arity* of 2)   
