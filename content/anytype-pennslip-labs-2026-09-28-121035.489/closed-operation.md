---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-11T15:32:12Z"
Backlinks:
    - string.md
    - introduction-class-languages-and-strings.md
Tag:
    - school
Links:
    - string.md
    - language.md
    - kleene-star.md
    - kleene-plus.md
Created by:
    - Desean
id: bafyreicy3l5ue7y5fhqky67n6p353vtpfg4vof4sadjczie4aajbe6dapm
---
# closed operation   
an operation on a set is closed if applying that operation to any element(s) within the set (like *Sigma\** or *L*) **always yields a result that is also contained in the set**.     
the above as a definition is fulfilled given the following criteria is met:   
  - through a defined set *S*, it provides a ground of elements to manipulate   
  - there is a defined operation *o*, where it either allows the binary/unary operations…   
      
$$
S \times S \rightarrow S \text{ or } S \rightarrow S
$$
  - universal output membership, which means that the output must never "escape" the set S for any valid input used with operator *o*.    
      
$$
\forall a, b \in S( a \circ b \in S)
$$
      even if a single pair exists where the pair of inputs yield a result outside of *S*, then the set is **not closed under that operation**   
examples of closed operations include:   
- concatenation (of [string](string.md)s or [language](language.md)s)   
- [kleene star](kleene-star.md)    
- [kleene plus](kleene-plus.md)     
   
<details>
<summary>then for intuitive measure, here are examples of closed operators given the set or language they&#39;re being used in </summary>

|               **Domain / Set (S)**   <br> |              **Operation (∘)**   <br> | **Closed?**   <br> |                                                                                               **Reason**   <br> |
|:------------------------------------------|:--------------------------------------|:-------------------|:----------------------------------------------------------------------------------------------------------------|
|        **Integers ($\mathbb{Z}$)**   <br> |                 Addition ($+$)   <br> |     **Yes**   <br> |                                                            Sum of any two integers is always an integer.   <br> |
|        **Integers ($\mathbb{Z}$)**   <br> |              Division ($\div$)   <br> |      **No**   <br> |                                           $1, 2 \in \mathbb{Z}$, but $1 \div 2 = 0.5 \notin \mathbb{Z}$.   <br> |
| **Natural Numbers ($\mathbb{N}$)**   <br> |              Subtraction ($-$)   <br> |      **No**   <br> |                                               $3, 7 \in \mathbb{N}$, but $3 - 7 = -4 \notin \mathbb{N}$.   <br> |
|  **Modular Set ($\mathbb{Z}\_m$)**   <br> |       Modulo Addition ($+\_m$)   <br> |     **Yes**   <br> |                      $a +\_m b = (a + b) \bmod m \in \{0, \dots, m-1\}$ for all $a,b \in \mathbb{Z}\_m$.   <br> |
|              **Lattice Set ($L$)**   <br> | Meet ($\land$) / Join ($\lor$)   <br> |     **Yes**   <br> |               For any $a, b \in L$, both $a \land b \in L$ and $a \lor b \in L$ by algebraic definition.   <br> |
|              **Regular Languages**   <br> | Union ($\cup$) / Concatenation   <br> |     **Yes**   <br> | Operating on regular languages yields another regular language accepted by a Finite State Machine (FSM).   <br> |


</details>

