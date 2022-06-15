import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { AppState } from '../types'

const initState: AppState = {
  books: {
    isLoading: false,
    books: [],
    error: null,
  },
  authors: {
    isLoading: false,
    authors: [],
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
