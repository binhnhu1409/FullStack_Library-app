import React from 'react'

import { BookProps } from '../../types'
import './bookcard.scss'

const BookCard = ({ book }: BookProps) => {

  // let authorArray: string[] = []
  // if (authorArray) {
  //   authorArray = Object.keys(book.authors)
  // }
  return (
    <div className='grid__item'>
      <article className='card'>
        <img 
        className='card__img'
        src={book.cover} 
        alt={`Cover of the book named ${book.title}`} />
        <div className='card__content'>
          <h2 className='card__title'>{book.title}</h2>
          <p className='card__author'> by <em>{book.authors}</em></p>
          <button className='card__btn'>Show more <span>&rarr;</span> </button>
        </div>
      </article>
    </div>
  )
}

export default BookCard