
export async function getPromiseByPromiseId(promiseId: number, token: string): Promise<PledgeFrontEnd> {
  const res = await request
  .get(rootUrl + `/` + promiseId)
  .set('Authorization', `Bearer ${token}`)
    return res.body
}