import React from 'react'

import './bookform.scss'

export default function BookForm() {

  

  return (
    <div className='formContainer'>
      <h2 className='form__title'>Edit book</h2>
      <form className='form'>    
        <input type="text"  placeholder="email" />
          <br/>
        <input type="text" placeholder="password"/>
      </form>
    </div>
  )
}
