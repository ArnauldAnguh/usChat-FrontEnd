import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';
// import Loader from 'react-loader-spinner';
const Message = ({ message: { user, text, role, when }, name }) => {
  let isSendByCurrentUser = false;
  const messageDate = new Date(when);
  const messageDateTime = messageDate.toLocaleTimeString();
  const trimmedName = name.trim().toLowerCase();
  text = text.trim();
  if (user === trimmedName) {
    isSendByCurrentUser = true;
  }
  return isSendByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentUser pr-10'>
        <small>{messageDateTime}</small>
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
        <small>{messageDateTime}</small>
        <br /> <span style={{ float: 'left' }}>{user}</span>
      </p>
    </div>
  );
};

export default Message;
