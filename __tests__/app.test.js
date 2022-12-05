import request from 'supertest'

import app from '../app.js'

test('successful basic api call', () => {
  request(app)
    .get('/')
    .then(response => {
      expect(response.statusCode).toBe(200)
    })
})

test('successful pokemon api call ', () => {
  request(app)
    .get('/pokemon')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body.length).toBe(151)
    })
})

test('successful pokemon by id api call ', () => {
  request(app)
    .get('/pokemon/1')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body.id).toBe(1)
      expect(response.body.name).toBe('Bulbasaur')
    })
})

test('unsuccessful pokemon by out of range id api call 1', () => {
  request(app)
    .get('/pokemon/0')
    .then(response => {
      expect(response.statusCode).toBe(404)
    })
})

test('unsuccessful pokemon by out of range id api call 2', () => {
  request(app)
    .get('/pokemon/152')
    .then(response => {
      expect(response.statusCode).toBe(404)
    })
})

test('unsuccessful pokemon by invalid id api call', () => {
  request(app)
    .get('/pokemon/awd')
    .then(response => {
      expect(response.statusCode).toBe(404)
    })
})