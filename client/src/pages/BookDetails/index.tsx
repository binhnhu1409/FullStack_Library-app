import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'

import './bookdetails.scss'
import { AppState } from '../../types';
import { getBookById } from '../../redux/actions'

export default function BookDetails() {

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();

  const thisBook = useSelector(
    (state: AppState) => state.getBookById.book
  )

  if (!thisBook) {
    dispatch(getBookById(bookId))
    return <p>Loading...</p>
  } 

  const navigateToEditPage = () => {
    navigate(`/books/edit/${bookId}`);
  };

  return (
    <>
      <section className='onebook'>

        <aside className='onebook__item'>
          <img className='onebook__img' src={thisBook.cover} alt={`Cover of the book named ${thisBook.title}`} />
        </aside>

        <article className='onebook__item'>
          <h2 className='onebook__title'>{thisBook.title}</h2>
          <p>by</p> 
          {thisBook.authors.map((author) => 
            <h3><em>{author.firstName} {author.lastName}</em></h3>
          )}  
          <p><strong>ISBN:</strong> {thisBook.isbn}</p>
          <p><strong>Description:</strong> {thisBook.description}</p>
          <p><strong>Publisher:</strong> {thisBook.publisher}</p>
          <p>
            <strong>Published date:</strong> {dayjs(thisBook.publishedDate).format('DD/MM/YYYY')}
          </p>
          
          <ul className='onebook__tag'>
            <li className='onebook__list'>
              <p className='onebook__status'>{thisBook.status}</p>
            </li>
            <li className='onebook__list'>
              <p className='onebook__status'>{thisBook.categories}</p>
            </li>
          </ul>
          
          <div>
            <button className='home__btn' onClick={navigateToEditPage}>
              Edit book
            </button>

            <button className='home__btn'>
              Delete book
            </button>
        </div>
        </article>
      </section>
    </>
    
  )
}