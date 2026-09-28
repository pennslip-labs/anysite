---
# yaml-language-server: $schema=schemas/word.schema.json
Object type:
    - Word
Creation date: "2026-09-09T16:53:30Z"
Backlinks:
    - regular-language.md
    - kleene-star.md
    - deterministic-fsm-dfsm.md
    - indistinguishable-strings.md
    - closed-operation.md
    - introduction-class-languages-and-strings.md
    - grammar.md
    - finite-state-machine-fsm.md
Tag:
    - school
Links:
    - cs-2214.md
    - string.md
    - kleene-star.md
    - kleene-plus.md
Created by:
    - Desean
id: bafyreibr2dlx76iufdwra3ki7iyqmtmoz2x5xqdp4bt37ybpnvqwt6wniu
---
# language   
# Basic Intuition   
a (in)finite set of finite length of strings over a finite alphabet Sigma. similar to what is learned in [CS 2214](cs-2214.md).   
an example includes:   
  
$$
\text{let } \Sigma = \{a, b\}
$$
  then some languages over Sigma include the following   
  
$$
\empty, \\ \{\epsilon \}, \\ \{ a, b\}, \\ \{ \epsilon, a, aa, aaa, aaaa, aaaaa, bbaa\}
$$
given the repetition of characters in a string is not limited, the language Sigma star contains all finite number of strings. shown as   

$$
\Sigma^*
$$
# Definition   
then formally, a *language* would defined as a subset of *Sigma\** (where the lang is simply just the acceptable strings from *Sigma&\**). thus for any lang *L*:   

$$
L \sube \Sigma^* : L\{\epsilon\} = \{\epsilon\}L = L 
$$
> meaning that a language structure mirrors that of a [string](string.md), just on a larger level   

this is important as this affects regular expressions, closure properties, grammar productions, and automata transitions as:   
- concatention with* {epsilon} *does nothing to a language   
- whereas concatenation with *{zero elem (empty)}* completely annihilates a language   
   
## zero element   
is unique to languages (doesn't apply to strings). acting similar to the behavior of the product of any number with **zero **where:   

$$
L\empty = \empty L = \empty
$$
> this is an added property of languages when you **concatenate** them given languages live on another level of abstraction (they're built on the already abstract concept or *class* (to be C++ dev like) of [string](string.md)s)   

# example definitions   
> languages can be defined more precisely as shown within the  following example    


$$
L= \{ x \in \{a,b\}^* : \text{all a's precede all b's}\}
$$
then strings like *aabbb* are in the *L*, whereas *aba* or *ba* are not in *L*   
# functions on languages   
set operations include:   
- union   
- intersection   
- complement   
   
language operations would be:   
- ***concatenation*** (follows a similar logic as [string](string.md) concatenation)   
- kleene star    
   
## concatenated languages   
follows the these identities:   

$$
L\{\epsilon\} = \{\epsilon\}L = L \text{ and } L \empty = \empty = \empty
$$
often times, concatenation is not commutative (but not always!)   
[kleene star](kleene-star.md)    
[kleene plus](kleene-plus.md)    
correct *syntax* within a program just means that the program can compile. though we usually care about the *semantics* which indicate the meaning, and what the program aims to a   
