---
# yaml-language-server: $schema=schemas/page.schema.json
Tag:
    - school
Object type:
    - Page
Backlinks:
    - regular-expressions.md
    - theory-of-computing-binder.md
Creation date: "2026-09-18T15:36:31Z"
Created by:
    - Desean
Links:
    - files/ch05bminimization.pdf
    - files/ch05ctransducers.pdf
    - complete-additional-string-properties-and-clas.md
    - explore-interpretation-of-slide-31.md
    - finite-state-machine-fsm.md
    - indistinguishable-strings.md
    - equivalence-string.md
    - moore-machine.md
    - mealy-machine.md
Emoji: "\U0001F90F\U0001F3FE"
id: bafyreidbtjzo3upyyq7lutgt46kul2h4xd6len27ng5ygo5auvyfubwvce
---
# FSM: state minimization   
<details>
<summary>lecture slides:</summary>

[Ch05bMinimization](files/ch05bminimization.pdf)    
[Ch05cTransducers](files/ch05ctransducers.pdf)    

</details>

# lecture to-do list:   
[complete additional string properties and classes](complete-additional-string-properties-and-clas.md)    
[explore interpretation of slide 31](explore-interpretation-of-slide-31.md)    
 --- 
the goal of building minimal [Finite state machine (FSM)](finite-state-machine-fsm.md), is to have the highest level of efficiency possible while maintaining the same output needed   
<details>
<summary>basic minimization ideas:</summary>

- can merge looping/redundant between two states into a single state, 2 to 3 into 23   
    - either if two states loop through one another   
    - or if two states share identical transitions   
- getting rid of unreachable states   

</details>

there are two problems to consider when doing the above:   
  1. given a regular lang, find the minimal DSFM for it   
  2. given a DSFM, find a minimal DSFM equivalent to it   
[indistinguishable strings](indistinguishable-strings.md)    
[equivalence string](equivalence-string.md)    
building equivalence relations is costly, but there is a cheap way to do it (more on that later). but once you have it, finding whether two strings are equivalent becomes easy, as you only need to follow the property, and any breaks in the conditions    
using the basis of [equivalence string](equivalence-string.md)s, we need a way to doing this more broadly within a given language. which can give way into finding mergeable states   
  i.e., ensuring that states $q$ and $p$ either drives inputs in machine $M$ to either the same accepting state, or rejecting states. regardless of the number of states between the initial input and the their shared output   
  thus we have $\equiv\_n$. where $n$ is the number of string lengths $w$ required to be passed before seeing a shared accepting/rejecting state between initial states $q$ and $p$   
> will need to review the actual values of $n$ and how they change conditions   

before trying to minimize a DFSM, always ensure that $M$ is complete   
the key to merging states is analyzing which collection of state transitions provide the same behavior (the same resulting states). the equivalence classes is how we can group those merged states, where as $n$ increases, it "increases the resolution" of what the minimal DFSM is.   
  thus we must go through each $n$th equivalence from $0$, in order to find the minimal DFSM   
  looking at how each char within a string may create the partitions between $\equiv\_n$   
  those partitions are what create the new (merged) states to create the minimal DFSM   
[moore machine](moore-machine.md)    
[mealy machine](mealy-machine.md)    
