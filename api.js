import EventEmitter from 'events'
import primeget from './primeget.js'
import { raw } from './primeget.js'

let primes = []
const Primeget = function () {
  const pg = this
  const events = new EventEmitter()
  pg.on = events.on.bind(events)
  pg.once = events.once.bind(events)
  pg.emit = events.emit.bind(events)
  pg.off = events.off.bind(events)

  if(primes) primes.length = 0

  if(primes) primes.length = 0
  pg.make = (n, z) => {
    primes.length = 0
    primes = primeget(n, z)
    return primes
  }
  pg.get = () =>{
    return primes = [...new Set(primes)].sort((a, b) => a - b)
  }
  pg.raw = () => {
    return raw()
  }
  pg.length = () => {
    return primes.length
  }
}
export default Primeget