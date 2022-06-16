import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';
import DeleteBook from './pages/DeleteBook';
import AddBook from './pages/AddBook'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='books/:bookId' element={<BookDetails />}/>
        <Route path='books/edit/:bookId' element={<EditBook />}/>
        <Route path='books/delete/:bookId' element={<DeleteBook />}/>
        <Route path='books/add' element={<AddBook />}/>

      </Routes>
      <Footer />
      
    </div>
    
  );
}

export default App;
