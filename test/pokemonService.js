
const fetch = require('node-fetch')
const serverConfg = require('./serverConfig')

async function * pokemonService () {
  const pokemons = ['Charmander', 'Squirtle', 'Bulbasur']

  for (const pokemon of pokemons) {
    yield fetch(`http://localhost:${serverConfg.port}/get${pokemon}`).then(p => p.json())
  }
}

module.exports = pokemonService
