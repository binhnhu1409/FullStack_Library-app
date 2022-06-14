import axios from 'axios'
import { Dispatch } from 'redux'

import {
  GET_ALL_AUTHORS_REQUEST,
  GET_ALL_AUTHORS_FAILURE,
  GET_ALL_AUTHORS_SUCCESS,
  AuthorActions
} from '../../types'

export function GetAllAuthorsRequestAction(): AuthorActions {
  return {
    type: GET_ALL_AUTHORS_REQUEST,
  }
}

export function GetAllAuthorsFailureAction(errorMsg: string): AuthorActions {
  return {
    type: GET_ALL_AUTHORS_FAILURE,
    payload: {
      errorMsg,
    }
  }
}

export function GetAllAuthorsSuccessAction(authors: any[]): AuthorActions {
  return {
    type: GET_ALL_AUTHORS_SUCCESS,
    payload: {
      authors,
    }
  }
}

export function fetchAllAuthors() {
  return async function (dispatch: Dispatch) {
    dispatch(GetAllAuthorsRequestAction())
    try {
      const res = await axios.get('http://localhost:5000/api/v1/authors')
      const authorsData = res.data
      return dispatch(GetAllAuthorsSuccessAction(authorsData))
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(GetAllAuthorsFailureAction('Page not found'))
      }
      return dispatch(GetAllAuthorsFailureAction('Oops! Something went wrong...'))
    }
  }
}