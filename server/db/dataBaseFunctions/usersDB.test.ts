import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from '../knexfile'
import * as db from './usersDB'

const testDb = knex(config.test)

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
  it('makes sure the user contains the correct properties', async () => {
    expect.assertions(3)
    const user = await db.getUser('auth0|649cbc8bcb6899372f3cc882', testDb)

    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('bio')
  })
})

describe('userExist', () => {
  it('returns false if user exist', async () => {
    const userExist = await db.getUser('non user', testDb)
    expect(userExist).toBeFalsy()
  })
  it('returns true if user exist', async () => {
    const userExist = await db.getUser('auth0|649cbc8bcb6899372f3cc882', testDb)
    expect(userExist).toBeTruthy()
  })
})
