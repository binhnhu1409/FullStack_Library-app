import React from 'react'

import './editbook.scss'

export default function EditBook() {


  return (
    <div className='formContainer'>
      <h2 className='form__title'>Edit book form</h2>
      <form className='form'>    
        <input className='form__input' type="text"  placeholder="ISBN" />
          <br/>
        <input className='form__input' type="text" placeholder="Book title"/>
          <br/>
        <input className='form__input' type="text" placeholder="Description"/>
          <br/>
        <input className='form__input' type="text" placeholder="categories"/>
          <br/>
        <input className='form__input' type="text" placeholder=" publisher"/>
          <br/>
        <input className='form__input' type="text" placeholder=" cover"/>
      </form>
    </div>
  )
}