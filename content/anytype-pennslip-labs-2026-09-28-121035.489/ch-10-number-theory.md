---
# yaml-language-server: $schema=schemas/page.schema.json
Object type:
    - Page
Backlinks:
    - lecture-5-relations.md
    - cs-2214.md
    - cs2214-discrete-math.md
Creation date: "2026-06-03T20:41:00Z"
Created by:
    - Desean
id: bafyreiaopxcvppltkmwo5e3kp7hlnqywbfpyw2bdzn3ledptpnz7hkjy7a
---
# ch. 10: number theory   
Progress: In progress
Course: cs2214 ~ discrete structures
Time Signature: December 28, 2025 10:12 AM   
***vvv slides vvv***   
[Ch8\_NumberTheory.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/Ch8_NumberTheory.pdf)   
# divisibility   
this is the basis of one of the currently used methods of encryption in cryptography   
- given $a$ and $b$ are int’s where $a \ne 0$.   
- where $a$ divides $b$ or $a \| b$ if there’s an int $q$ such that $b = aq$.   
    - $a$ is the dividend of factor $b$   
    - $b$ is the divisor of multiple $a$   
    - $q$ is the quotient   
   
for any int $a \ne 0$, $a \|0$ where $c =0$, we can say that 0 is the multiple of any possible number   
## properties of divisibility   
given $a, b, c$ are integers where $a \ne 0$.   
- if $a \| b \land a\|c \rightarrow a\|(b+c)$   
    - if $a\|b \land a\|c \rightarrow$  for any integers $m,n, (a\| (mb + nc))$   
- if $a\|b \rightarrow a\|bc$ for any c. proof in the drop down:   
    “Given $a \mid b$, we define the quotient $Q = aq$ so that $b = Q$. Then multiplying both sides by $c$, we get $bc = Qc = a(qc)$, which shows that $a \mid bc$, with the new quotient being $qc$.”   
- $a\|a$ nearly reaches reflexivity, though 0 is excluded by definition of \| (as seen above).   
- in $\N$, if $a\|b \land b\|a$ (requires $b \ne 0$) then $a = b$ which mimics antisymmetry for \|.   
    - though when changing the domain to $\Z$ the above does not hold   
    - if $a\|b \land b\|a \rightarrow \|a\| =\|b\|$, as both $a$ and $b$ can be opposites of one another (one can be the negative of the other). thus antisymmetry would not hold   
- if $a\|c \land b\|c \rightarrow a\|c$ (which acts transitivity of \|)   
- some practice work for understanding the above   
    [counting\_practice\_work\_cs2214.pdf](/home/slipnut44/Downloads/cs2214_fall25_notes/counting_practice_work_cs2214.pdf)   
   
## integer division   
for any int dividend $n$ and divisor $d > 0$, there’s the quotient $q$ and remainder $0 \le r < d$, such that $n = dq + r$   
of which can be represented through the following:   
- $n \text{ div } b = q = \lfloor n/b \rfloor$ actual integer division   
- $n \text{ mod } b = r = n -dq$ integer division through modulo arithmetic   
   
note: that div is an actual operation (separate from $\div$ and \|). both div and mod are a part of Euclidean Division. where div gives the quotient (a clean division) and mod gives the remainder (non-clean division)   
the above give the same thing, just in a different way with different pieces of information.   
# congruence   
given $m > 1$ is an integer, when $a$ and $b$ has the same remainder after modulus $m$. denoted as $a \equiv b \text{ mod } m$ which expands to $a \text{ mod } m = b \text{ mod } m$   
$\{(a,b) \in \Z \times \Z \mid a \equiv b \text{ mod } m\}$ is an equivalence relation on integers (is reflexive, symmetric, and transitive)   
a theorem is formed from the above where $a \equiv b \text{ mod } \iff m \mid (a - b) \iff a = b + km$ for some integer $k$   
thus all three expressions are logically equivalent and can be used interchangeably depending on whats needed in the situation   
understand that $a = b \text{ mod } m$ (boldface mod) denotes the result of modulus, while $a \equiv b \text{ mod } m$ denotes a relation, they’re differernt but are logically equivalent given $a \equiv b \text{ mod } m\iff a \text{ mod } m = b \text{ mod } m$   
## properties of congruence   
given $a,b,c,d$ are integers and $m$ is a positive integer - congruence mod $m$ is an equivalence relation on the integers:   
- $a \equiv a \text{ mod } m$   
- $a \equiv b \text{ mod } m \rightarrow b \equiv a \text { mod } m$   
- $(a \equiv b \text{ mod } m) \land (b \equiv c \text{ mod } m) \rightarrow a \equiv c \text{ mod } m$   
   
