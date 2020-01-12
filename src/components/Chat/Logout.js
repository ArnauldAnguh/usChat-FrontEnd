import React from 'react';

const Logout = ({ logout, toggleOffLogoutOverlay }) => {
  return logout ? (
    <div className='overlay'>
      <span className='close' onClick={toggleOffLogoutOverlay}>
        <i className='times circle outline icon'></i>
      </span>
      <div className='ui card logout'>
        <div className='content'>
          <div className='header two'>Warning!!</div>
          <p>You will be logged out from chatroom</p>
          <br />
          <p>Are you sure?</p>
        </div>
        <div className='extra content'>
          <p>
            <a href='/'>Yes</a>

            <a onClick={toggleOffLogoutOverlay}>No</a>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Logout;
