import { Dispatch } from 'redux';
import axios from 'axios';

import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_RESET,
  AddBookActions, 
  BookType } from '../../types';

export function AddBookRequestAction(): AddBookActions {
  return {
    type: ADD_BOOK_REQUEST,
  }
}

export function AddBookFailureAction(errorMsg: string): AddBookActions {
  return {
    type: ADD_BOOK_FAILURE,
    payload: {
      errorMsg,
    },
  }
}

export function AddBookSuccessAction(): AddBookActions {
  return {
    type: ADD_BOOK_SUCCESS,
  }
}

export function AddBookResetAction(): AddBookActions {
  return {
    type: ADD_BOOK_RESET,
  };
}

export function addBook(book: Partial<BookType>) {
  return async (dispatch: Dispatch) => {
    dispatch(AddBookRequestAction());
    try {
      await axios.post(`http://localhost:5000/api/v1/books/`,
        {
          isbn: book.isbn,
          title: book.title,
          description: book.description,
          categories: book.categories,
          publisher: book.publisher,
          publishedDate: book.publishedDate,
          cover: book.cover,
          authors: book.authors,
          status: book.status
        }
      );
      return dispatch(AddBookSuccessAction());
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch( AddBookFailureAction('Page not found'))
      }
      return dispatch( AddBookFailureAction('Oops! Something went wrong...'))
    }
  }
}
