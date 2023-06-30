import request from 'superagent'
import { Pledge, PledgeFrontEnd } from '../../models/pledge_models'

const rootUrl = 'api/v1/promises'

export async function getAllPromisesByUserId(token: string): Promise<Pledge[]> {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as Pledge[]
}

export async function getPromiseByPromiseId(
  promiseId: number,
  token: string
): Promise<PledgeFrontEnd> {
  const res = await request
    .get(rootUrl + `/` + promiseId)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}
