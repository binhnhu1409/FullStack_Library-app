//Action types for BOOKS
export const GET_ALL_BOOKS_REQUEST = 'GET_ALL_BOOKS_REQUEST'
export const GET_ALL_BOOKS_FAILURE = 'GET_ALL_BOOKS_FAILURE'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'

export const EDIT_BOOK_REQUEST = 'EDIT_BOOK_REQUEST'
export const EDIT_BOOK_SUCCESS = 'EDIT_BOOK_SUCCESS'
export const EDIT_BOOK_FAILURE = 'EDIT_BOOK_FAILURE'

//Action types for AUTHORS
export const GET_ALL_AUTHORS_REQUEST = 'GET_ALL_AUTHORS_REQUEST'
export const GET_ALL_AUTHORS_FAILURE = 'GET_ALL_AUTHORS_FAILURE'
export const GET_ALL_AUTHORS_SUCCESS = 'GET_ALL_AUTHORS_SUCCESS'

// AUTHORS
export type AuthorType = {
  _id: string
  firstName: string
  lastName: string
  biography: string
  books: BookType[]
}

export type AuthorProps = {
  author: AuthorType
}

export type AuthorsState = {
  isLoading: boolean
  authors: AuthorType[]
}

export type GetAllAuthorsRequestAction = {
  type: typeof GET_ALL_AUTHORS_REQUEST
}

export type GetAllAuthorsFailureAction = {
  type: typeof GET_ALL_AUTHORS_FAILURE
  payload: {
    errorMsg: string
  }
}

export type GetAllAuthorsSuccessAction = {
  type: typeof GET_ALL_AUTHORS_SUCCESS
  payload: {
    authors: any[]
  }
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

export type BookAuthorProps = {
  book: BookType,
  author: AuthorType
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

export type EditBookRequestAction = {
  type: typeof EDIT_BOOK_REQUEST
}

export type EditBookFailureAction = {
  type: typeof EDIT_BOOK_FAILURE
  payload: {
    errorMsg: string
  }
}

export type EditBookSuccessAction = {
  type: typeof EDIT_BOOK_SUCCESS
  payload: {
    book: any[]
  }
}


// Actions (for reducer)
export type BookActions =
  |GetAllBooksRequestAction
  |GetAllBooksFailureAction
  |GetAllBooksSuccessAction
  |EditBookRequestAction
  |EditBookFailureAction
  |EditBookSuccessAction


export type AuthorActions =
  |GetAllAuthorsRequestAction
  |GetAllAuthorsFailureAction
  |GetAllAuthorsSuccessAction


  // For the app
export type AppState = {
  books: BooksState
  authors: AuthorsState
}