import React from 'react';
import './Header.css';
const date = new Date().toDateString();
const HeaderBar = ({ room, logout }) => (
  <div className='headerBar'>
    <div className='leftInnerContainer'>
      <i className='users icon' />
      <h3>{room}</h3>
      <br />
      <small className='message-date'>{date}</small>
    </div>
    <div className='rightInnerContainer'>
      <i className='closeChat' onClick={logout} title='close chat'>
        Logout
      </i>
    </div>
  </div>
);

export default HeaderBar;
