---
# yaml-language-server: $schema=schemas/page.schema.json
Tag:
    - school
Object type:
    - Page
Backlinks:
    - theory-of-computing-binder.md
    - finite-state-machine-fsm.md
Creation date: "2026-09-16T15:00:57Z"
Created by:
    - Desean
Links:
    - files/ch05afsm.pdf
    - get-explanation-for-what-is-being-shown-in-sli.md
    - fully-define-finite-deterministic-automata.md
    - make-slides-69-and-70-deterministic.md
    - introduction-class-languages-and-strings.md
    - deterministic-fsm-dfsm.md
    - configuration.md
    - yields-in-one-step-relation.md
    - string.md
Emoji: "\U0001F4E0"
id: bafyreiezmfhcjqgr4yiqa7cjs3e3vx5growx6wfcs3vwdtwpfjpnprluwq
---
# finite state machines   
<details>
<summary>lecture slides:</summary>

[Ch05aFSM](files/ch05afsm.pdf)    

</details>

# lecture to-do list:   
[get explanation for what is being shown in slide 4](get-explanation-for-what-is-being-shown-in-sli.md)    
[fully define finite (deterministic) automata](fully-define-finite-deterministic-automata.md)    
[make slides 69 and 70 deterministic](make-slides-69-and-70-deterministic.md)    
 --- 
given how we ended on the previous lecture: [introduction class: Languages and Strings](introduction-class-languages-and-strings.md), there wil be a focus on FSM   
# regular language   
to be able to discuss all problems we need to put them into a common framework:   
  - each problem is put into a common language   
  - than we attempt at solving it by first checking if the expression is within the language within the framework   
  - solving a problem is the same as checking if a given string is within a language or not   
thats why we start on the simplest class of languages to use and solve problems: **regular languages**   
this is where **regular expressions** reside as well   
there are two ways of dealing with a language:   
  1. producing strings from a langauge (expression)   
  2. checking if a string is accepted by a FSM   
   
  peep below   

$$
flowchart TD

RX[Regular Expression]
FSM[Finite State Machine]
RL[Regular Language]

RX--->|L| RL
FSM --->|Accepts| RL
$$
> a quick diagram of comparing a *regular expression* vs a *FSM*   

## FSM example   
say there is a FSM for a vending machine where:   
  - one soda costs $.25   
  - it accepts no pennies   
  - max credit is $.45 (essentially the remainder of what you need to fully pay for a soda, or your change)   

$$
digraph VendingFSM {
    rankdir=LR;

    node [shape=circle];

    start [shape=point];
    start -> S0;

    S25 [shape=doublecircle];
    S30 [shape=doublecircle];
    S35 [shape=doublecircle];
    S40 [shape=doublecircle];
    S45 [shape=doublecircle];

    // Nickel (+5)
    S0  -> S5  [label="N"];
    S5  -> S10 [label="N"];
    S10 -> S15 [label="N"];
    S15 -> S20 [label="N"];
    S20 -> S25 [label="N"];

    // Dime (+10)
    S0  -> S10 [label="D"];
    S5  -> S15 [label="D"];
    S10 -> S20 [label="D"];
    S15 -> S25 [label="D"];
    S20 -> S30 [label="D"];

    // Quarter (+25)
    S0  -> S25 [label="Q"];
    S5  -> S30 [label="Q"];
    S10 -> S35 [label="Q"];
    S15 -> S40 [label="Q"];
    S20 -> S45 [label="Q"];

    // Select (not enough credit)
    S0  -> S0  [label="S"];
    S5  -> S5  [label="S"];
    S10 -> S10 [label="S"];
    S15 -> S15 [label="S"];
    S20 -> S20 [label="S"];

    // Select and dispense
    S25 -> S0  [label="S"];
    S30 -> S5  [label="S"];
    S35 -> S10 [label="S"];
    S40 -> S15 [label="S"];
    S45 -> S20 [label="S"];
}
$$
> the above is a FSM; representing the transitions between states within the vending machine. each state represents the current credit within the machine at  given time. while edges are the possible inputs (coins) that can be given and trigger transitions between states   

