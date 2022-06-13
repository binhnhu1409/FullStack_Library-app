import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { fetchAllBooks } from '../../redux/actions'

import Books from '../../components/Books'

export default function Home() {
  const dispatch =  useDispatch()
  const Books = useSelector(
    (state: AppState) => state.books.books
  )

  if (Books.length === 0) {
    dispatch(fetchAllBooks())
    return <p>Loading...</p>
  } 

  return (
    <>
      <Books />
    </>
  )
}