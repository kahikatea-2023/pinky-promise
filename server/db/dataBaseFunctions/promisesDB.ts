import connection from '../connection'
import { Pledge, PledgeFrontEnd } from '../../../models/pledge_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromisesById(id: string, db = connection): Promise<Pledge[]> {
  return db('promises')
    .where('id', id)
    .select(
      'promise_name as promiseName',
      'promise_description as promiseDescription',
      'user_id as userId',
      'friend_user_id as friendUserId',
      'status',
      'date_created as dateCreated',
      'date_due as dateDue'
    )
}

export function getPromiseByIdWithFriendName(
  id: number,
  db = connection
): Promise<PledgeFrontEnd> {
  return db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .where('id', id)
    .select(
      'id as promiseId',
      'promise_name as promiseName',
      'promise_description as promiseDescription',
      'user_id as userId',
      'users.username as friendName',
      'status',
      'date_created as dateCreated',
      'date_due as dateDue'
    )
    .first()
}
