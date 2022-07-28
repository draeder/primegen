let MAX_OBJECT = 2**53 - 1
let rw = [] // raw numbers used to calculate 'next "prime"'

const Primegen = function (n, z) {
  n = n || 0; z = z || 100
  rw.length = 0
  let prms = []
  while (n < z) {
    if (chk(n) && prms.length <= 2){ prms.push(n); rw.push(n) }
    for (let p in prms){
      let prm = n + prms.slice(-1)[0] - prms.slice(-2)[0] + prms[p]
      if(rw.length >= MAX_OBJECT) return console.log('MAX_OBJECT reached!')
      rw.push(prm)
      if (prm % 2 === 1 ? prms.length >= 3 && chk(prm) : 0){
        if(prms.length >= MAX_OBJECT) return console.log('MAX_OBJECT reached!')
        prms.push(prm)
      }
    }
    n++
  }
  return prms
}
export default Primegen

function r(){
  return rw
}
export const raw = r

function chk (num) {
  if (num <= 1) { return false } if (num <= 3) { return true }
  let range = Math.sqrt(num)
  if (num % 2 == 0 || num % 3 == 0) { return false }
  for (let i = 5; i <= range; i += 6) { if (num % i == 0 || num % (i + 2) == 0) return false }
  return true
}
export const check = chk