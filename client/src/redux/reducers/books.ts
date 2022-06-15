import {
  GET_ALL_BOOKS_REQUEST,
  GET_ALL_BOOKS_FAILURE,
  GET_ALL_BOOKS_SUCCESS,
  BookActions,
  BooksState
} from '../../types'

export default function books(
  state: BooksState = {
    isLoading: false,
    books: [],
    error: '',
  },
  action: BookActions
): BooksState {
  switch (action.type) {
    case GET_ALL_BOOKS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_ALL_BOOKS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }
    }

    case GET_ALL_BOOKS_SUCCESS: {
      const allBooks = action.payload.books.map((books) => ({
        _id: books._id, 
        isbn: books.isbn,
        title: books.title,
        description: books.description,
        categories: books.categories,
        publisher: books.publisher,
        publishedDate: books.publishedDate,
        cover: books.cover,
        authors: books.authors,
        status: books.status,
        borrowerId: books.borrowerId,
        borrowDate: books.borrowDate,
        returnDate: books.returnDate,
      }) )
      return {
        ...state,
        isLoading: false,
        books: allBooks,
      }
    }

    default:
      return state
  }
}