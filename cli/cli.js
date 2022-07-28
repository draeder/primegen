#! /usr/bin/env node
import Primeget from '../api.js'
import { check } from '../primeget.js'
import Carets from 'carets'

let opts = {
  caret: 'primeget > ',
  docCaret: 'primeget $ > '
}
let c = opts.caret

const carets = new Carets(opts)
let primeget = new Primeget()

carets.prompt(c)
carets.on('line', data => {
  commands(data)
})

primeget.on('list', data => {
  console.log(data)
})

function _(num){
  num = parseInt(num.split('_').join(''))
  return num
}
function commands (cmd) {
  let cmdArr = cmd.trim().split(' ')
  if(cmdArr[0] === 'make'){
    cmdArr.shift()
    cmdArr[0] = _(cmdArr[0])
    cmdArr[1] = _(cmdArr[1])
    if(cmdArr.length === 2){
      let n = cmdArr[0], z = cmdArr[1]
      console.time('Time to generate primes with ' + n + ' and ' + z)
      primeget.make(n, z)
      console.timeEnd('Time to generate primes with ' + n + ' and ' + z)
    }
  }
  if(cmdArr[0] === 'raw'){
    let raw = primeget.raw()
    console.log(raw)
    if(cmdArr[1] === '-l') console.log(raw.length)
  }
  if (cmdArr[0] === 'get'){
    cmdArr.shift()
    let primes = primeget.get()
    if(cmdArr[0] === '-l') {
      console.log(primes)
      console.log('Length:', primes.length)
    }
    else if(cmdArr.length >= 2){
      let n = parseInt(cmdArr[0])
      let z = parseInt(cmdArr[1])
      let range = []
      for (let p in primes) {
        if(primes[p] >= n && primes[p] <= z) { 
          range.push(primes[p])
        }
      }
      console.log(range)
      if(cmdArr[2] === '-l') {
        console.log('Length:', range.length)
      }
    }
    else if(cmdArr.length === 1 && cmdArr.includes('-r')){
      let indx = Math.floor(Math.random() * primes.length)
      console.log(primes[indx])
    }
    else if(cmdArr.length === 1 && cmdArr.includes('-z')){
      console.log(primes.slice(-1)[0])
    }
    else if(cmdArr.length === 1){
      let i = parseInt(cmdArr[0])
      let given = primes[i]
      console.log(given)
    } else {
      console.log(primes)
    }
  }
  if (cmdArr[0] === 'length'){
    let len = primeget.length()
    console.log(len)
  }
  if (cmdArr[0] === 'check' && cmdArr[1]){
    let n = cmdArr[1]
    console.log(check(n))
  }
  if (['quit', 'exit', 'bye', 'close', 'end'].includes(cmdArr[0])) {
    process.exit(1)
  }
}