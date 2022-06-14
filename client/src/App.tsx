import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='books/:bookId' element={<BookDetails />}/>
        <Route path='edit/:bookId' element={<EditBook />}/>

      </Routes>
      
      
    </div>
    
  );
}

export default App;
