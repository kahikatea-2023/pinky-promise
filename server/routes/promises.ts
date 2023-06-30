import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'

const router = Router()

export default router

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ err: 'Unable to view promises' })
    return
  }

  //----------------//
  //Make a function to call the query from the database. And change the variables in the name so it calls the correct ones
  //----------------//

  try {
    const displayPromises = await db.getAllPromises()
    res.status(200).json(displayPromises)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ err: 'Unable to retrieve promises' })
    }
  }
})
