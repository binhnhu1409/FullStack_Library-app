import axios from 'axios'
import { Dispatch } from 'redux'

import {
  EDIT_BOOK_REQUEST,
  EDIT_BOOK_FAILURE,
  EDIT_BOOK_SUCCESS,
  EditBookActions,
  BookType
} from '../../types'

//Edit book
export function EditBookRequestAction(): EditBookActions {
  return {
    type: EDIT_BOOK_REQUEST,
  }
}

export function EditBookFailureAction(errorMsg: string): EditBookActions {
  return {
    type: EDIT_BOOK_FAILURE,
    payload: {
      errorMsg,
    }
  }
}

export function EditBookSuccessAction(): EditBookActions {
  return {
    type: EDIT_BOOK_SUCCESS,
    payload: {
    }
  }
}

export function editBook(
  bookId: string,
  book: Partial<BookType>) {
  return async function (dispatch: Dispatch) {
    dispatch(EditBookRequestAction())
    try {
      const res = await axios.put(`http://localhost:5000/api/v1/books/${bookId}`,
      {_id: book._id,
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      categories: book.categories,
      publisher: book.publisher,
      publishedDate: book.publishedDate,
      cover: book.cover,
      authors: book.authors,
      status: book.status}
      )
      const bookData = res.data
      console.log('bookdata from update request', bookData)
      return dispatch(EditBookSuccessAction())
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(EditBookFailureAction('Page not found'))
      }
      return dispatch(EditBookFailureAction('Oops! Something went wrong...'))
    }
  }
}