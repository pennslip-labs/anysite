---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-18T15:51:09Z"
Backlinks:
    - fsm-state-minimization.md
Tag:
    - school
Created by:
    - Desean
id: bafyreiagboc7k3fuu5r5novyxxen2asvsklmawji3xjposxu6w3rb4ss5a
---
# equivalence string   
(equivalence relation given its reflexive, symmetric, and transitive)   
   
   
given a regular lang, thats accepted by a DSFM, then the number of states in the machine is ≥ the number of equivalent classes of \equiv\_L   
or in the next theorem, it allows each equiv class to be considered as a state itself   
  where accepting classes are ones that contain string within the given language *L*   
   
though since a regular language is accepted by a DSFM, then there must K finite many states   
   
we can prove the language of a machine, we can use the equavalence classes to slowly build any string given such that the class exists, and the string built from it exists within *L*   
through the Myhill-nerode, it allows you to build the machine itself for a specific language and its equiv classes. which builds off of the previous theorem   
  strings with respect to same language, should behave the same as well   
