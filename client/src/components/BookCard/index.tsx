import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDeleteForever } from 'react-icons/md'

import { BookProps } from '../../types'
import './bookcard.scss'

const BookCard = ({ book }: BookProps ) => {

  return (
    <div className='grid__item'>
      

      <article className='card'>
        <img 
        className='card__img'
        src={book.cover} 
        alt={`Cover of the book named ${book.title}`} />
        <div className='card__content'>
          <h2 className='card__title'>{book.title}</h2>
          <p>{`ISBN: ${book.isbn}`}</p>
          <button className='card__btn'>Show more <span>&rarr;</span> </button>
        </div>
      </article>

      <div className='info'>
        <span className='info__status'>{book.status}</span>
        <button
              className="info__button"
              // onClick={() => dispatch(RemoveFavoriteCountry(country))}
            >
              <AiOutlineEdit className="info__icon" />
          </button>
          <button
              className="info__button"
              // onClick={() => dispatch(RemoveFavoriteCountry(country))}
            >
              <MdOutlineDeleteForever className="info__icon" />
          </button>
      </div>

    </div>
  )
}

export default BookCard