further more, congruence is preserved even through addition and multiplication. given we have $a \equiv b \text{ mod } m$ and a separate $c \equiv d \text{ mod } m$, then   
- we can add them together to get $a + c \equiv b + d \text{ mod } m$   
- we can multiply them through $ac \equiv bd \text{ mod } m$   
   
the above is [\*\*\*addition modulo](ch-10-number-theory.md)\*\*\* and ***m***u***[ltiplication modulo](ch-10-number-theory.md)*** respectively. which merely states that congruence holds even after addition and multiplicative transformations are made to the variables. where in fact, the same equivalence group can be maintained for $a \equiv b \text{ mod } m$ if $c=d$ if a simple transformation is needed.   
# modular arithmetic   
addition modulo is denoted as $a +\_mb$, while multiplication modulo is denoted with $a \*\_m b$   
## properties of $+\_m$ and $\*\_m$   
- associativity, where the order of addition of all terms or multiplication of all terms does not matter (when concerning using brackets to group terms   
- commutativity, the order of addition and multiplication does not matter (when no brackets is being used)   
- *neutral elements*, 0 is the additive neutral element, while one is the multiplicative neutral element   
- *additive inverse*, refers to how two modulo classes can be inverses of one another. which occurs if $+\_m$ results in 0.   
    - 0 is an additive inverse of itself ($0 +\_m0 \equiv 0$)   
    - then in general the additive inverse can be found   
    - $a+\_m(m-a) \equiv 0$ given $a \ne 0$   
        - where $(m-a) = b$   
        - meaning then the additive inverse of any first term $a$ is of the form $(m-a)$. or simply $-a$ once the equality is broken down and simplified   
- modular arithmetic keeps multiplicative distributive similar to polynomials in high school   
   
multiplicative inverses exist but not always. for ex, with $m = 6$:   
- there is no $a \in \Z\_6 = \{0,1,2,3,4,5\}$   
- at least in such a way where $3 \*\_6 3 \equiv 1$   
- we know a multiplicative inverse exists when $a \*\_m b \equiv 1$ (in similar fashion to the assignment of neutral elements   
- how to find a multiplicative inverse:   
    a multiplicative inverse exists when $\text{gcd}(a,m) = 1$. meaning $a$ and $m$ must be co-prime and share no common divisors other than 1   
    - as shown in the call-out above, when $a \*\_m b \equiv 1$, it means $b$ “undoes” the multiplication and returns the modulo class identity 1.   
    - say we want to find the multiplicative inverse for 3 given $m =7$   
        - we first check if $\text{gcd}(3,7) = 1$. which checks out   
        - and now we can actually look for an assignment for $b$ such that $a \*\_7 b \equiv 1$. here we need a bit of trail and error to find that out.   
        - after some fooling around, we can see that when $b = 5$, we get $a \*\_7 5 \equiv 1$ as needed. thus $b = 5$ is the multiplicative inverse of 3 when $m = 7$   
   
    an alternative way is to use both the $\text{gcd}(a,m) = 1$ along with the ***linear diophantine equation***. which can be used given the gcd from before exists   
    this works for when $m$ is large and trail and error is ludicrous   
    1. translate the congruence into the form of the linear diophantine equation ($a \*\_m x \equiv 1 \rightarrow ax + my = 1$. $x$ is the solution of what we need for the multiplicative inverse   
        1. we need to use the ***euclidean algorithm*** with $\frac m a$ initially. and if in the first time we dont get a remainder of 1, we keep going finding the remainder division of $a$ until we do. say we wanted to find the multiplicative inverse of 3 given $m = 26$   
            - the breakdown of the process:   
                $$
26 = 8\*3 + 2
$$   
                $$
3 = 1\*2 +1
$$   
                now we reached what we want   
        2. now with everything we did above, we backtrack to the first remainder division, and then substitute values so that everything is combined into a single statement that equates to the remainder 1 we found:   
            - the process   
                given we found $3 = 1*2 + 1$ and $26 = 8*3 + 2$, they can be rearranged such they’re the solution for the remainder, and then recursively substitute everything into the equation with remainder 1 as follows   
                $$
26 = 8*3 + 2 \leftrightarrow 2 = 26 - 8*3
$$   
                $$
3 = 1*2 +1 \leftrightarrow 1 = 3 - 1*2
$$   
                then, we substitute 2   
                $$
1 = 3 -(26-8*3) \leftrightarrow 1 = 9*3-26
$$   
    2. can see that $x = 3$ and $y = -1$   
   
    note\* that if $-x$, then we just pass it through mod m to get the solution.   
   
## modular arithmetic and congruence classes   
given we have two integers $a,b$ and a positive integer $m$:   
$\Z\_m = \{0,1,...,m-1\}$ (set of integers modulo $m$) can be used to form $\Z/\_m\Z$ (set of congruence classes based on modulo $m$). this can be used to add and multiply congruence classes given modulo $m$ as shown below   
$$
[a]\_m + [b]\_m = a +\_m b = a + b \text{ mod } m = [a+b]\_m
$$   
$$
[a]\_m \* [b]\_m = a *\_m b = a b \text{ mod } m = [a*b]\_m
$$   
# prime numbers   
- ***the fundamental theorem of arithmetic***   
    every natural number $n$ greater than 1 is either prime or can be factored into the product of several prime powers. of which the factorization for such a number is unique as there exists $k \ge 1$ distinct primes $p\_1,...,p\_k$ and powers $a\_1,...,a\_k \ge 1$ such that:   
    $$
n = p\_1^{a\_1} \* p\_2^{a\_2} \* ... \* p\_k^{a\_k}
$$   
    and for negative numbers, given $n \le -2$, $n$  is either prime or can be a factorization of prime numbers as well. which takes a similar form as the above:   
    $$
n = - p\_1^{a\_1} \* p\_2^{a\_2} \* ... \* p\_k^{a\_k}
$$   
    examples of the above with positive integers   
    - when $n = 60$   
        1. divide by the smallest primes (in this instance 2)   
            1. $60 = 2\*30$   
            2. $30 = 2\*15$   
            3. $15 = 3\*5$   
        2. create the final factorization given the above: $60 = 2^2*3*5$   
    - when $n = 84$   
        - $84 = 2\*42 = 2^2 \* 21 = 2^2 \* 3 \* 7$   
        - final result $84 = 2^2 \* 3 \* 7$   
    - if $n = 97$ for example, 97 is already  a prime number so no factorization is needed   
   
    then with negative numbers, its the same process but with just a leading $-1$.   
   
note: that a prime number is simply a number that is only divisible by 1 and itself. so with the prime factoring as seen before, start with the smallest prime 2, 3, 5, and 7. in extreme cases given $n$, check for factorization all the way up to $\sqrt{n}$ as $p\_k^{a\_k} < \sqrt{n}$   
we know we finished the factorization once all terms are primes themselves and can no longer be factored. just as we saw in the example above   
***euclids theorem*** explains that there are infinitely many primes.   
- finding large primes is tough   
- which is the basis behind most current cryptographic systems as it leverages   
    - figuring out if a large number is prime   
    - and it it’s not, factoring it into primes   
   
## sieve of eratosthenes   
***sieve of eratosthenes*** > an effect though somewhat inefficient method to find all primes that are smaller or equal to a given natural number (if a number is prime, or can be factored into primes)   
based on the following observation: if a natural number $n$ is composite, then it must have at least one prime factor $p$ such that $p \le \sqrt{n}$.   
note that if $n = ab$, then $(a \lor b) \le
\sqrt{n}$   
- steps to find all primes $\le n$ through the *sieve of eratosthenes*   
    1. list all natural numbers from 2 to $n$   
    2. remove all multiples of the first number in the list (is sometimes 2), except the first number itself   
    3. move to the next number in the list (usually is 3) and remove all its multiples. following the same pattern as before   
    4. this repeats fo all sequential numbers in the list until the current number is $> \sqrt{n}$   
    5. the result set of numbers is all and the only primes from 2 to $n$   
   
    example to solidify the above   
   
## mersenne primes   
***mersenne prime*** > a prime number of the form $2^k - 1$.   
- if $k$ is not a prime, then surely $2^k - 1$ is not a prime either   
- though is $k$ is a prime, then there’s a chance that $2^k -1$ is prime as well   
    - for example, given $k = 5, 2^5 - 1=31$ which is prime, and thus holds (based on using the sieve of eratosthenes algorithm)   
    - though in another example given $k = 11, 2^{11} - 1 = 2047 = 23\*89$ which makes $2^{11} - 1$ not a prime number despite hinging on the prime number $k = 11$ as 2047 can be broken down into prime factorizations   
   
## additional conjectures on primes   
***goldbach’s conjecture*** > every even integer $n>2$ is the sum of two primes (which was verified up to $\approx 10^{18}$ by computers   
***landau’s conjecture*** > there are infinitely many primes of the form $n^2 + 1, n \in \N$   
***the twin prime conjecture*** > there are infinitely many pairs of twin primes (pairs of primes that differ by 2, like 3 and 5)   
### greatest common divisor   
two numbers $a$ and $b$  are ***co-prime*** when $\text{gcd}(a,b) = 1$   
then additionally, given a set of $n$ integers, they’re ***pairwise co-prime*** if their gcd is 1 (excluding matching entries   
- example to solidify the above:   
    - $\text{gcd}(12,13) = 1$, and $\text{gcd}(13,14) = 1$   
    - thus 12 and 13 is co-prime, and then 13 and 14 are co-prime   
    - though with the numbers put together to form {12, 13, 14}, they’re not pairwise co-prime as $\text{gcd}(12,14) = 2$   
   
using ***euclids algorithm*** as mentioned above is an effective means of finding the GCD of a number. especially if its a version that uses modulus   
algorithm that explains the euclidean algorithm   
### least common multiple   
given we have $a$ and $b$ as positive integers, the $\text{lcm}(a,b)$ is the smallest natural $m$ where $(a \mid m) \land (b \mid m)$ holds   
can also be computed from prime factorizations as given two integers $m = p\_1^{a\_1} \* p\_2^{a\_2} \* ... \* p\_k^{a\_k}$ and $n = p\_1^{b\_1} \* p\_2^{b\_2} \* ... \* p\_k^{b\_k}$, the prime factorization of the $p\_k$ terms appearing in either cases (where some exponents can be zero) gives us the following:   
$$
\text{lcm}(m,n) = p\_1^{\max(a\_1, b\_1)} \* p\_2^{\max(a\_2, b\_2)} \* ... \* p\_k^{\max(a\_k, b\_k)}
$$   
- example of finding the LCM of a 120 and 700:   
    we know that $120 = 2^3*3*5$ and $700 = 2^2*5^2*7$, we can combine the two as we saw above   
    $$
\text{lcm}(120,700) = 2^{\max(3,2)} \* 3^{\max(1, 0)} \* 5^{\max(1, 2)} \* 7^{\max(0, 1)} = 2^3 \* 3^1 \* 5^2 \* 7^1 = 4200
$$   
   
### bezouts theorem/identity   
the theorem says that for integers $a$ and $b$ when both are not zero, the following holds:   
$$
\gcd(a,b) = sa + tb
$$   
for some integers $s$ and $t$.   
in other words, the gcd of two numbers can be expressed as the linear combination of those numbers. where the coefficients $s$ and $t$ are not unique to a solution, seeing as there are infinitely many pairs that could work   
the bezout theorem connects to the euclidian algorithm as it find the gcd of two integers $a$ and $b$ through repeated integer division ($a = bq + r$). and then after the first step, the division is repeated with numbers $b$ and $r$ from the previous calculation until $r = 1$.   
when back-substituting as before for finding multiplicative inverses, that expression is actually the bezout theorem in work. thus proving the theorem   
the bezout theorem is what binds gcd computations to modular arithmetic   
# cryptography   
## caesar cipher   
the traditional caesar cipher shifted each letter by 3 characters. where each letter in the 26 letter alphabet was thought of indices of $\Z\_{26}$.   
- to encrypt a message, you would use the function $e: \Z\_{26} \rightarrow  \Z\_{26}, e(x) = x +\_{26} 3$.   
- to decrypt a message, you would use the following function $d:  \Z\_{26} \rightarrow  \Z\_{26}, d(x) = x-\_{26}3$ (the reverse of the encrypt function)   
   
## affine cipher   
the caesar cipher is a special case of an affine cipher, where the key is fixed to be 3. the general form of a ***affine cipher*** is given below where $a$ and $b$ are arbitrary integers so long as they force $e(x)$ to be bijective:   
$$
e: \Z\_{26} \rightarrow  \Z\_{26}, e(x) = ax + b \text{ mod } 26
$$   
the pair $(a,b)$ is the key to a affine cipher   
- can show that $e(x)$ is bijective iff $\text{gcd}(a,26) = 1$. which also can also help us find the decryption function (the inverse of $e(x)$)   
    … need to find that   
   
## public vs private keys   
affine ciphers are examples of ***private key crypto-systems*** > where knowing the encryption key allows anyone to quickly determine the decryption key. meaning…   
1. all parties wo need to communicate have to share the key   
2. and the key must be kept private from prying eyes   
   
***public key crypto-systems*** > where knowing how to encrypt a message does not help in decrypting the message. thus everyone can have a *public encryption key*, while having separate *private decryption key*   
***the RSA crypto-system*** > uses a pair of integers $(n,e)$ where   
- $n = p\*q$ ($n$ can be factored into two prime numbers). this is part of the public key   
- the co-primes of $n$ is calculated as $\phi(n) = (p-1)(q-1)$   
- then we choose an $e$ (the second part of the public key). where it must satisfy $\gcd(e,\phi(n)) = 1$. meaning $e$ must also be co-prime with $\phi(n)$.   
    - some starter numbers to help hasten the search include $e \in \{3, 5, 17, 257, 65537\}$. these are possible values of $e$ that work most commonly for random factored pairs of $p$ and $q$   
- if $e$ is co-prime to $\phi(n)$ then there exists a multiplicative inverse $d$ such that $e \*\_{\phi(n)} d \equiv 1$ where $m = \phi(n)$   
- then the actual encryption function is defined as $\text{RSA}(x) = x^e \text{ mod } n$ (the actual function shorthand on the left was made up by me)   
   
in short, the RSA crypto-system is build the public key through finding the prime and co-primes of $n$, and then solving for $e$ in $\gcd(e,\phi(n)) = 1$. which allows you to construct the private key $d$ where $e \*\_{\phi(n) \times e} d \equiv 1$ can be found   
