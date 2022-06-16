import { Dispatch } from 'redux';
import axios from 'axios';

import {
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
  DELETE_BOOK_RESET,
  DeleteBookActions
} from '../../types';

export function deleteBookRequestAction(): DeleteBookActions {
  return {
    type: DELETE_BOOK_REQUEST,
  }
}

export function deleteBookFailureAction(errorMsg: string): DeleteBookActions {
  return {
    type: DELETE_BOOK_FAILURE,
    payload: {
      errorMsg,
    },
  }
}

export function deleteBookSuccessAction(): DeleteBookActions {
  return {
    type: DELETE_BOOK_SUCCESS,
  }
}

export function deleteBook(bookId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(deleteBookRequestAction());
    try {
      await axios.delete(`http://localhost:5000/api/v1/books/${bookId}`);
      return dispatch(deleteBookSuccessAction());
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(deleteBookFailureAction('Page not found'))
      }
      return dispatch(deleteBookFailureAction('Oops! Something went wrong...'))
    }
  };
}

export function DeleteBookResetAction(): DeleteBookActions {
  return {
    type: DELETE_BOOK_RESET,
  };
}