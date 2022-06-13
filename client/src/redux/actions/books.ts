import axios from "axios";
import { Dispatch } from "redux";

import {
  GET_ALL_BOOKS_REQUEST,
  GET_ALL_BOOKS_FAILURE,
  GET_ALL_BOOKS_SUCCESS,
  BookActions
} from '../../types'

export function GetAllBooksRequestAction(): BookActions {
  return {
    type: GET_ALL_BOOKS_REQUEST,
  }
}

export function GetAllBooksFailureAction(errorMsg: string): BookActions {
  return {
    type: GET_ALL_BOOKS_FAILURE,
    payload: {
      errorMsg,
    }
  }
}

export function GetAllBooksSuccessAction(books: any[]): BookActions {
  return {
    type: GET_ALL_BOOKS_SUCCESS,
    payload: {
      books,
    }
  }
}

export function fetchAllBooks() {
  return async function (dispatch: Dispatch) {
    dispatch(GetAllBooksRequestAction())
    try {
      const res = await axios.get('http://localhost:5000/api/v1/books')
      const booksData = res.data
      console.log ('booksData from actions', booksData)
      return dispatch(GetAllBooksSuccessAction(booksData))
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(GetAllBooksFailureAction('Page not found'))
      }
      return dispatch(GetAllBooksFailureAction('Oops! Something went wrong...'))
    }
  }
}