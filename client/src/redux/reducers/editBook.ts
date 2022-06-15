import {
  EDIT_BOOK_REQUEST,
  EDIT_BOOK_FAILURE,
  EDIT_BOOK_SUCCESS,
  EDIT_BOOK_RESET,
  EditBookActions,
  EditBookState
} from '../../types'

export default function books(
  state: EditBookState = {
    isLoading: false,
    isEdited: false,
    error: '',
  },
  action: EditBookActions
): EditBookState {
  switch (action.type) {
    case EDIT_BOOK_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case EDIT_BOOK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }
    }

    case EDIT_BOOK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isEdited: true,
      }
    }

    case EDIT_BOOK_RESET: {
      return {
        ...state,
        isEdited: false,
      }
    }

    default:
      return state
  }
}