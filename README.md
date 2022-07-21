# Primegen (WIP)
Generates prime numbers algorithimically

## About
> I'm not a mathemetician. But I can count sheep.

Nearly 20 years ago, I had a bout of insomnia. Instead of counting sheep that night, I calculated prime numbers starting with `0 + 1 = prime`, then `1 + 1 != prime`, then `1 + 2 = prime`, and so-on, along with some subtraction between the previous two primes. I realized the system I devised worked with larger numbers, too.

I didn't know how to program very well at the time, so my attempt to test the pseudocode I wrote down was a failure. For the record, I slept very little that night. 

I have since lost that pseudocode and forgot the details, but suddenly recalled parts of the methodoloty. Using pieces of that recollection plus some prime factorization checks, I have successfully generated primes in a range of 0-1,000,000 with this code. Since I'm getting only 41686 primes in that range, It looks like I'm skipping around 30K primes, though.

Right now, setting both `n` to a higher number while setting `lim` to a higher number results in some erratic behavior that I am working on. I would like to explore using `n` and `lim` as a range.

I would also like to use `BigInt()` to generate primes for larger numbers.

### Math / Pseudocode
The algorithmn I built does generate some non-primes, too. So I am using prime factorizations to check they are actually prime, which slows things down quite a bit on a large range. I'm hoping to remember any missing pieces from my sheep counting prime number generator from 20 years ago so the non-primes are no longer generated. However, the sheep counting method back then also skipped primes.

This is the rudimentary math combined with pseudocode that I used as a guide to the core number generator:
```
lim --> N
c --> 0 || N
while p.length <= lim
  p[0] = 1
  p[1] = p[0] + c // p = [1, 3]
  c --> c > 2
    p[z] = n + (n - p.slice(-2)[0])
  c++
```

With `n = 0` and `lim = 1_000_000`, the implementation outputs:
```js
[
    1,   3,   7,  11,  13,  17,  19,  23,  29,  31,  37,  41,
   43,  47,  49,  53,  59,  61,  67,  71,  73,  79,  83,  89,
   97, 101, 103, 107, 109, 113, 121, 127, 131, 137, 139, 149,
  151, 157, 163, 167, 169, 173, 179, 181, 191, 193, 197, 199,
  211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271,
  277, 281, 283, 289, 293, 307, 311, 313, 317, 331, 337, 343,
  347, 349, 353, 359, 361, 367, 373, 379, 383, 389, 397, 401,
  409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
  479, 487, 491, 499,
  ... 9570 more items
]
last 100003
random 54277
```

## Contribution
If you are a mathematician, it would be great to have your feedback and/or PR on this algorithm. 
- Is my approach completely wrong?
- Is there a way to make it run faster for larger ranges without needing to switch to a language like python, rust or golang?
- Could I modify the algorithm to no longer need prime factorization as a check?
- Is there something I can tweak to get the **next** prime number? I know that's a lofty goal since it is not possible yet, mathematically. But perhaps my amateur approach could create some ideas.

## License
MIT
