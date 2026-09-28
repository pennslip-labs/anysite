---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-16T15:20:10Z"
Backlinks:
    - finite-state-machines.md
    - yields-in-one-step-relation.md
Tag:
    - school
Links:
    - deterministic-fsm-dfsm.md
Created by:
    - Desean
id: bafyreihyp7y3xcvweyl7jdc4t6oakxab6yxdk4w7jkcvdj7i322cpojhum
---
# configuration   
within the context of [deterministic FSM (DFSM)](deterministic-fsm-dfsm.md), a **configuration** of a DFSM $M$ is an element of $K \times \Sigma^\*$.    
  - this expression essentially details all possible pairs of states with string. where    
  - each configuration is written as $(q, w)$   
      - $q \in K$    
      - $w \in \Sigma^\*$   
capturing the two strings that can make a difference to $M$'s future behaviour. involving:   
  - it's current state   
  - the input that is still left to read (some string we are currently working on)   
the **initial configuration** of a DFSM $M$ on input $w$ is shown as $(s, w)$    
  - $s$ is the starting state   
  - $w$ is the entire input string   
specifically, **configurations** capture a **complete snapshot of a DSFM at a certain point** in time during it's computation    
the main point of using configurations is to answer two questions:   
  1. where is the machine right now   
  2. what input does it still have left to process   
   
  it doesn't need to record the part of the input that already has been consumed   
