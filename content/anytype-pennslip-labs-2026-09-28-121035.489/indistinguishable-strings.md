---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-18T15:41:46Z"
Backlinks:
    - fsm-state-minimization.md
Tag:
    - school
Links:
    - string.md
    - language.md
Created by:
    - Desean
id: bafyreicioyv24wsnxggrjohnqpfpmdjhzdd6ckfpsozmmqimqrmrc4inh4
---
# indistinguishable strings   
if you have [string](string.md)s *x* and y (with respect to a common [language](language.md) between the two), that lead to the same state, then they may as well be identical in their resulting output.   
to the machine, that makes the two *indistinguishable* despite having different characters between the two strings   
<details>
<summary>graphically:</summary>


$$
flowchart LR
1 --->|x| 2
1 --->|y| 2

2 ---> 3
$$

</details>

this property depends on the structure/definition of the [language](language.md).   
for example:   
  - if the language only cares about the length of a string (say even or odd), than comparing the length of a string is all thats needed to see if their indistinguishable or not   
  - but if a language focuses more on the actually characters within the string, then the "indistinguishability" needs to be more precise   
