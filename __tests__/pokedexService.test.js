import {expect, test} from '@jest/globals';

import { pokedexService } from "../pokedexService"; 

test('successful getAll', () => {
  const all = pokedexService.getAll()
  expect(all).toBeInstanceOf(Array)
  expect(all.length).toBe(151)
})

test('successfull getById 1', () => {
  const one = pokedexService.getById(1)
  expect(one).toBeInstanceOf(Object)
  expect(one.name).toBe('Bulbasaur')
})

test('unsuccessfull getById out of bounds 0', () => {
  const ofb = pokedexService.getById(0)
  expect(ofb).toBe(undefined)
})

test('unsuccessfull getById out of bounds 152', () => {
  const ofb = pokedexService.getById(152)
  expect(ofb).toBe(undefined)
})