import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { AppState } from '../types'

const initState: AppState = {
  authors: {
    isLoading: false,
    authors: [],
    error: null,
  },

  books: {
    isLoading: false,
    books: [],
    error: null,
  },
  editBook: {
    isLoading: false,
    isEdited: false,
    error: null,
  },
  getBookById: {
    isLoading: false,
    error: null,
    book: null,
  },
  deleteBook: {
    isLoading: false,
    error: null,
    isDeleted: false,
  },
  addBook: {
    isLoading: false,
    error: null,
    isAdded: false,
  },
}

// export default function configureStore(initialState = initState) {
//   const middlewares = [thunk];
//   let composeEnhancers = compose;

//   if (process.env.NODE_ENV === 'development') {
//     if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//       composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//     }
//   }

//   const store = createStore(
//     rootReducer(),
//     initialState,
//     composeEnhancers(applyMiddleware(...middlewares))
//   );

//   if ((module as any).hot) {
//     (module as any).hot.accept('./reducers', () => {
//       const nextReducer = require('./reducers').default;
//       store.replaceReducer(nextReducer);
//     });
//   }

//   return store;
// }

export default function configureStore(initialState = initState) {
  const middlewares = [thunk]
  let composedEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composedEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer(),
    initialState,
    composedEnhancers(compose(applyMiddleware(...middlewares)))
  )

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
