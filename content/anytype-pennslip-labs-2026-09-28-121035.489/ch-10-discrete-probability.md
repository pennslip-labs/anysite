---
# yaml-language-server: $schema=schemas/page.schema.json
Object type:
    - Page
Backlinks:
    - cs-2214.md
    - cs2214-discrete-math.md
Creation date: "2026-06-03T20:41:00Z"
Created by:
    - Desean
id: bafyreig6kath7upl7v4c6hjqfigazz3h7smlobf6dyalhx2ddfifl7jmoa
---
# Ch.10 Discrete Probability   
Progress: In progress
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***slides***   
[CS2214\_11\_Probability.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/CS2214_11_Probability.pdf)   
# the basics   
***experiment*** > a procedure that produces one outcome from a given set of possible outcomes   
***sample space*** > based on the experiment, is the set of all possible outcomes (which are shown as elements of the sample space)   
***event*** > a subset of the sample space. like a scene capturing a moment. where it contains a specific set of possible moments while contained within the entire set of the movie.   
an *event* is an element of the power set of the sample space.   
## uniform probability   
usually if an experiment has a finite sample pace $S$ where all the outcomes are equally likely. where then the probability of an event ($E \in P(S)$) is the number of outcomes in the event ($e \in E$) over the number of possible outcomes in $S$. illustrated below as the ***uniform probability*** on $S$:   
$$
p(E) = \frac {\|E\|} {\|S\|}
$$   
- example using uniform probability   
    say we have a honest d6 die where $S = \{1,2,3,4,5,6\}$ and all the outcomes are equally likely.   
    then the probability of an event like $E = \{2,4,6\}$ would be…   
    $$
p(\{2,4,6\}) = \frac {\|\{2,4,6\}\|} {\|S\|} = \frac 3 6 = \frac 1 2
$$   
    say though if we had two honest die rolling at one time. what would be the probability of the two dice summing to 7?   
    - now the experiment changed to the roll of 2 dice   
    - then the sample space would be the combination of each die’s sample space (Cartesian product) such that $S = D\_1 \times D\_2$ which then means $\|S\| = \|D\_1\| \* \|D\_2\| = 36$   
    - the event we are interested in is $E = \{(a,b) \in S \| a+b=7 \}$. of which $\|E\| = 6$ (can look at the actual elements later)   
    - thus $p(E) = \frac 6 {36} = \frac 1 6$   
   
### probability of combinations   
shown through an example…   
say we have a lottery where 6 numbers need to be drawn randomly from the int 1-49. to win; a ticket matching all 6 numbers in no particular order. what would the probability of winning be?   
note that numbers are not placed back into the draw. once pulled they are discarded   
- experiment would be drawing 6 numbers (without repetitions) from the integers 1-49   
- then the sample space would be defined as based on the set $A = \{1,2,...,49\}$, which gives $S = \{\text{6-combinations of A}\}$ such that…   
    $$
\|S\| = C(49,6) = \frac {49!} {6!(49-6)!} = 13983816
$$   
- thus the event $E$ that we are interested in contains exactly one element (whatever that element may is arbitrary) meaning $\|E\| = 1$. so then the probability of $E$ would be…   
    $$
p(E) = \frac {\|E\|} {\|S\|} = \frac 1 {C(49,6)} = \frac 1 {13983816} \approx 0.000000072
$$   
    note that the notation $C(49,6)$ is saying “the combination of numbers from the sample space of 49 outcomes, of which we picked 6”   
   
### probability of permutations   
given the same scenario above, what if the correct order is needed as well?   
- the experiment stays the same   
- the sample space changes a bit. we use the same set $A$ though $S = \{\text{6-permutations of A}\}$ such that   
    $$
\|S\| = P(49,6) = 49*48*47*46*45\*44 = \frac {49!} {(49 - 6)!} = 10068347520
$$   
- the event is similar as well as we only care that there is only one element that will be the winning 6-permutation. thus…   
    $$
p(E) = \frac {\|E\|} {\|S\|} = \frac 1 {P(49,6)} = \frac 1 {10068347520} \approx 0.0000000000993212
$$   
   
### extra example using lottery example   
say though instead of having the numbers discarded after being drawn, they’re actually placed back immediately. then what would be the possible winning number given the number can now have some repetitions?   
- the experiment now is to draw 6 numbers (with possible repetitions) from a set of 49   
- then the sample space would be defined using the same set $A$ as before, though $S = A^6$ such that…   
    $$
\|S\| = 49^6 = 13841287201
$$   
- then as normal, event $E$ contains only one element so…   
    $$
p(E) = \frac {\|E\|} {\|S\|} = \frac 1 {49^6} \approx 0.0000000000722476
$$   
   
# axioms of probability and independence   
## axioms   
***probability mass function*** > sometimes denoted as $\text{pmf} : S \rightarrow \R$. which assigns a probabilistic value to each outcome $s \in S$ such that   
- $\forall s \in S \space (0 \le \text{pmf}(s) \le 1)$   
- $\sum\_{s \in S} \text{pmf}(s)=1$   
   
