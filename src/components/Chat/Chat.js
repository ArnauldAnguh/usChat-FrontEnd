import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import TextContainer from '../layout/TextContainer/TextContainer';
import Logout from './Logout';
import ShowOverlay from './ShowOverlay';
import Chatbox from './Chatbox';
import Notice from './Notice';
import Header from './Header';
import './Chat.css';
import 'emoji-mart/css/emoji-mart.css';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setPicker] = useState(false);
  const [showOverlay, setOverlay] = useState(false);
  const [logout, setLogout] = useState(false);
  const ENDPOINT = 'https://uschatv1.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});
    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [ENDPOINT, location.search]);
  useEffect(() => {
    // JSON.parse(localStorage.getItem('message') || JSON.stringify(messages));
    socket.on('message', message => {
      setMessages([...messages, message]);
      // localStorage.setItem('message', JSON.stringify(messages));
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  const toggleOnLogoutOverlay = () => {
    setLogout(true);
  };
  const toggleOffLogoutOverlay = () => {
    setLogout(false);
  };
  const toggleEmojiPicker = () => {
    setPicker(!showEmojiPicker);
  };
  const toggleOnOverlay = () => {
    setOverlay(true);
  };
  const toggleOffOverlay = () => {
    setOverlay(false);
  };
  const addEmoji = emoji => {
    const text = `${message}${emoji.native}`;
    setMessage(text);
    setPicker(false);
  };
  return (
    <div>
      <Header toggleOnOverlay={toggleOnOverlay} />
      <Notice />
      <div className='outerContainer'>
        <Logout
          logout={logout}
          toggleOffLogoutOverlay={toggleOffLogoutOverlay}
        />
        <ShowOverlay
          showOverlay={showOverlay}
          toggleOffOverlay={toggleOffOverlay}
          users={users}
          name={name}
        />
        <Chatbox
          sendMessage={sendMessage}
          setMessage={setMessage}
          toggleOnLogoutOverlay={toggleOnLogoutOverlay}
          room={room}
          messages={messages}
          name={name}
          showEmojiPicker={showEmojiPicker}
          addEmoji={addEmoji}
          toggleEmojiPicker={toggleEmojiPicker}
          message={message}
        />
        <div className='one'>
          <TextContainer users={users} user={name} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
