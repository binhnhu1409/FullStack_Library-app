import Author, { AuthorDocument } from '../models/Author'
import { NotFoundError } from '../helpers/apiError'

// createAuthor
const create = async (author: AuthorDocument): Promise<AuthorDocument> => {
  return author.save()
}

// findAllAuthor
const findAll = async (): Promise<AuthorDocument[]> => {
  return Author.find()
}

// findAuthorById
const findById = async (authorId: string): Promise<AuthorDocument> => {
  const foundAuthor = await Author.findById(authorId)

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

// update
const updateAuthor = async (
  authorId: string,
  update: Partial<AuthorDocument>
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(authorId, update, {
    new: true,
  })

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

// delete user
const deleteAuthor = async (
  authorId: string
): Promise<AuthorDocument | null> => {
  const foundAuthor = Author.findByIdAndDelete(authorId)

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

export default {
  create,
  findAll,
  findById,
  updateAuthor,
  deleteAuthor,
}
