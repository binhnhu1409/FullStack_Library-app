import express from 'express'

import {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get/api/v1/users prefix
router.post('/', createUser)
router.get('/', findAllUsers)
router.get('/:userId', findUserById)
router.put('/:userId', updateUserById)
router.delete('/:userId', deleteUserById)

export default router
