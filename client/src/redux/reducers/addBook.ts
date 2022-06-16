import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_RESET,
  AddBookActions, 
  AddBookState } from '../../types';

export default function addBook(
  state: AddBookState = {
    isLoading: false,
    error: null,
    isAdded: false,
  },
  action: AddBookActions
): AddBookState {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case ADD_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }

    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAdded: true,
      }
    
    case ADD_BOOK_RESET:
      return {
        ...state,
        isAdded: false,
      };

    default:
      return state;
  }
}