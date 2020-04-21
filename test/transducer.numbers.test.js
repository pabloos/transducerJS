
const { map, filter, distinct, some, every, transducer } = require('../transducer.js')

const add1 = x => ++x
const greaterThan = than => x => x > than
const double = x => x * 2
const isEven = x => x % 2 === 0

describe('transducer test suite', () => {
  describe('map test cases', () => {
    test('double', async () => {
      const numbers = [1, 2, 3]

      const result = transducer(map(double))(numbers)
      const expected = [2, 4, 6]

      expect(result).toStrictEqual(expected)
    })
  })

  describe('filter test cases', () => {
    test('does apply: n => m (greater than 2)', async () => {
      const numbers = [1, 2, 3]

      const result = transducer(filter(greaterThan(2)))(numbers)
      const expected = [3]

      expect(result).toStrictEqual(expected)
    })

    test('does apply: n => m (Even)', async () => {
      const numbers = [1, 2, 3, 4]

      const result = transducer(filter(isEven))(numbers)
      const expected = [2, 4]

      expect(result).toStrictEqual(expected)
    })

    test('does not apply: n => n', async () => {
      const numbers = [5, 6, 7]

      const result = transducer(filter(greaterThan(2)))(numbers)
      const expected = numbers

      expect(result).toStrictEqual(expected)
    })
  })

  describe('distinct func test cases', () => {
    test('add1 mix', async () => {
      const numbers = [2, 2, 4]

      const result = transducer(map(add1), distinct)(numbers)
      const expected = [3, 5]

      expect(result).toStrictEqual(expected)
    })
  })

  describe('every func test cases', () => {
    test('no false negative', async () => {
      const numbers = [2, 3, 4]

      const result = transducer(every(greaterThan(5)))(numbers)
      const expected = false

      expect(result).toStrictEqual(expected)
    })

    test('no false positive', async () => {
      const numbers = [12, 11, 14]

      const result = transducer(every(greaterThan(5)))(numbers)
      const expected = true

      expect(result).toStrictEqual(expected)
    })
  })

  describe('some func test cases', () => {
    test('no false negative', async () => {
      const numbers = [1, 2, 3]

      const result = transducer(some(greaterThan(2)))(numbers)
      const expected = true

      expect(result).toStrictEqual(expected)
    })

    test('no false positive', async () => {
      const numbers = [0, 1]

      const result = transducer(some(greaterThan(2)))(numbers)
      const expected = false

      expect(result).toStrictEqual(expected)
    })
  })

  describe('mixs test cases', () => {
    test('add1 -> greaterThan(2)', async () => {
      const numbers = [1, 2, 3]

      const result = transducer(map(add1), filter(greaterThan(2)))(numbers)
      const expected = [3, 4]

      expect(result).toStrictEqual(expected)
    })

    test('map, some test', async () => {
      const numbers = [1, 2, 3]

      const result = transducer(map(add1), some(greaterThan(5)))(numbers)
      const expected = false

      expect(result).toStrictEqual(expected)
    })
  })
})
