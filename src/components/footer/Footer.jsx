/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        BRANDON YI
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__sns'>
        <a
          href='https://www.linkedin.com/in/mrbrandonyi/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/mrbrandonyi'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub />
        </a>
        <a
          href='https://instagram.com/426________'
          target='_blank'
          rel='noreferrer'
        >
          <BsInstagram />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; EGATOR TUTORIALS. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
