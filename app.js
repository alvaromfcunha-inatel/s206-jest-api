import express from 'express'

import { pokedexService } from './pokedexService.js'

const app = express()

app.get('/', (_, res) => {
  return res.status(200).send({
    success: true
  })
})

app.get('/pokemon', (_, res) => {
  const pokedex = pokedexService.getAll()

  return res.status(200).send(pokedex)
})

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id

  const pokemon = pokedexService.getById(id)

  if(pokemon !== undefined) {
    return res.status(200).send(pokemon)
  } else {
    return res.status(404).send({
      error: 'not found'
    })
  }
})

export default app