- the entry point is indicated by a state with only outbound edges (in this case is highlighted by a strangling inbound edge   
- terminal states are indicated with double circles as enclosures   
- edges $S$ represents soda selection in this specific examp   
   
   
- can read the graph in the slides where each node represents a state, and labeled lines represent ways to transition to other states   
- edge meanings   
    - S# (states)   
    - D (Dimes)   
    - N (nickels)   
    - Q (qaurter)   
   
## definition of a DFSM (deterministic finite state machines)   
[deterministic FSM (DFSM)](deterministic-fsm-dfsm.md)    
[configuration](configuration.md)    
what we want with DFSM is for there to be a string that starts with state *a* and ends with some final state *b* for all possible cases. for example:   

$$
flowchart LR
0 --->|a| 1 
1 --->|a| 1
1 ---> 2
2 ---> 2
0 ---> 3
3 ---> 3
$$
## the yields relations   
[yields-in-one-step relation](yields-in-one-step-relation.md)    
this is a way to represent mathematically the transitions between and through states within a machine as it reads a string   
> go back to sides 8 to see what it looks like and how its structured   

simply chaining the same expression over and over with different variables to represent the state. and using *epsilon* to represent a **final** state   
the entire point of this notation, is having a way to **represent the machine taking a single step**.   
so seeing the notation for it, strictly means:   
  > *"the [configuration](configuration.md)  $(q,w)$ yields configuration $(q^\prime, w^\prime)$ after **one step** of the machine $M$*" or "*from this situation, the machine moves to this situation*"   

<details>
<summary>copilot helped me think of this, but if we already have the transition function $\delta$, then what use do we have for $\vdash_M$?</summary>

the *transition function* found in [deterministic FSM (DFSM)](deterministic-fsm-dfsm.md), only tells us which state the machine should go to next given the current state it's in and the symbol it sees first within its given string   
the *yields relation* however, describes the **whole machine configuration** from one state to following states afterwards. allowing us to see the actual steps the machine will take given the string it's processing.   
thus, *yields relations* act as more explicit definition/demonstration of the *transition function*   

</details>

### computations   
using the *yields relation* from before, we can string [configuration](configuration.md) together with $\vdash\_M$ notation to illustrate how the machine will process a [string](string.md) one character at a time, and which states it will transition to given the previous character that was processed   
thus a sequence of yields relations can be used to illustrate how $M$ will behave given string $w$.   
the final confguration of a computation will read the empty character $\epsilon$.   
this is important as it lets the machine know in the scenario that the given string is accepted, has it reached the end.    
  1. if the machine is current in state $q\_4 \in A$, then the current string is accepted.    
      - but needs $\epsilon$ to know if it reaches the end of the string.    
      - especially if the entire string is accepted by the machine   
  2. if the machine is currently in state $q\_4 \notin A$, the the current string is rejected, and the machine can stop there. no need to use $\epsilon$ as a fail safe   
## accepting and rejecting   
you want a machine that accepts all integers given we need the following theorem to hold:   
  every DFSM *M*, on input *s* halts in *\|s\|* steps   
allowing the machine to account for all possible states, and the length to those steps   
the string will be accepted or rejected given its characters are in or not accepted by the machine (part of the language)   
   
## example of defining a language   
say we have the following expression:   
  
$$
L = \{ w \in \{ a,b \} ^*\} : \text{every a is immediatley followed by a b}
$$
> will need to go through building these examples myself   

note that once the rule is broken, the string is broken, and thus the final state is reached   
additionally, though we are using graphs to represent possible states in the example, remember that its essentially defining the possible structure of a string within a defined language. so think in terms of whats allowed in the structure of the word, not how the graph looks   
<details>
<summary>real world example of the lang of floating point numbers (which is a reg expression)</summary>

this machine is complete (as the transition func is always complete)   

</details>

**dead states** are often left out of the diagram for clarity (as there would be too many lines, making it messy)   
core thing to remember, is that this is all abstract in showing what a machine is actually doing. allowing us to skip the math and logic and use intuition instead   
## programming FSM   
there are cluster strings where different paths within the machine can share a "future" (given more than one path share the same ending state)   

$$
L = \{ w \in \{ a,b \} ^*\} : \text{ w contains an even number of a's and an odd number of b's}
$$
> can illustrate this to better show how this works   

**complementing a machine** means to take all the possible accepted states and take the exact states outside of whats being accepted (like set theory)   
  1. take the original machine   
  2. look at the final state   
  3. and then flip the final states so they occupy different states than the original machine   
  4. and then the original final state becomes a normal state   
using nondetermistic machines allow for you to solve for a bit more complicated problems. especially **the missing letter lang **problem    
# Definition of an NDFSM (nondeterministic FSM)   
this is almost defined in the same way as a DSFM, but with a slight difference…   
Delta is a the **transition relation** thats used instead of delta function (case matters). which is defined as a finite subset of the following:   
  
$$
(K \times (\Sigma \cup \{\epsilon\})) \times K
$$
which gives way to the slightly different:   
  
$$
M = ( K, \Sigma, \Delta, s, A)
$$
- *M* accepts a string *w* iff there exists some path along which *w* drives *M* to some element of *A *(at least there is one path that accepts)   
- than the language accepted by *M*, denotes as *L(M)*, is the set of all string accepted by *M*   
- epsilon is not accepted as a character/elem of Sigma   
- but epsilon is accepted as a string of Sigma\*   
   
because we are using a transition relation, there is the possibility of:   
  - transitioning to multiple states   
  - or just transitioning straight to the final state   
### analyzing NDFSM   
there are two ways:   
- explore a search tree (often more complicated to build)   
- follow all paths in parallel (using sets of states, placed in parallel: **subset construction**)   
    - this way, its looking at a NDFSM, and turning it into a DFSM   
    - looking at a set of states from the NDFSM   
    - those sets of states (in my words) are like meta states, which than lead to a deterministic final state   
    - like grouping the states that produce the same output   
   
NDFSM are easier to build than DFSM, but are more difficult to use in practice.   
**epsilon transition** define the ability to change state through the use of *epsilon*.    
  - denoted as *eps(q)*.   
  - illustrating terminal paths from the current state *q*   
# Nondeterministic vs Deterministic   
for each NDFSM, there is an equivalent DFSM   
so essentially, both are just as powerful to use. it just depends on the use case   
for a difficult problem, you build it as a NDFSM, and then turn it into a DFSM for easier building to easier usage   
   
