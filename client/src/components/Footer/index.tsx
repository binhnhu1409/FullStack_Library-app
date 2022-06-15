import React from 'react';
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {ImMail4} from 'react-icons/im'

import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        &copy; 2022 by Nhu Nguyen
        <div className='footer__contact'>
          <a className='footer__icon' href='https://github.com/binhnhu1409' target='_blank' rel='noopener noreferrer'>
            <BsGithub />
          </a>
          <a className='footer__icon' href='https://www.linkedin.com/in/nhu-nguyen1409/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin />
          </a>
          <a className='footer__icon' href='mailto:binhnhu1409@gmail.com' target='_blank' rel='noopener noreferrer'>
            <ImMail4 />
          </a>
        </div>
    </footer>
  );
}

export default Footer;