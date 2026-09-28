---
# yaml-language-server: $schema=schemas/page.schema.json
Object type:
    - Page
Backlinks:
    - lecture-1-introduction-and-logic-review.md
    - cs-2214.md
    - cs2214-discrete-math.md
Creation date: "2026-06-03T20:41:00Z"
Created by:
    - Desean
id: bafyreiatawgst7fxo3pir6ucy4nfdbyzjgwsfwrtkmfjrhs7gt2wymslq4
---
# CS2214 ch.1 notes appraised   
# formalization of logic   
is done on three different levels   
1. making a well-formed formula (***WFF***)   
2. semantics (forming a truth statement based on the interpretation of the statement; a true/false WFF)   
3. proof of theory (combines various WFF through axioms and rules of inference to create the concept of validity   
   
this coarse will focus on classical first-order logic (***predicate logic***). which extends propositional logic   
# the basics blocks of FLO   
## propositions   
***proposition*** > a declarative sentence that asserts a fact that’s either unambiguously true or false   
- all are constructed using ***atoms*** > the smallest units of this logic system to convey information (true/false, 1/0)   
- ***connectives*** > defined ways of how atoms interact with one another to form a WFF   
- an example of a proposition would be “my nose is red” or “pigs can fly”. despite the absurdity of the ladder, the main point is that there is no ambiguity, and are both direct claims (attempting) to assert some fact   
   
the truth value of a propositions is determined entirely by its connectives and the truth values of the atoms   
## predicate   
***predicate*** > a proposition, but where it’s truth value changes depending on the variability of a atom within the WFF.   
- take for example the phrase “$x$ is a prime number”. $x$ is simply a place holder for a variable   
- once a value is assigned to all variables in a predicate, then its truth value can be evaluated   
- *unary* predicate indicates only one variable as input. whereas *binary* for two, *ternary* for three, and *n-ary* for any following amount of variables   
   
predicates are usually denoted with uppercase symbols and look like functions. take the line from before $P(x)$ = “$x$ is a prime number”. of if we had a new one: $M(x,y)$ = “$x$ is the mother of $y$”   
### turning a predicate into a proposition   
is done in two ways   
1. evaluate the predicate   
    - replace the each variable with a fixed value so that the expression can be evaluated   
    - say again with $P(x)$ from before. as is it cant say much. though when we feed some variable like $x = 4$, “$x$ is a prime number” becomes a proposition as it becomes “4 is a prime number”   
2. quantify the predicate   
    - assert that the predicate is true for some or all objects of the universe   
    - take again $P(x)$. if we add something extra like $P(x)$ is true for only some x. or to render it fully in English; “some objects within the universe are prime numbers”, then we have a proposition   
    - despite being not as bold as the previous examples, its still declarative. we can go in the other direction and say “all objects in the universe are prime numbers”   
   
propositions can be thought of predicates with arity 0. thus is how we are able to turn a predicate into a proposition   
***fully quantified*** > when a predicate is preceded by quantifiers that capture all variables in the WFF. said WFF also is a proposition   
## well-formed formulas   
given a $n$-ary predicate $P$, and we have a set of constant variables $t\_n$, when put together as $P(t\_1, t\_2, ..., t\_n)$ is what gives way to the *atom* as mentioned before. which are considered WFF’s and is what builds more complex WFF through the use of connectives   
$\top$ and $\bot$ considered WFF as well, as they’re are special atoms   
### rules of inference   
the usual order of precedence goes as follows:   
|                    1st   <br> |    2nd   <br> |               3rd   <br> |                4th   <br> |           5th   <br> |                       6th   <br> |
|:------------------------------|:--------------|:-------------------------|:--------------------------|:---------------------|:---------------------------------|
| $\forall$ and $\exist$   <br> | $\neg$   <br> | $\land, \uparrow$   <br> | $\lor, \downarrow$   <br> | $\rightarrow$   <br> | $\leftrightarrow, \oplus$   <br> |

# the semantics of FLO   
***semantics*** > the meaning of a propositions. this is limited to its truth value as each atom can have either the value true or false the semantics of *connectives* shape how those atoms’ truth values render when interacting with other atoms through the connective(s) itself. of which can be represented quite nicely through a *truth table*   
see slides 19-22 for specifics on the semantics of each connective.   
## steps to proper interpretation of first-order logic from the english language   
1. understand the statements meaning. read carefully   
    1. identify the main claim, object, and relationships   
    2. whats being said? about whom? under what conditions?   
    3. “every student in the class passed the exam.”   
2. establish the ***domain*** > a non-empty set of the objects that are “available for consideration”. this is where constants can be pulled from, how variables are defined, and how predicates are to be evaluated. each constant is an object of the domain, and then variables are set to vary over all objects of the domain   
    1. define the set of objects that are being talked about   
    2. can be people, numbers, or even animals   
    3. domain: all people in the class (students)   
3.    
