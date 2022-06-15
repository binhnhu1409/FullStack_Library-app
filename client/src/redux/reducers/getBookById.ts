import {
  GET_BOOK_BY_ID_REQUEST,
  GET_BOOK_BY_ID_FAILURE,
  GET_BOOK_BY_ID_SUCCESS,
  GetBookByIdActions,
  GetBookByIdState
} from '../../types';

export default function getBookById(
  state: GetBookByIdState = {
    isLoading: false,
    error: null,
    book: null,
  },
  action: GetBookByIdActions,
): GetBookByIdState {
  switch (action.type) {
    case GET_BOOK_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        book: null,
      };
    case GET_BOOK_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        book: action.payload.book,
      };
    case GET_BOOK_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      };

    default:
      return state;
  }
}