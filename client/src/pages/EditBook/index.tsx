import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './editbook.scss'
import { AppState, AuthorType, BookType } from '../../types';
import { getBookById, editBook, EditBookResetAction} from '../../redux/actions'

export default function EditBook() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()
  const { bookId } = useParams<{ bookId: any }>();

  const thisBook = useSelector(
    (state: AppState) => state.getBookById.book
  )
  
  const{isLoading, isEdited} = useSelector(
    (state: AppState) => state.editBook
  )

  // state of each input
  const [isbn, setIsbn] = useState(thisBook?.isbn);
  const [title, setTitle] = useState(thisBook?.title);
  const [description, setDescription] = useState(thisBook?.description);
  const [authors, setAuthors] = useState<AuthorType[]>(thisBook?.authors || []);
  const [publisher, setPublisher] = useState(thisBook?.publisher);
  const [publishedDate, setPublishedDate] = useState(
    new Date(thisBook?.publishedDate || Date.now())
  );
  const [categories, setCategories] = useState(thisBook?.categories);
  const [cover, setCover] = useState(thisBook?.cover);
  
  // Handler when there is change on any input
  const isbnChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setIsbn(e.currentTarget.value);
  };
  const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const descriptionChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };
  const publisherChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPublisher(e.currentTarget.value);
  };
  //havent come up how to handle date type
  // const publishedDateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
  //   setPublishedDate(e.currentTarget.value);
  // };
  const categoriesChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategories(e.currentTarget.value);
  };
  const coverChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCover(e.currentTarget.value);
  };

  //Handler when form is submit
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    //how to validate date to the right format??
    // if (???) {
    //   alert('Please enter published date in format of MM/DD/YYY');
    //   return;
    // }

    const bookData: Partial<BookType> = {
      isbn: isbn,
      title: title,
      description: description,
      authors: authors,
      publisher: publisher,
      publishedDate: publishedDate,
      categories: categories,
      cover: cover
    };

    if(bookId) {
      dispatch(editBook(bookId, bookData))
    }
  }

  //Alert when editting book success
  useEffect(() => {
    if (isEdited) {
      alert('You have updated book successfully!')

      if (bookId) {
        dispatch(getBookById(bookId));
      }
      navigate(`/books/${bookId}`);
      dispatch(EditBookResetAction());
    }
  }, [dispatch, navigate, bookId, isEdited]);

  // Condition to dispatch and get the current book
  if (!thisBook) {
    dispatch(getBookById(bookId))
    return <p>Loading...</p>
  } 

  return (
    <div className='formContainer'>
      <h2 className='form__title'>Edit book form</h2>

      <form className='form' onSubmit={formSubmitHandler}>
        <label className='form__label' htmlFor='title' >Book title</label>
        <input 
          className='form__input' 
          id='title'
          type="text" 
          placeholder={`${thisBook.title}`}
          onChange={titleChangeHandler} />

        <label className='form__label' htmlFor='description'>Description</label>
        <input 
          className='form__input' 
          id='description'
          type="text" 
          placeholder={`${thisBook.description}`}
          onChange={descriptionChangeHandler}/>

        <label className='form__label' htmlFor='isbn'>ISBN</label>
        <input 
          className='form__input' 
          id='isbn'
          type="text" 
          value={isbn}
          placeholder={`${thisBook.isbn}`}
          onChange={isbnChangeHandler}/>

        <label className='form__label' htmlFor='authors'>Authors</label>
        <input 
          className='form__input' 
          id='authors'
          type="text" 
          placeholder={`${thisBook.authors[0].firstName} ${thisBook.authors[0].lastName}`}/>

        <label className='form__label' htmlFor='categories'>Categories</label>
        <select 
          className='form__input' 
          id='categories'
          placeholder={`${thisBook.categories}`}
          onChange={categoriesChangeHandler}>
            <option value='Health/fitness'>Health/fitness</option>
            <option value="Children's">Children's</option>
            <option value='Business/economics'>Business/economics</option>
            <option value='Romance'>Romance</option>
            <option value='Adventure'>Adventure</option>
            <option value='Art/architecture'>Art/architecture</option>
            <option value='Picture book'>Picture book</option>
            <option value='Others'>Others</option>
        </select>

        <label className='form__label' htmlFor='cover'>Link to cover</label>
        <input 
          className='form__input' 
          id='cover'
          type="text" 
          placeholder={`${thisBook.cover}`}
          onChange={coverChangeHandler}/>

        <label className='form__label' htmlFor='publisher'>Publisher</label>
        <input 
          className='form__input' 
          id='publisher'
          type="text" 
          placeholder={`${thisBook.publisher}`}
          onChange={publisherChangeHandler}/>

        <label className='form__label' htmlFor='publishedDate'>Published date</label>
        <input 
          className='form__input' 
          id='publishedDate'
          type="text" 
          placeholder='MM/DD/YYYY'/>

        <button className='home__btn form__btn' onClick={formSubmitHandler}>
          Edit
        </button>
      </form>
    </div>
  )
}