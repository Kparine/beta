import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <img src={logo} alt='hey' width='48' height='48' />
        <div className='brand-title'>
          Patient<span className='brand-subtitle'>Portal &trade;</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
