import express from 'express'

import {
  createAuthor,
  findAllAuthors,
  findAuthorById,
  updateAuthorById,
  deleteAuthorById,
} from '../controllers/author'

const router = express.Router()

// Every path we define here will get /api/v1/authors prefix
router.post('/', createAuthor)
router.get('/', findAllAuthors)
router.get('/:authorId', findAuthorById)
router.put('/:authorId', updateAuthorById)
router.delete('/:authorId', deleteAuthorById)

export default router
