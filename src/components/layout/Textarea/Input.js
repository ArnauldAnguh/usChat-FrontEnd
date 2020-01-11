import React from 'react';

import './Input.css';
const Input = ({ message, sendMessage, setMessage }) => (
  <form className='form'>
    <input
      className='input'
      placeholder='Type a message'
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button className='sendBtn' onClick={event => sendMessage(event)}>
      Send
    </button>
  </form>
);

export default Input;
