import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'
import { PledgeDraftSchema, Pledge } from '../../models/promise_models'

const router = Router()

export default router

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ err: 'Unable to view promises' })
    return
  }

  try {
    const displayPromises = await db.getPromiseById(auth0Id)
    res.status(200).json(displayPromises)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ err: 'Unable to retrieve promises' })
    }
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  try {
    //-------------------------------------//
    // Is it supposed to be header not body??
    //------------------------------------//
    const userPromises = req.body
    const userPromisesData = PledgeDraftSchema.parse(userPromises)
    const displayUserPromises = await db.getPromiseById(userPromisesData)
    res.json(displayUserPromises)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err)
      res.status(500).json({ err: 'error displaying promises' })
    }
  }
})
