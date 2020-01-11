import React from 'react';
import './Header.css';

const HeaderBar = ({ room, logout }) => (
  <div className='headerBar'>
    <div className='leftInnerContainer'>
      <i className='caret right icon' />
      <h3>{room}</h3>
    </div>
    <div className='rightInnerContainer'>
      <i className='closeChat' onClick={logout} title='close chat'>
        Logout
      </i>
    </div>
  </div>
);

export default HeaderBar;
