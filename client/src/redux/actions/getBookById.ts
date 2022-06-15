import { Dispatch } from 'redux';
import axios from 'axios';

import {
  GET_BOOK_BY_ID_REQUEST,
  GET_BOOK_BY_ID_FAILURE,
  GET_BOOK_BY_ID_SUCCESS,
  GetBookByIdActions,
  BookType
} from '../../types'


export function GetBookByIdRequestAction(): GetBookByIdActions {
  return {
    type: GET_BOOK_BY_ID_REQUEST,
  };
}

export function GetBookByIdFailureAction(errorMsg: string): GetBookByIdActions {
  return {
    type: GET_BOOK_BY_ID_FAILURE,
    payload: {
      errorMsg,
    },
  };
}

export function GetBookByIdSuccessAction(book: BookType): GetBookByIdActions {
  return {
    type: GET_BOOK_BY_ID_SUCCESS,
    payload: {
      book,
    },
  };
}

export function getBookById(bookId?: string) {
  return async (dispatch: Dispatch) => {
    dispatch(GetBookByIdRequestAction());
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/books/${bookId}`);
      const book = res.data;
      return dispatch(GetBookByIdSuccessAction(book));
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(GetBookByIdFailureAction('Page not found'))
      }
      return dispatch(GetBookByIdFailureAction('Oops! Something went wrong...'))
    }
  };
}
