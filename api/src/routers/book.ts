import express from 'express'

import { createBook, findAll } from '../controllers/book'

const router = express.Router()

// Every path we define here will get /api/v1/books prefix
router.post('/', createBook)
router.get('/', findAll)

export default router
