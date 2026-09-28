---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-18T16:46:31Z"
Backlinks:
    - introduction-class-languages-and-strings.md
Tag:
    - school
Links:
    - theory-of-computation.md
    - cs2214-discrete-math.md
Created by:
    - Desean
id: bafyreiet6islvj45ct7mqli4cfugjzoq7ftflnwotnxr6b4nmxjdxqdre4
---
# diagonalization   
# What is it?   
a proof technique used to demonstrate that certain infinite sets are lager than others — especially useful in proving that a set is **uncountably infinite**.   
within the context of [theory of computation](theory-of-computation.md), and computer science, its used to see if there are uncomputable functions or undecidable problems (such as the halting problem) through showing there are more languages (problems) then there are [turing] machines (ie, programs) to solve them.    
# the process: Cantors Diagonal Argument   
> relies on **proof by contradiction**, similar to what was commonly used in [CS2214 ~ Discrete Math](cs2214-discrete-math.md) and CS2209 (applied logic for CS)   

1. assume a set is countable   
2. attempt to list all it's elements   
3. then try to construct a new element that logically cannot exist.    
    if it can be done, than the assumption does not hold, and the given set is uncountable   
   
can be done explicitly through statements in math, but the name of this technique comes from completing the process visually through a table   
## example through comparing binary strings   
**Step 1: The Assumption (The Setup)**   
Assume the infinite list of binary strings is **countable**. This means you assume it is possible to map every element to a natural number *(1, 2, 3, …)* and write them all out in an exhaustive, sequentially numbered list.   
**Step 2: Construct the Grid**   
Visualize this hypothetical, infinite list as a 2D matrix as follows:   
| **Index (n)**   <br> | **Bit 1**   <br> | **Bit 2**   <br> | **Bit 3**   <br> | **Bit 4**   <br> |    **…**   <br> |
|:---------------------|:-----------------|:-----------------|:-----------------|:-----------------|:----------------|
|  **String 1**   <br> |     **0**   <br> |         1   <br> |         0   <br> |         1   <br> |  $\dots$   <br> |
|  **String 2**   <br> |         1   <br> |     **1**   <br> |         0   <br> |         0   <br> |  $\dots$   <br> |
|  **String 3**   <br> |         0   <br> |         0   <br> |     **1**   <br> |         1   <br> |  $\dots$   <br> |
|  **String 4**   <br> |         1   <br> |         0   <br> |         1   <br> |     **0**   <br> |  $\dots$   <br> |
|   **$\dots$**   <br> |   $\dots$   <br> |   $\dots$   <br> |   $\dots$   <br> |   $\dots$   <br> | $\ddots$   <br> |

**Step 3: Isolate the Diagonal**   
Take the $n$-th bit of the $n$-th string. This forms a diagonal line down your matrix.   
In the table above, the diagonal sequence is: `0, 1, 1, 0, ...`   
**Step 4: The "Flip" (Constructing the Contradiction)**   
Create a brand new string, let's call it $D$, by taking the diagonal sequence and mathematically inverting (flipping) every single bit. in this case, we would be finding the [ones compliment](https://en.wikipedia.org/wiki/Ones%27_complement).   
- Original diagonal: `0, 1, 1, 0, ...`   
- Flipped string $D$: `1, 0, 0, 1, ...`   
   
**Step 5: The Determining Question**   
You must now ask: *Is string $D$ anywhere on our supposedly complete list?*   
- It cannot be String 1, because its 1st bit is different.   
- It cannot be String 2, because its 2nd bit is different.   
- It cannot be String $n$, because its $n$-th bit is different.   
   
> this is the intuitive part. theres no chance of $D$ being identical to any $n$-th string, as there is always at least the one bit in the $n$-th position between string $D$ and $n$ that is different     

