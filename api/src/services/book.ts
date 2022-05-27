import Book, { BookDocument } from '../models/Book'
import { NotFoundError } from '../helpers/apiError'

// create
const create = async (book: BookDocument): Promise<BookDocument> => {
  return book.save()
}

// findAll
const findAll = async (): Promise<BookDocument[]> => {
  return Book.find()
}

// findById
const findById = async (bookId: string): Promise<BookDocument> => {
  const foundBook = await Book.findById(bookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

//findByTitle

// update (mainly for borrowedId, borrowDate, returnDate??)
const update = async (
  bookId: string,
  update: Partial<BookDocument>
): Promise<BookDocument | null> => {
  const foundBook = await Book.findByIdAndUpdate(bookId, update, {
    new: true,
  })

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

// delete book (mainly for missing book?)
const deleteBook = async (bookId: string): Promise<BookDocument | null> => {
  const foundBook = Book.findByIdAndDelete(bookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

export default {
  create,
  findAll,
  findById,
  update,
  deleteBook,
}