extending the pmf to a new function p on $\mathcal{P}(S) \rightarrow [0,1], p(E) = \sum\_{s \in E} \text{ pmf}(s)$ ***the probability distribution function*** on $S$   
is defined based on the experimental observations of the frequency each event/outcomes occurs. part of the modelling experiment   
if $\|S\|= n$ and $s \in S$ happens with the same frequency, then simply $\text{pmf}(s) = \frac 1 n$   
# bayes’s theorem   
***bayes’s theorem*** > computes the probability of an event based on prior knowledge of conditions that might be related to the event.   
theorem: let $E$ and $F$ be two events from a sample space $S$, where $p(E) \ne 0$ and $p(F) \ne 0$ then we have the below:   

$$
\begin{align*}
p(E|F) &= \frac {p(F|E) p(E)} {p(F)} \\
&= \frac {p(F|E) p(E)} {p(F|E)p(E) + p(F|E^c)p(E^c)}
\end{align*}
$$
bayes’s theorem can be used in a common case where we need to test the accuracy of a test   
- ***sensitivity*** > the rate of people correctly identified with a positive test. the compliment of this represents a *false-positive* where it represents the percentage of people who was flagged falsely as positive   
- ***specificity*** > the rate of people correctly identified with a negative test. the compliment of this represents the *false-negative* that indicates the percentage of people who was not flagged and are this falsely negative   
- the probability of the test being wrong depends on the result, if flagged then *sensitivity^c*. and if not flagged the probability would be *specificity^c*   
- example of using the bayes’s theorem   
    let $T$ be the event the test is positive. and then the event that the test is negative is $T^c$   
    let $D$ be the event that you have the disease. the event that you dont have the disease is $D^c$   
    the given sensitivity is 95%, which means $p(T\|D) = 0.95$   
    the specificity is 80%, meaning $P(T^c\|D^c) = 0.8$   
    say we were given the rate at which we know out of a given population, the chances of someone having the disease is 1/10,000. which then means $p(D) = 0.0001$, and inversely $p(D^c) = 0.9999$   
    so then what would be the probability that you dont have the disease knowing that you had a negative test? this would be represented as $p(D^c\|T^c)$. and then you would use bayes theorem to expand and solve for the probability   
    conversely, say you have the disease knowing that you had a positive test. the numbers would be the same calculation but with $p(D\|T)$   
    note that when calculating $p(D\|T)$, you may find that the probability is extremely small. which comes from the fact that the prevelance of the disease itself is so small (the 1/10,000) to the point where its extremely unlikely for you to have it in the first place. so then to have it, and then have the test picl up on is an even lower likelihood as well.   
   
***generalized bayes’s theorem*** > let $S$ be a sample space and let the events $E\_n$ form a partition of $S$ where for any positive integer $j$ and $p(E\_j) \ne 0$, let $F$ be an event where $p(F) \ne 0$ then   
$$
p(E\_j\|F) = ...
$$   
# bernoulli trials   
an experiment with exactly two events. a *success* and a *failure -* of which are sets, which contains as many outcomes as the trial requires. success is usually denoted as $p$ while the failure as $q = 1-p$. thus showing that the success and failure are complimentary to one another   
in a simple case with a coin, a bernoulli trial have the success rely on the set {H} and failure on the set {T}. then if the coin is fair, $p = p(\{H\}) = \frac 1 2 = P(\{T\}) = q$   
one common problem is making sure that each trial and attempt is independent of one another. that is, each flip, roll, draw, does not effect any subsequent trails failure or successes. thus the probability of obtaining $k$ successes should remain consistent   
read through ch9 of the previous coares site for some help on this   
- example of using the bernoulli trials: say we roll a fair die 10 times, what’s the probability of getting a 5 exactly 2 times?   
    our sample space would be $S\_1 = \{1,2,3,4,5,6\}$. where then the event “success” is $\{5\}$ where $p = p(\{5\}) = \frac 1 6$. and then the event “failure” (all the other numbers) is $q = \frac 5 6$.   
    so then there are 10 rolls being done (and we dont care about the order) so we can use the notion of a combination where the sample space would transform into $S = (S\_1) ^{10}$, which means $\|S\| = 6^{10}$ is the number of possible outcomes, where each is a list of 10 numbers   
    the number of outcomes where the number 5 appears exactly 2 times regardless of order within 10 rolls is $C(10,2) = \frac {10!} {2! \cdot (10 -2)! } = 45$   
    note that $C(10,2)$ is essentially saying that from the ten rolls, we only care about two of those (in any order) to be what we are looking for   
    then the probability of any outcome would be $p^2 \cdot q^{10-2} = (\frac 1 6)^2 \cdot (\frac 5 6)^8$. thus the probability of   
