import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/usersDB'
import { validateAccessToken } from '../auth0'
import { User, UserDraftSchema } from '../../models/user_models'
import { auth } from 'express-oauth2-jwt-bearer'

const router = Router()

export default router


