import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';
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

      </Routes>
      <Footer />
      
    </div>
    
  );
}

export default App;
