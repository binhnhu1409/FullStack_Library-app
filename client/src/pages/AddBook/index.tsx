import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppState, AuthorType, BookType } from '../../types';
import { addBook, AddBookResetAction } from '../../redux/actions'

export default function EditBook() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()
  
  const{isLoading, isAdded} = useSelector(
    (state: AppState) => state.addBook
  )

  // state of each input
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authors] = useState<AuthorType[]>([]);
  const [publisher, setPublisher] = useState('');
  const [publishedDate] = useState();
  const [categories, setCategories] = useState('');
  const [cover, setCover] = useState('');
  
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
    if (!isbn) {
      alert('Please fill in the ISBN field!');
      return;
    }
    if (!title) {
      alert('Please fill in the title field!');
      return;
    }
    if (!description) {
      alert('Please fill in the description field!');
      return;
    }
    if (!authors) {
      alert('Please fill in the authors field!');
      return;
    }
  
    //how to validate date to the right format??
  
    const bookData: Partial<BookType> = {
      isbn: isbn,
      title: title,
      description: description,
      authors: authors,
      publisher: publisher,
      publishedDate: publishedDate,
      categories: categories,
      cover: cover
    }

    dispatch(addBook( bookData))
  }

  //Alert when add book success
  useEffect(() => {
    if (isAdded) {
      alert('You have added book successfully!')
      navigate(`/`)
      dispatch(AddBookResetAction())
    }
  }, [dispatch, navigate, isAdded]);

  return (
    <div className='formContainer'>
      <h2 className='form__title'>Add book form</h2>

      <form className='form' onSubmit={formSubmitHandler}>
        <label className='form__label' htmlFor='title' >Book title *</label>
        <input 
          className='form__input' 
          id='title'
          type="text" 
          placeholder='Title...'
          required
          onChange={titleChangeHandler} />

        <label className='form__label' htmlFor='description'>Description *</label>
        <input 
          className='form__input' 
          id='description'
          type="text" 
          required
          placeholder="Book's description..."
          onChange={descriptionChangeHandler}/>

        <label className='form__label' htmlFor='isbn'>ISBN *</label>
        <input 
          className='form__input' 
          id='isbn'
          type="text" 
          required
          value={isbn}
          placeholder='Enter ISBN...'
          onChange={isbnChangeHandler}/>

        <label className='form__label' htmlFor='authors'>Authors *</label>
        <input 
          className='form__input' 
          id='authors'
          required
          type="text" 
          placeholder='Author...'/>

        <label className='form__label' htmlFor='categories'>Categories *</label>
        <select 
          className='form__input' 
          id='categories'
          required
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

        <label className='form__label' htmlFor='cover'>Link to cover *</label>
        <input 
          className='form__input' 
          id='cover'
          required
          type="text" 
          placeholder='Link to cover...'
          onChange={coverChangeHandler}/>

        <label className='form__label' htmlFor='publisher'>Publisher</label>
        <input 
          className='form__input' 
          id='publisher'
          type="text" 
          placeholder='Enter publisher...'
          onChange={publisherChangeHandler}/>

        <label className='form__label' htmlFor='publishedDate'>Published date</label>
        <input 
          className='form__input' 
          id='publishedDate'
          type="text" 
          placeholder='MM/DD/YYYY'/>

        <button className='home__btn form__btn' onClick={formSubmitHandler}>
          Add
        </button>
      </form>
    </div>
  )
}