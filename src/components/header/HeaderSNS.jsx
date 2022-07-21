import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSNS = () => {
  return (
    <div className='header__sns'>
      <a
        href='https://www.linkedin.com/in/mrbrandonyi/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/mrbrandonyi' target='_blank' rel='noreferrer'>
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
  );
};

export default HeaderSNS;
