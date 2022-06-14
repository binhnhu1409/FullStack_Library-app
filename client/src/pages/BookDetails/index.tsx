import React from 'react'

import './bookdetails.scss'

export default function BookDetails() {


  return (
    <div className='formContainer'>
      <h2 className='form__title'>Book details</h2>
      <form className='form'>    
        <input className='form__input' type="text"  placeholder="email" />
          <br/>
        <input className='form__input' type="text" placeholder="password"/>
      </form>
    </div>
  )
}