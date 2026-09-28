---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-11T15:45:38Z"
Backlinks:
    - language.md
    - closed-operation.md
    - regular-expressions.md
    - introduction-class-languages-and-strings.md
    - yields-in-one-step-relation.md
    - kleene-plus.md
Tag:
    - school
Links:
    - language.md
    - string.md
Created by:
    - Desean
id: bafyreiaw4a65jgfio762lb2ns5tq3qsm5phb7pfvl56x5jwautakf4bnke
---
# kleene star   
within the context of [language](language.md)s, it concatenates 0 or more strings from language *L*. combined in any possible way.   
> including the empty string as well!   

more explicitly: **kleene star** of a lang is the set of all finite concatetations of strings from *L*. representing the smallest lang that contains the original lang *L*, and is closed under concatenation (review [string](string.md)s for concatenation function and it's properties)   
> kleene star of a lang can then only be created given *L* contains *epilson*!   

formally, given *L* is a lang over Sigma, then **kleene star** can be defined as:   

$$
L^* = \{\epsilon\} \cup \{w_1 w_2 w_3 ... w_k: k \ge 1, w_i \in L\}
$$
the above has three very important components to keep in mind:   
1. zero repetitions allowed (this acts as the identity elem of [language](language.md) concatenation), this is the first part of kleene star, *epsilon* in L\*    
    
$$
\epsilon \in L^*
$$
2. the *k *is representing any finite number of repetitions being allowed (k ≥1)   
    
$$
k \ge 1
$$
3. concatenation of kth strings *w*   
    
$$
w_1 w_2 ... w_k
$$
   
this is why **kleene star** is a *closure operator*   
# kleene star as a closure under concatenation   
because of the above, **kleene star** is a closure of a **language under concatenation**. meaning the smallest language that can be created through concatenation.   
this is an extension of the properties seen in [string](string.md)s as the same rules carry over just defined in terms in languages:   
- **the general rule**: for any two strings *u in L\** and *v in L\**, their combined string would be *uv* is guaranteed to also being *L\**   
- **the minimal property**: *L\** is defined as the smallest languages containing *L*, and* epsilon *(empty string). meaning no elements within *L\** can be concatenated to create a string outside of *L\**   
   
thus an infinite number of strings can be created with concatenated strings from *L\** without ever actually leaving the set (creating a new string outside the set)   
# example (lang closure)   
given *L = {dog, cat, fish}*, *L\** forms all possible concatenated sequences of *L*'s elements as follows:   

$$
L = \{\epsilon, \text{dog}, \text{cat}, \text{fish}, \text{dogdog}, \text{dogcat}, \text{fishcatfisch}, ... \}
$$
   
