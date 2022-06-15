import { combineReducers } from 'redux'

import books from './books'
import authors from './authors'
import editBook from './editBook'
import getBookById from './getBookById'

const rootReducer = () =>
  combineReducers({
    books,
    authors,
    editBook,
    getBookById,
  })

export default rootReducer
