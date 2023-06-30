import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from '../knexfile'
const testDb = knex(config.test)

import * as db from './promisesDB'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('get all the promises', () => {
  it('returns correct amount of promises', async () => {
    const data = await db.getAllPromises(testDb)
    const promiseArrLength = data.length
    const promiseAmount = await db.getAllPromises(testDb)

    expect(promiseAmount).toHaveLength(promiseArrLength)
  })
})

describe('getPromisesById', () => {
  it('returns the correct information', async () => {
    const promise = await db.getPromisesById('1', testDb)

    expect(promise[0]).toHaveProperty('promiseName')
    expect(promise[0]).toHaveProperty('promiseDescription')
    expect(promise[0]).toHaveProperty('userId')
    expect(promise[0]).toHaveProperty('friendUserId')
    expect(promise[0]).toHaveProperty('status')
    expect(promise[0]).toHaveProperty('dateCreated')
    expect(promise[0]).toHaveProperty('dateDue')
  })
})
