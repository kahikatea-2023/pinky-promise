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
    const promise = await db.getPromiseById(testDb, '1')

    expect(promise[0]).toHaveProperty('id')
    expect(promise[0]).toHaveProperty('promise_name')
    expect(promise[0]).toHaveProperty('promise_description')
    expect(promise[0]).toHaveProperty('status')
    expect(promise[0]).toHaveProperty('user_id')
    expect(promise[0]).toHaveProperty('friend_user_id')
  })
})