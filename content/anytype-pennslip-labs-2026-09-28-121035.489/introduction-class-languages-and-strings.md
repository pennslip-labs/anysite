---
# yaml-language-server: $schema=schemas/page.schema.json
Tag:
    - school
Object type:
    - Page
Backlinks:
    - deterministic-fsm-dfsm.md
    - theory-of-computing-binder.md
    - finite-state-machines.md
    - finite-state-machine-fsm.md
Creation date: "2026-09-09T16:35:14Z"
Created by:
    - Desean
Links:
    - files/ch01-04intro.pdf
    - relations-suffix-and-prefix.md
    - fill-in-gaps.md
    - research-the-diagonalization-arg.md
    - update-kleene-star.md
    - closed-operations.md
    - theory-of-computation.md
    - finite-state-machine-fsm.md
    - operation-tree.md
    - alphabet.md
    - string.md
    - closed-operation.md
    - language.md
    - kleene-star.md
    - kleene-plus.md
    - diagonalization.md
Emoji: "\U0001F195"
id: bafyreidlasg54gmmwcaynyrc7rvr5dr6hy64xy5dgrn3zdzfuad2tsh7e4
---
# introduction class: Languages and Strings   
overview of the course   
<details>
<summary>lecture slides:</summary>

[Ch01-04Intro](files/ch01-04intro.pdf)    

</details>

