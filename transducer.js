
// operators
const map = mapper => reducer => (acc, val) => reducer(acc, mapper(val))
const filter = predicate => reducer => (acc, val) => predicate(val) ? reducer(acc, val) : acc
const distinct = _ => (acc, val) => Array.from(new Set(inmutableArrayOf(acc, val))) // no good perf, nop

const some = predicate => _ => (acc, val) => acc !== true ? predicate(val) : true
const every = predicate => _ => (acc, val) => acc !== false ? predicate(val) : false

const pipe = fns => fns.reduce((reducer, nextReducer) => args => reducer(nextReducer(args)))

const inmutableArrayOf = (acc, val) => [...acc, val]

const transducer = (...fns) => iterable => Array.from(iterable).reduce(pipe(fns)(inmutableArrayOf), [])

module.exports = {
  map,
  filter,
  some,
  every,
  distinct,
  transducer
}
