---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-23T15:24:09Z"
Backlinks:
    - finite-state-machines.md
    - yields-in-one-step-relation.md
    - finite-state-machine-fsm.md
    - configuration.md
Tag:
    - school
Links:
    - introduction-class-languages-and-strings.md
    - finite-state-machine-fsm.md
    - string.md
    - language.md
Created by:
    - Desean
id: bafyreib74luxvojonfgfrqz6y6dweyxt6j6vhxwmgoiqzxqrpjqgun6ixu
---
# deterministic FSM (DFSM)   
> many of the variables seen here were introduced in [introduction class: Languages and Strings](introduction-class-languages-and-strings.md).   

# formal definition   
a DSFM is a [Finite state machine (FSM)](finite-state-machine-fsm.md) where every state has exactly one possible transition for each symbol in a given alphabet. where at any point there is only one possible next state within the machine given the current symbol   

$$
M = ( K, \Sigma, \delta, s, A)

$$
- $K$ is a finite set of of all possible states   
- $\Sigma$ is the alphabet   
- $s \in K$ (the initial state)   
- $A \subseteq K$ that represents the accepted** fina**l states   
- $\delta : (K \times \Sigma) \rightarrow K$ is the **transition function**. (can also be expressed as $\delta (q,a) = q^\prime \mid q,q^\prime \in K$   
   
informally speaking, $M$(achine) accepts a string $w$ iff $M$ winds up in some element in $A$ while reading $w$.   
  the language accepted by $M$ (denoted as $L(M)$) is the set of all strings accepted by $M$.   
# the components in detail   
## states $K$   
this represents the machines memory at a given point during a computation. keeping track of whether based on the criteria of accepting states, indicating if $k \in A$ or $k \notin A$   
what exactly this looks like depends on the problem at hand. types of memory a machine could hold could be:   
- even/odd parity   
- current credit within a vending machine   
- whether a required pattern has been (partially) matched    
   
## alphabet $\Sigma$   
this represents the **finite** collection of inputs and symbols $M$ can read.   
examples could be:   
- $\{0,1\}$ (binary)   
- $\{a,b\}$ (lexicographic)   
- $\{0, …, 9\}$ (decimal)   
- etc.   
   
## transition function $\delta$   
this is what determines the next given state based on the:   
- current state   
- the next input symbol within the [string](string.md)    
   
the formula $\delta(q, a) = q^\prime$ means that if the machine is in state $q$ and reads symbol $a$, than it will move to some $q^\prime$   
## accepting states $A$   
these are states that represents whether the string given thus far is acceptable or not.   
if $M$ finishes reading the entire input and is in some state $k \in A$, then input string is considered accepted   
# accepting a [language](language.md)   
denoted as $L(M)$. which consists of all strings acceptable by $M$. formally expressed as:   

$$
L(M) = \{w \in \Sigma \mid M \text{ accepts } w \}
$$
this means following:    
- $L(M) \sube \Sigma^\*$   
- a string $w$ belongs to $L(M)$ only if the entire string is able to be consumed by $M$, with the resulting state as accepting. if it results in not accepting, then $w \notin L(M)$   
- $\epsilon$ *can* belong to $L(M)$. where specifically for a DFSM, it occurs when the starting state is accepting   
- different DSFM can recognize the same [language](language.md), so two machines $M\_1$ and $M\_2$ could be structurally different, and yet $L(M\_1) = L(M\_2)$ may hold   

$$
flowchart LR

A[Machine M]
B[strings w]
C[set of all accepted strings for M]

A -->|accepts| B
B -->|which is within| C 
$$