# lecture to-do list:   
[relations, suffix&#39;, and prefix&#39;](relations-suffix-and-prefix.md)    
[fill in gaps](fill-in-gaps.md)    
[research the diagonalization arg](research-the-diagonalization-arg.md)    
[update kleene star](update-kleene-star.md)    
[closed operations](closed-operations.md)    
 --- 
# reasoning for the course   
highly practical, yet highly abstract. allowing you to apply this to any problem (generally) within programming.   
the abstract thinking allow you to discuss things that don't exist   
# foundation   
[theory of computation](theory-of-computation.md)    
[Finite state machine (FSM)](finite-state-machine-fsm.md)    
FSM are used everywhere from:   
- vending machines   
- communication protocols   
- building security devices   
- interactive games (as none deterministic FSMs)   
- etc   
   
## the motivation behind what we will be doing   
some problems cant be solved by any machine. which include problems/questions like:   
  - is my program correct   
  - does this program halt on all inputs   
  - is this security model safe   
  - is the first-order logic statement valid   
   
  the above are the kinds of questions that [theory of computation](theory-of-computation.md) tries to solve   
the foundation of **lang recog** is that everything can be abstracted/encoded into a string. take for example:   
  - programs   
  - graphs   
  - protein sequences   
  - integers   
  - pairs   
# languages and strings   
looking at an example problem:   
```
int alpha, beta
alpha = 3
beta = (2 + 5) / 10
```
looking at this code snippet we can analysis the structure as follows:   
1. ***lexical analysis***: scan the program and break up into variable names and numbers (etc.)   
2. ***parsing***: create a [operation tree](operation-tree.md) to represent the flow of operation   
3. ***optimization***: through the previous step, we can see that we can skip the first assignment given its never used.   
4. ***termination***: determine if the program is guaranteed to halt   
5. ***interpretation***: figure out the purpose of the program   
   
## general framework for analyzing strings   
the class will use ***language recognition*** to analyze a diverse set of problems   
### induction on strings   
[alphabet](alphabet.md)    
[string](string.md)    
> induction can be used to show how the reversal of concatenated strings follows the theorem:   


$$
(wr)^R = x^R w^R
$$
as shown in [string](string.md)'s   
<details>
<summary>through the induction of a length  of a string, where length 0 will be used as the base case:</summary>


$$
\mid x \mid = 0 = \epsilon
$$
since the above can be simplified to be an empty string (epsilon), the following must hold as well (through using the functions listed in [string](string.md))   

$$
(wr)^R = (w \epsilon)^R = w^R = \epsilon^R w^R = x^R w^R
$$
showing that the theorem holds for the base case   
   

</details>

<details>
<summary>now the inductive step requires us to assume it holds for strings of length n (greater than 0)</summary>


$$
(wr)^R = x^R w^R \text{ whenever } \mid x \mid = n
$$

</details>

<details>
<summary>now through our assumption, we must prove that the theorem holds for strings of length n + 1 (it holds for any length string)</summary>

let *x = ua* where:   
- *a* is the last character of *x*   
- *u* is the substring before *a*, such that *\|u\| = n*   
   
then the following can be deduced   

$$
\begin{align*} 
(wx)^R &= (w(ua))^R  \\
&= ((wu)a)^R \space \text{associativity of concatenation} \\
&= a(wu)^R \space \text{definition of reversal} \\ 
&= a(u^R w^R) \space \text{using our inductive hypothesis} \\ 
&= (au^R)w^R \space \text{association of concat} \\
&= (ua)^R w^R \space \text{definition of reversal} \\
&= x^R w^R
\end{align*}
$$
thus we get the resulting proof as needed. proving the property holds for *\|x\| = n + 1*   

</details>

thus proving through induction, the statement from before holds for all strings *x*   
> reversing concatenated [string](string.md)s is a fundamental property used in *formal language proofs* and *automata theory*   

## defining a string   
[closed operation](closed-operation.md)    
> $\Sigma^\*$ (the universe of strings from $\Sigma$ set of characters) is constructed through the used of closed operations (such as concatenation)   

[language](language.md)    
> a string can only be defined given a language is created    

[kleene star](kleene-star.md)    
[kleene plus](kleene-plus.md)    
### kleene star vs kleene plus   
both are based on the same fundamentals of concatenation.    
because [kleene plus](kleene-plus.md) requires concatenating **at least one string** from *L*, we can rewrite it using [kleene star](kleene-star.md):   

$$
L^+ = LL^* = L^*L
$$
where the following will hold given:   
  
$$
\epsilon \notin L : L^+ = L^* \setminus \{\epsilon\}, \text{or} \\ \epsilon \in L: L^+ = L^*
$$
  the ladder holds given [kleene star](kleene-star.md) already contains *epsilon* in *L^1*, so it gets propegated into higher powers   
thus, the main difference between the two is that:   
  - [kleene star](kleene-star.md) must contain *epsilon* in *L*   
  - [kleene plus](kleene-plus.md) does not require *epsilon* in *L*   
  - but both can be defined through one another, with the manipulation of adding, or removing *epsilon* from *L*   
# diagonalization   
[diagonalization](diagonalization.md)    
- int numbers are closed under addition and substraction   
- rational numbers are closed under all operation   
- irrational or complex numbers allow for more uses of operations   
   
from the above, we can say that certain languages are countable, while others are not   
- rational numbers for example are countable (despite being infinite)   
    - can count all numbers eventually (given theres a finite interval between each)   
    - can use a diagonal (or a two dimensional grid) to show the counting process. thus *diagonalization*   
- though irrational numbers are not countable as there is no finite interval between each. can always find a slightly smaller/larger irrational number in comparison to another)   
    - irretional numbers cannot be shown through typical diagonalization   
   
the above is an example of the *[diagonalization](diagonalization.md) argument*   
# the big picture   
## decision problems    
simply a problem that is either answered with yes or no   
example: given an int n, does n have a pair of consecutive int as factors   
usually we just care about whether a problem can be properly encoded (into a programming language or not) such that it halts   
compilers treat your code as a string within their language. thus it does *language recognition* in order to see if its syntactically correct or not    
this is where the power of [diagonalization](diagonalization.md) comes into play   
## langauges and machines   
going from inside to outside   
1. regular lang (regular expressions)   
2. context-free  (compilers and such)   
3. D lang    
4. SD lang   
5. everything outside this ring is unknown   
   
everything within the 4 rings, is countable(?)   
### state machines include   
- [Finite state machine (FSM)](finite-state-machine-fsm.md)    
- pushdown automata (stack)   
- turing machines (the basis or modern computers)   
   
the goal is: given a problem, what is the least cumbersome solution that can be used   
there are some ways to tackle this   
- grammar > which generates a language (any possible correct  code is generated)   
- machine > which compares to an existent library of code to whats given. (seeing if the given is part of the language or not)   
