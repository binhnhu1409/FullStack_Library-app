//Action types for BOOKS
export const GET_ALL_BOOKS_REQUEST = 'GET_ALL_BOOKS_REQUEST'
export const GET_ALL_BOOKS_FAILURE = 'GET_ALL_BOOKS_FAILURE'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'

// AUTHORS
export type AuthorType = {
  _id: string
  firstName: string
  lastName: string
  biography: string
  books: BookType[]
}

export type AuthorsState = {
  isLoading: boolean
  authors: AuthorType[]
}

//BOOKS
export enum Status {
  Available = 'available',
  Borrowed = 'borrowed',
}

export type BookType = {
  _id: string
  isbn: string
  title: string
  description: string
  categories: string
  publisher: string
  publishedDate: Date
  cover: string
  authors: AuthorType[]
  status: Status
  borrowerId: string
  borrowDate: Date
  returnDate: Date
}

export type BookProps = {
  book: BookType
}

export type BooksState = {
  isLoading: boolean
  books: BookType[]
}

export type GetAllBooksRequestAction = {
  type: typeof GET_ALL_BOOKS_REQUEST
}

export type GetAllBooksFailureAction = {
  type: typeof GET_ALL_BOOKS_FAILURE
  payload: {
    errorMsg: string
  }
}

export type GetAllBooksSuccessAction = {
  type: typeof GET_ALL_BOOKS_SUCCESS
  payload: {
    books: any[]
  }
}

// Actions (for reducer)
export type BookActions =
  |GetAllBooksRequestAction
  |GetAllBooksFailureAction
  |GetAllBooksSuccessAction



  // For the app
export type AppState = {
  books: BooksState
  authors: AuthorsState
}