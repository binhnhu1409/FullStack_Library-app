import {
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
  DELETE_BOOK_RESET,
  DeleteBookActions, 
  DeleteBookState } from '../../types';

export default function deleteBook(
  state: DeleteBookState = {
    isLoading: false,
    error: null,
    isDeleted: false,
  },
  action: DeleteBookActions
): DeleteBookState {
  switch (action.type) {
    case DELETE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDeleted: true,
      }

    case DELETE_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }

    case DELETE_BOOK_RESET:
      return {
        ...state,
        isDeleted: false,
      }
    
    default:
      return state;
  }
}