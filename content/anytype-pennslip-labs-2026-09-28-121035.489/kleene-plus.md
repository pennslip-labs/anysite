---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-17T21:22:31Z"
Backlinks:
    - language.md
    - closed-operation.md
    - introduction-class-languages-and-strings.md
Tag:
    - school
Links:
    - theory-of-computation.md
    - kleene-star.md
Created by:
    - Desean
id: bafyreihjm7aq4byxmc3n755uqpkmdrx3v4mlytprff4qdqjnmehkv7i5j4
---
# kleene plus   
within the context of [theory of computation](theory-of-computation.md), L^+ (Kleene plus or positive closure) represent taking **one or more** concatenations of elements from language *L* or alphabet *Sigma*. differing slightly from [kleene star](kleene-star.md)s definition    
formally L^+ is defined as the infinite union of all positive powers  *i ≥ 1* of *L*. such that:   

$$
L^+ = \bigcup^\infin_{i = 1} L^i = L^1 \cup L^2 \cup L^3 \cup ...
$$
and in set builder notation:   

$$
L^+ = \{w_1 w_2 ... w_k \mid k \ge 1 \text{ and } w_1, w_2, w_3, ... ,w_k \in L \}
$$
