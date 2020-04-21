
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { getBulbasur, getCharmander, getSquirtle } = require('./handlers')

module.exports = class Server {
  constructor (config) {
    this.config = config

    this.server = express()

    this.server.use(bodyParser.urlencoded({ extended: true }))
    this.server.use(bodyParser.json())

    // this.server.use(cors)

    this.server
      // .get('/', (req, res) => res.send('Hello Pokemons!'))
      .get('/getBulbasur', getBulbasur)
      .get('/getCharmander', getCharmander)
      .get('/getSquirtle', getSquirtle)
  }

  async run () {
    this.running = await this.server.listen(this.config.port, () => console.log(`Poekmon API listening on port ${this.config.port}!`))
  }

  async shutdown () {
    await this.running.close()
  }
}
