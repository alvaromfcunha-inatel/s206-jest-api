import { readFileSync } from 'fs'


const getFile = path => {
  const buffer = readFileSync(path)
  const json = JSON.parse(buffer)
  return json
}

const pokedexService = {
  _path: './pokedex.json',

  getAll() {
    const pokedex = getFile(this._path)
    return pokedex['pokemon']
  },

  getById(id) {
    const pokedex = getFile(this._path)
    return pokedex['pokemon'][id - 1]
  }
}

export { pokedexService }