import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types'
// import { fetchAllBooks } from '../../redux/actions'

const Books = () => {
  const { isLoading, books } = useSelector(
    (state: AppState) => state.books
  )
  console.log ('isloading from books', isLoading)
  console.log ('books from books', books)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <section>
          {/* <button
            className="countriesRow_button"
            style={{ color: theme.foreground }}
            onClick={() => dispatch(fetchAllBooks())}
          ></button> */}
        </section>
      )}
    </>
  )
}

export default Books