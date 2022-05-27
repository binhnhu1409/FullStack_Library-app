import { Request, Response, NextFunction } from 'express'

import Book from '../models/Book'
import BookService from '../services/book'
import { BadRequestError } from '../helpers/apiError'

// POST /books
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      isbn,
      title,
      description,
      publisher,
      publishedDate,
      authors,
      status,
      borrowerId,
      borrowDate,
      returnDate,
    } = req.body

    const book = new Book({
      isbn,
      title,
      description,
      publisher,
      publishedDate,
      authors,
      status,
      borrowerId,
      borrowDate,
      returnDate,
    })

    // const book = new Book({
    //   isbn: '124125',
    //   title: 'model',
    //   description: 'ádsafsagagasds',
    //   publisher: 'publisher',
    //   publishedDate: '05/27/2021',
    //   authors: 'efr',
    //   status: Status.Available,
    //   borrowerId: '122412',
    //   borrowDate: '05/28/2021',
    //   returnDate: '05/30/2021',
    // })

    await BookService.create(book)
    res.json(book)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /books
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
