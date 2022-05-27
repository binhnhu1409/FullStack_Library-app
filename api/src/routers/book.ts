import express from 'express'

import {
  createBook,
  findAllBooks,
  findBookById,
  updateBook,
  deleteBookById,
} from '../controllers/book'

const router = express.Router()

// Every path we define here will get /api/v1/books prefix
router.post('/', createBook)
router.get('/', findAllBooks)
router.get('/:bookId', findBookById)
router.put('/:bookId', updateBook)
router.delete('/:bookId', deleteBookById)

export default router
