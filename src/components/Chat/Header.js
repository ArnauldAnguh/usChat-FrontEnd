import React from 'react';

const Header = ({ toggleOnOverlay, toggleOnNotice, showNotice }) => (
  <div className='HeaderContent'>
    <p className='icons'>
      <i className='bell outline icon' onClick={toggleOnNotice}>
        {showNotice ? null : <samp className='num'>1</samp>}
      </i>
      <i
        className='outline user icon'
        title='Room Users'
        onClick={toggleOnOverlay}
      ></i>
    </p>
    <h1>
      <i className='comment outline icon'></i>Uschat
    </h1>
  </div>
);

export default Header;
