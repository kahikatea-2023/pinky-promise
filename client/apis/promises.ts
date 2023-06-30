import request from 'superagent'
import { Pledge, PledgeDraft } from '../../models/pledge_models'

const rootUrl = '/api/v1'

export async function getAllPromise(token: string): Promise<Pledge[]> {
  const res = await request
    .get(rootUrl + `/promises/`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as Pledge[]
}
