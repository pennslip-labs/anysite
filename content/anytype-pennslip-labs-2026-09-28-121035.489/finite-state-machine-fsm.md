---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-09T16:39:59Z"
Backlinks:
    - mealy-machine.md
    - deterministic-fsm-dfsm.md
    - fsm-state-minimization.md
    - introduction-class-languages-and-strings.md
    - moore-machine.md
Tag:
    - school
Links:
    - introduction-class-languages-and-strings.md
    - finite-state-machines.md
    - string.md
    - language.md
    - regular-language.md
    - deterministic-fsm-dfsm.md
    - non-deterministic-fsm-ndfsm.md
Created by:
    - Desean
id: bafyreigouxhkjn3yxvqkkmidiqndaa4b7blwaghlordcfhlkt4jqcvy5ha
---
# Finite state machine (FSM)   
# as introduced in [introduction class: Languages and Strings](introduction-class-languages-and-strings.md)     
otherwise known as **FSM** or **finite state automation**, is a mathematical model of computation or a program.   
representing an abstract machine that can be exactly one of a finite number of states at any given time based on the inputs given to it at that same moment.   
# as extended in [finite state machines](finite-state-machines.md):   
an abstract machine that consists of a finite number of states and transitions between said states. reading a [string](string.md) as input one symbol at a time, and changes states based on it's transitioning rules given the current symbol.   
FSM can be used to recognize patterns and determine whether a string belongs to a [language](language.md) or not.   
FSM are closely related to [regular language](regular-language.md)s   
**basic intuition**: a FSM has finite memory. rather than storing the entire input, it remembers only the current state (from the currently processed symbol), and then the transitions between states represents a summery of everything that was inputed to inpact future decisions   
## derivatives of FSM   
[deterministic FSM (DFSM)](deterministic-fsm-dfsm.md)    
[Non-deterministic FSM (NDFSM)](non-deterministic-fsm-ndfsm.md)    
