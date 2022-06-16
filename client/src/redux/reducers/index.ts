import { combineReducers } from 'redux'

import books from './books'
import authors from './authors'
import editBook from './editBook'
import getBookById from './getBookById'
import deleteBook from './deleteBook'
import addBook from './addBook'

const rootReducer = () =>
  combineReducers({
    authors,
    
    books,
    editBook,
    getBookById,
    deleteBook,
    addBook,
  })

export default rootReducer
