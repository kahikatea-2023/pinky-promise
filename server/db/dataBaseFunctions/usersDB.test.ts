import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from '../knexfile'
const testDb = knex(config.test)

import * as db from './usersDB'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getUserById', () => {
  it('makes sure the user contains the correct propertys', async () => {
    expect.assertions(4)
    const user = await db.getUser(testDb, '1')

    expect(user).toHaveProperty('auth0_id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('bio')
  })
})

describe('userExist', () => {
  it('returns true if user exist', async () => {
    const userExist = await db.getUser(testDb, 'non user')
    expect(userExist).toBeFalsy
  })
  it('returns true if user exist', async () => {
    const userExist = await db.getUser(testDb, '1')
    expect(userExist).toBeTruthy()
  })
})
