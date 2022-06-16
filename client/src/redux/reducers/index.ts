import { combineReducers } from 'redux'

import books from './books'
import authors from './authors'
import editBook from './editBook'
import getBookById from './getBookById'
import deleteBook from './deleteBook'

const rootReducer = () =>
  combineReducers({
    books,
    authors,
    editBook,
    getBookById,
    deleteBook,
  })

export default rootReducer
