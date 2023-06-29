import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/dataBaseFunctions/usersDB'
import { getMockToken } from './mockToken'
import { User, UserDraft } from '../../models/user_models'

vi.mock('../db/dataBaseFunctions/usersDB')

describe('GET /api/v1/:id', () => {
  it('')
})
