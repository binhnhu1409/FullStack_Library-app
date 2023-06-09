import React from 'react';
import { useNavigate } from 'react-router-dom';

import './homepage.scss';
import Search from '../Search';

const Homepage = () => {
  const navigate = useNavigate()

  const navigateToAddPage = () => {
    navigate(`/books/add`)
  }

  return (
    <section id='homepage' className='home'>
      <article className='home__item'>
        <h1 className='home__phrase'>What book <br/> are you looking for?</h1>
        <Search />
        <div>
          <button className='home__btn' onClick={navigateToAddPage}>
            + Add book
          </button>
          <button className='home__btn'>
            + Add author
          </button>
          <button className='home__btn'>
            Dashboard
          </button>
        </div>
      </article>
      <aside className='home__item'>
        <img className='home__hero' src={require("../../assets/img/hero_image.jpg")} alt="a stack of books with a flower vase on top of it" />
      </aside>
    </section>
  )
}

export default Homepage