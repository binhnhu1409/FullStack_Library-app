import Book, { BookDocument } from '../models/Book'
import { NotFoundError } from '../helpers/apiError'

const create = async (book: BookDocument): Promise<BookDocument> => {
  return book.save()
}

const findAll = async (): Promise<BookDocument[]> => {
  return Book.find()
}

// const findById = async (movieId: string): Promise<MovieDocument> => {
//   const foundMovie = await Movie.findById(movieId)

//   if (!foundMovie) {
//     throw new NotFoundError(`Movie ${movieId} not found`)
//   }

//   return foundMovie
// }

// const update = async (
//   movieId: string,
//   update: Partial<MovieDocument>
// ): Promise<MovieDocument | null> => {
//   const foundMovie = await Movie.findByIdAndUpdate(movieId, update, {
//     new: true,
//   })

//   if (!foundMovie) {
//     throw new NotFoundError(`Movie ${movieId} not found`)
//   }

//   return foundMovie
// }

// const deleteMovie = async (movieId: string): Promise<MovieDocument | null> => {
//   const foundMovie = Movie.findByIdAndDelete(movieId)

//   if (!foundMovie) {
//     throw new NotFoundError(`Movie ${movieId} not found`)
//   }

//   return foundMovie
// }

export default {
  create,
  findAll,
  // findById,
  // update,
  // deleteMovie,
}
