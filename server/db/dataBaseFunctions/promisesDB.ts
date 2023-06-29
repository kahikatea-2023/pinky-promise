import connection from '../connection'
import { Pledge } from '../../../models/promise_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromiseById(id: string, db = connection): Promise<Pledge[]> {
  return db('promises')
    .where('id', id)
    .select(
      'promise_name as promiseName',
      'promise_description as promiseDescription',
      'user_id as userId',
      'friend_user_id as friendUserId',
      'status',
      'dateCreated',
      'dateDue'
    )
}
