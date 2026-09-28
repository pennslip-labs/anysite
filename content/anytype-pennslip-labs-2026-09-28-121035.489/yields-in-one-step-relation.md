---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-26T19:03:28Z"
Backlinks:
    - finite-state-machines.md
Tag:
    - school
Links:
    - deterministic-fsm-dfsm.md
    - configuration.md
    - string.md
    - kleene-star.md
Created by:
    - Desean
id: bafyreiglajrc6ad7tgcfkzhs5yjj7sivwnzoegru5fsh7vzd7xyfko3n6m
---
# yields-in-one-step relation   
within the context of [deterministic FSM (DFSM)](deterministic-fsm-dfsm.md), and is otherwise known as the *yields relation*, this describes the single transition of a $M$achine. formally shown as:   

$$
(q,w) \vdash_M (q^\prime, w^\prime)
$$
sometime noted as:   

$$
(q, aw^\prime) \vdash_M (q^\prime, w^\prime)
$$
> note\* how both sides of the *yields relation* are [configuration](configuration.md)s   

which holds iff…   
  1. $w = aw^\prime$ for some symbol $a \in \Sigma$   
  2. $\delta(q,a) = q^\prime$   
   
  meaning; the machine **consumes one symbol** from the unread input and follows the corresponding transition.   
$\vdash^\*\_M$ represents zero or more applications of the *yields relation*. (**its reflexive transitive closure**)   
note\* that the first requirement for this process to work is what allows the machine to process each string one character at a time.   
  the second — through the power of the *transition function* from [configuration](configuration.md)    
# further breakdown   
the [configuration](configuration.md) on the LHS represents the state of the machine, and the [string](string.md) it has left to process before it takes it's next step — the **current** state.   
  - $q$ is the current state   
  - $a$ is the next symbol it will read/process   
  - $w^\prime$ is the rest of the string after $a$. (which will be processed in future configurations given it does not halt)   
   
  thus the unread input within the current configuration, is always broken up.   
  - read $a$ now   
  - leave $w^\prime$ for later configurations   
say the transition function $\delta(q,a)$ (consuming character $a$ in state $q$) it gives the next state $q^\prime$.    
then the machine would have:   
  - consumed $a$   
  - moved from $q$ to $q^\prime$   
  - left $w^\prime$ unread   
   
  thus we have the formula $(q,w) \vdash\_M (q^\prime, w^\prime)$.   
## the star(?)   
 similar to the star seen with [kleene star](kleene-star.md), it can also be applied to the *yields relation*.   
where it denotes how the configuration on the RHS of $\vdash^\*\_M$ was reached with zero or more steps.   
this is used commonly to shorten an expression. say we had the following computation:   

$$
(q_0, 101) \vdash_M (q_1, 01) \vdash_M (q_2, 1) \vdash_M (q_3, \epsilon)
$$
it can be abbreviated to the following instead:   

$$
(q_0, 101) \vdash_M^* (q_3, \epsilon)

$$
allowing to describe the entire sequence through only the starting and ending configuration of the machine   
