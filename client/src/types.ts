//Action types for BOOKS
export const GET_ALL_BOOKS_REQUEST = 'GET_ALL_BOOKS_REQUEST'
export const GET_ALL_BOOKS_FAILURE = 'GET_ALL_BOOKS_FAILURE'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'

export const EDIT_BOOK_REQUEST = 'EDIT_BOOK_REQUEST'
export const EDIT_BOOK_SUCCESS = 'EDIT_BOOK_SUCCESS'
export const EDIT_BOOK_FAILURE = 'EDIT_BOOK_FAILURE'
export const EDIT_BOOK_RESET = 'EDIT_BOOK_RESET'

export const GET_BOOK_BY_ID_REQUEST = 'GET_BOOK_BY_ID_REQUEST'
export const GET_BOOK_BY_ID_SUCCESS = 'GET_BOOK_BY_ID_SUCCESS'
export const GET_BOOK_BY_ID_FAILURE = 'GET_BOOK_BY_ID_FAILURE'

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
  error: any
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
  publishedDate?: Date
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
  error: any
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

// Edit book
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
  }
}

export type EditBookResetAction = {
  type: typeof EDIT_BOOK_RESET
}

export type EditBookState = {
  isLoading: boolean;
  isEdited: boolean;
  error: any
};

//Get One Book
export type GetBookByIdRequestAction = {
  type: typeof GET_BOOK_BY_ID_REQUEST
}

export type GetBookByIdFailureAction = {
  type: typeof GET_BOOK_BY_ID_FAILURE
  payload: {
    errorMsg: string
  }
}

export type GetBookByIdSuccessAction = {
  type: typeof GET_BOOK_BY_ID_SUCCESS
  payload: {
    book: BookType
  }
}

export type GetBookByIdState = {
  isLoading: boolean;
  error: any;
  book: BookType | null;
};


// Actions (for reducer)
export type BookActions =
  |GetAllBooksRequestAction
  |GetAllBooksFailureAction
  |GetAllBooksSuccessAction

export type EditBookActions =
  |EditBookRequestAction
  |EditBookFailureAction
  |EditBookSuccessAction
  |EditBookResetAction

export type GetBookByIdActions =
  |GetBookByIdRequestAction
  |GetBookByIdFailureAction
  |GetBookByIdSuccessAction


export type AuthorActions =
  |GetAllAuthorsRequestAction
  |GetAllAuthorsFailureAction
  |GetAllAuthorsSuccessAction


  // For the app
export type AppState = {
  books: BooksState
  authors: AuthorsState
  editBook: EditBookState
  getBookById: GetBookByIdState
}