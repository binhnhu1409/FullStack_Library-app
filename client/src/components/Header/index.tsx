import React from 'react'
// import { useSelector } from 'react-redux'

import { BsFillBookmarkHeartFill } from 'react-icons/bs'

import './header.scss'
// import { ThemeContext } from '../../context/theme'
// import { SidebarContext } from '../../context/sidebar'
// import { AppState } from '../../types'

const Header = () => {

  return (
    <header>
      <nav className="navbar">

        {/* logo on the left  */}
        <button className='navbar__logo'>
          <a href='#homepage'>Tiny Library</a>
        </button>

        {/* menu item in the middle */}
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a className='navbar__link' href='#login'>Login</a>
          </li>
          <li className="navbar__item">
            <a className='navbar__link' href='#newBooks'>New Books</a>
          </li>
          <li className="navbar__item">
            <a className='navbar__link' href='#genres'>Browse Categories</a>
          </li>
          <li className="navbar__item">
            <a className='navbar__link' href='#dashboard'>Dashboard</a>
          </li>
        </ul>

        {/* favorite cart on the right */}
        <button className="navbar__icon">
          <BsFillBookmarkHeartFill />
          <span className="navbar__favorite">
            {/* {favoriteCountries.length} */}
          </span>
        </button>

      </nav>
    </header>
  )
}

export default Header