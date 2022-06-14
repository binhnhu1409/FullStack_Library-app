import React from 'react'
import { useSelector} from 'react-redux'

import BookCard from '../BookCard'
import { AppState} from '../../types'
import './allbooks.scss'

const AllBooks = () => {
  const { isLoading, books } = useSelector(
    (state: AppState) => state.books
  )

  // const { authors } = useSelector(
  //   (state: AppState) => state.authors
  // )
  
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <section className='grid' id='#allbooks'>
          {books.map((books) => (
            <>
              <BookCard key={books._id} book={books} /> 
            </>         
          ))}
          
        </section>
      )} 
    </>
  )
}

export default AllBooks