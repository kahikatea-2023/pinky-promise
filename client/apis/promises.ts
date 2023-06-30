import request from 'superagent'
import { Pledge } from '../../models/pledge_models'

const rootUrl = '/api/v1/promises'

export async function getAllPromise(token: string): Promise<Pledge[]> {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as Pledge[]
}
