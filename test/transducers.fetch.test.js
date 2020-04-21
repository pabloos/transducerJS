
const Server = require('./server')
const serverConfg = require('./serverConfig')
const pokemonService = require('./pokemonService')
const consumer = require('./consumer')
const { map, transducer } = require('../transducer.js')

const selectName = ({ name }) => name

describe('service consumer suite', () => {
  let server

  beforeAll(async () => {
    server = new Server(serverConfg)
    await server.run()
  })

  test('pokemons name map', async () => {
    const pokemonConsumer = consumer(pokemonService)

    const result = transducer(map(selectName))(await pokemonConsumer())
    const expected = ['Charmander', 'Squirtle', 'Bulbasur']

    expect(result).toStrictEqual(expected)
  })

  afterAll(async () => {
    await server.shutdown()
  })
})
