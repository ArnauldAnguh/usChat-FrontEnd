import React from 'react';

const Header = ({ toggleOnOverlay }) => (
  <div className='HeaderContent'>
    <i
      className='outline user icon'
      title='Room Users'
      onClick={toggleOnOverlay}
    ></i>
    <h1>
      <i className='comment outline icon'></i>Uschat
    </h1>
  </div>
);

export default Header;
