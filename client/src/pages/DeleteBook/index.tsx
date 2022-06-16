import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './deletebook.scss'
import { AppState } from '../../types';
import { getBookById, deleteBook, DeleteBookResetAction } from '../../redux/actions'

export default function DeleteBook() {

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();

  const thisBook = useSelector(
    (state: AppState) => state.getBookById.book
  )
  const{isDeleted} = useSelector(
    (state: AppState) => state.deleteBook
  )

  const navigateToBookPage = () => {
    navigate(`/books/${bookId}`);
  };
  
  //Alert when editting book success
  useEffect(() => {
    if (isDeleted) {
      alert('Book deleted successfully')

      if (bookId) {
        dispatch(getBookById(bookId));
      }

      dispatch(DeleteBookResetAction());
      navigate(`/`);
    }
  }, [dispatch, navigate, bookId, isDeleted]);

  if (!thisBook) {
    dispatch(getBookById(bookId))
    return <p>Loading...</p>
  } 

  return (
    <>
      <div className="modal-dialog modal-confirm modal-container">
        <div className="modal-content">

          <div className="modal-header flex-column">			
            <h4 className="modal-title w-100">Are you sure?</h4>	
          </div>

          <div className="modal-body">
            <p>Do you really want to delete <strong>{thisBook.title}</strong>? This process cannot be undone.</p>
          </div>

          <div className="modal-footer justify-content-center">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={navigateToBookPage}
              data-dismiss="modal">
                Cancel
            </button>

            <button 
              type="button" 
              onClick={() => dispatch(deleteBook(thisBook._id))}
              className="btn btn-danger">
                Delete
            </button>
          </div>

        </div>
      </div>
    </>
    
  )
}