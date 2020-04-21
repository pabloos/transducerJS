
const getBulbasur = (req, res) => {
  res.send({
    name: 'Bulbasur',
    type: 'grass',
    lvl: 3
  })
}

const getSquirtle = (req, res) => {
  res.send({
    name: 'Squirtle',
    type: 'water',
    lvl: 3
  })
}

const getCharmander = (req, res) => {
  res.send({
    name: 'Charmander',
    type: 'fire',
    lvl: 3
  })
}

module.exports = {
  getBulbasur,
  getSquirtle,
  getCharmander
}
