---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-25T15:33:10Z"
Backlinks:
    - regular-grammars.md
Links:
    - cs3331-theory-of-computing.md
    - regular-grammar.md
    - language.md
    - string.md
Created by:
    - Desean
id: bafyreidp5hfvk5rzzmk7pphd7jjqyo7yts2n5ipte2gbefoej2nhyeps6u
---
# grammar   
in the context of [CS3331 ~ Theory of Computing](cs3331-theory-of-computing.md); is a system that allows you to rewrite a string   
defined as $G$rammar with the following:   
- $V$ is the rule alphabet which contains nonterminals and terminals   
- $\Sigma$ this contains a set of terminals ($\Sigma \sube V$)   
- $R$ is a finite set of rules of thee form: $X \rightarrow Y, \space X,Y \in V^\*$   
- $S \in V - \Sigma$ is the starting symbol   
   
from the above you can derive strings by:   
1. starting with $S$   
2. applying the rules (defined more later)   
3. and the haulting condition is when there are only terminals   
   
insight: reading lines for grammar is very similar to reading/writing mermaid code.   
[regular grammar](regular-grammar.md)    
a [language](language.md) defined by a grammar means that all terminal [string](string.md)s that can be obtained starting from $S$ and applying the rules   
