---
# yaml-language-server: $schema=schemas/page.schema.json
Tag:
    - school
Object type:
    - Page
Backlinks:
    - theory-of-computing-binder.md
Creation date: "2026-09-23T16:06:55Z"
Created by:
    - Desean
Links:
    - files/ch06regularexpressions.pdf
    - regular-expressions_c.md
    - fsm-state-minimization.md
    - kleene-star.md
    - string.md
Emoji: "\U0001F5E3️"
id: bafyreid6e2c7y3ksyqixdeh7245tlmhc3enuw4l2hfsdmkqihzkfwep3du
---
# regular expressions   
<details>
<summary>lecture slides:</summary>

[Ch06RegularExpressions](files/ch06regularexpressions.pdf)    

</details>

# lecture to-do list:   
<insert tasks here>   
 --- 
we have already explored how FSM can be used to analyze and manipulate regular languages. but now we go into exploring how regular expressions can relate to regular languages   
[regular expressions](regular-expressions_c.md)    
# the FSM to regex heuristic algorithm   
… some rules to remember   
the idea is to be able to remove a state by simulating its behavior (how it transitions between states) using the rules detailed in [FSM: state minimization](fsm-state-minimization.md) (in the later half) and [regular expressions](regular-expressions_c.md).   
allowing you to slowly remove states in between a starting state, and accepting state where the transition function simulates all the removed states through the above rules   
> slide 32-34 is added for completeness but is not needed in practice. as all the extra work reaps no real rewards other than complicating the graph (representing $M$) to make it a *complete graph*. so in similar graph depictions, can ignore $\empty$ edges   

> step 5 on slide 37 is not needed as well   

> slide 41 uses back slashes, which the prof chose to not get into the explanation. but is more powerful and is outside of [regular expressions](regular-expressions_c.md).   

## simplifying regular expressions   
given the definition of [kleene star](kleene-star.md), the following can be derived… (more uniquely)   
- $\empty^\* = \epsilon$ which…   
- $\epsilon^\* = \epsilon$ which is the same as saying the repetition of nothing results in nothing   
   
# pattern matching vs pattern searching   
pattern matching looks for any text containing a pattern  $p$. regardless of what is around $p$.   
pattern searching, cares about the $p$ being at the end of a [string](string.md)    
both lead to a very similar DFSM   
