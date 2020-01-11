import React from 'react';
import ReactEmoji from 'react-emoji';
import { format } from 'date-fns';
import './Message.css';

const Message = ({ message: { user, text, role }, name }) => {
  let isSendByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  const time = format(new Date(), 'HH:mm');
  if (user === trimmedName) {
    isSendByCurrentUser = true;
  }
  return isSendByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentUser pr-10'>
        <small> {time} </small>
        <br /> <span style={{ float: 'left' }}>{trimmedName}</span>
      </p>
      <div className='messageBox bgBlue'>
        <p className='messageText colorWhite'> {ReactEmoji.emojify(text)}</p>
      </div>
      {role === 'admin' ? <i className='cm flag'></i> : null}
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      {role === 'admin' ? <i className='cm flag'></i> : null}
      <div className='messageBox bgLight'>
        <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className='sentUser pl-10'>
        <small> {time} </small>
        <br /> <span style={{ float: 'left' }}>{user}</span>
      </p>
    </div>
  );
};

export default Message;
