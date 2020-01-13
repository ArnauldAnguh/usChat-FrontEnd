import React from 'react';
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart';
import HeaderBar from '../layout/Header/HeaderBar';
import Input from '../layout/Textarea/Input';
import Messages from '../layout/Messages/Messages';
import ChatHistory from './ChatHistory';

const Logout = ({
  sendMessage,
  name,
  setMessage,
  toggleOnLogoutOverlay,
  messages,
  message,
  room,
  typing,
  history,
  addEmoji,
  showEmojiPicker,
  toggleEmojiPicker
}) => {
  return (
    <div className='container'>
      <HeaderBar room={room} logout={toggleOnLogoutOverlay} />
      <div className='ui segment'>
        <ChatHistory history={history} />
        <Messages messages={messages} name={name} typing={typing} />
      </div>
      <div
        className='iconOverlay'
        style={{ position: 'absolute', bottom: '24%' }}
      >
        {showEmojiPicker ? <Picker set='emojione' onSelect={addEmoji} /> : null}
      </div>
      <div
        className='container1'
        style={{ position: 'absolute' }}
        onClick={toggleEmojiPicker}
        title='Emojis'
      >
        <Smile />
      </div>
      <Input
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message}
      />
    </div>
  );
};

export default Logout;
