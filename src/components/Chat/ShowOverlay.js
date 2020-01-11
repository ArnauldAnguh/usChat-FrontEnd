import React from 'react';
import TextContainer from '../layout/TextContainer/TextContainer';

const Logout = ({ showOverlay, toggleOffOverlay, users, name }) => {
  return showOverlay ? (
    <div className='overlay'>
      <span className='close' onClick={toggleOffOverlay}>
        <i className='times circle outline icon'></i>
      </span>
      <TextContainer users={users} user={name} />
    </div>
  ) : null;
};

export default Logout;
