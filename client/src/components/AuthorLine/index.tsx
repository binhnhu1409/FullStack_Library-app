import React from 'react'

import { AuthorProps} from '../../types'

export default function AuthorLine({author} : AuthorProps) {


  return (
    <>
        <p className='card__author'> by <em><strong>{`${author.firstName} ${author.lastName}`}</strong></em></p>
    </>
  )
}