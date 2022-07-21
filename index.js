let lim = 100_000
let n = 0

let primes = []

// Prime factorization
const factors = num => {
  let tmp = num
  let result = {};
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      result[i] = (result[i] || 0) + 1
      num /= i
    }
  }

  if(shift(tmp, 2) === tmp || shift(tmp, 3) === tmp) {
    return false
  }
  else if(Object.keys(result).length === 1 && tmp % 3 !== 0 && ( tmp % 5 !== 0 || tmp === 5 )) {
    return true
  }
}

// Closest divisor
function shift(number, divisor){
  return number + (divisor - (number % divisor)) % divisor
}

// Generate
while(n < lim){
  if(n < 2 && n + 1 != 2){
    primes.push(n+1)
  } else if(primes.length < 2) {
    primes[0] = 1
    primes[1] = 3
  }

  let num = n + (n - primes.slice(-2)[0])
  let f = factors(num)

  if(f === true && !primes.includes(num)) { 
    primes.push(num)
  }
  n++
}

let rIndx = Math.floor(Math.random() * primes.length)
console.log(primes)
console.log('last', primes.slice(-1)[0])
console.log('random', primes[rIndx])