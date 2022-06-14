import {
  GET_ALL_AUTHORS_REQUEST,
  GET_ALL_AUTHORS_FAILURE,
  GET_ALL_AUTHORS_SUCCESS,
  AuthorActions,
  AuthorsState
} from '../../types'

export default function authors(
  state: AuthorsState = {
    isLoading: false,
    authors: [],
    error: ''
  },
  action: AuthorActions
): AuthorsState {
  switch (action.type) {
    case GET_ALL_AUTHORS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_ALL_AUTHORS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }

    case GET_ALL_AUTHORS_SUCCESS: {
      const allAuthors = action.payload.authors.map((authors) => ({
        _id: authors._id,
        firstName: authors.firstName,
        lastName: authors.lastName,
        biography: authors.biography,
        books: authors.books,
      }) )
      console.log('allAuthors from success reducers', allAuthors)
      return {
        ...state,
        isLoading: false,
        authors: allAuthors,
      }
    }

    default:
      return state
  }
}