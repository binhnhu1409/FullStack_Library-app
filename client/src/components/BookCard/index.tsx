import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
// import { MdOutlineDeleteForever } from 'react-icons/md'

import { BookProps } from '../../types'
import './bookcard.scss'

const BookCard = ({ book }: BookProps ) => {
  // const navigate = useNavigate();

  // const navigateToDeletePage = () => {
  //   navigate(`/books/delete/${book._id}`);
  // };

  // const navigateToEditPage = () => {
  //   navigate(`/books/edit/${book._id}`);
  // };

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
          <p>{`Categories: ${book.categories}`}</p>
          <Link to={`books/${book._id}`}>
            <button className='card__btn'>
              Show more <span>&rarr;</span> 
            </button>
          </Link>
        </div>
      </article>
      <div className='info'>
        <span className='info__status'>{book.status}</span>

        <button className="info__button">
          <Link to={`books/edit/${book._id}`}>
            <AiOutlineEdit className="info__icon" />
          </Link>
        </button>

        {/* <button className="info__button" onClick={navigateToEditPage}>
            <MdOutlineDeleteForever className="info__icon" />
        </button> */}
       
      </div>
    </div>
  )
}

export default BookCard