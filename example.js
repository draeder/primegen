import primeget from './primeget.js'
let n = 9_006_999_999_998_000
let z = 9_006_999_999_999_000

console.time('Time')
let primes = primeget(n, z)
console.timeEnd('Time')

// remove duplicates and sort
primes = [...new Set(primes)].sort((a, b) => a - b)

console.log(primes)
console.log('Last:', primes.slice(-1)[0])
console.log('Total:', primes.length)