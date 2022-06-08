import React from 'react';

import './homepage.scss';

const Homepage = () => {

  return (
    <section id='homepage' className='home'>
      <article className='home__item'>
        <h1 className='home__phrase'>What book <br/> are you looking for?</h1>
      </article>
      {/* import search component here */}
      <aside className='home__item'>
        <img className='home__hero' src={require("../../assets/img/hero_image.jpg")} alt="a stack of books with a flower vase on top of it" />
      </aside>
    </section>
  )
}

export default Homepage