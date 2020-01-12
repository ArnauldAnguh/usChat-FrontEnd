import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [directions, setDirections] = useState(false);

  return (
    <div className='joinOuterContainer'>
      <div className='ui segment intro'>
        <div className='text' onClick={() => setDirections(!directions)}>
          <b>Directions</b> <i className='dropdown icon'></i>
        </div>
        <b>
          <small>No Registration required!!</small>
        </b>
        <br />

        <hr />
        {directions ? (
          <small className='item instruc'>
            <li className='item'>
              <i>Enter your name(nickname)</i>
            </li>
            <br />
            <li className='item'>
              <i>Enter a room name </i>
            </li>
            <br />
            <li className='item'>
              <i>Share the room name to your friends to join you</i>
            </li>
          </small>
        ) : null}
      </div>
      <div className='joinInnerContainer'>
        <h1 className='heading head'>Join Room</h1>
        <div>
          <input
            type='text'
            placeholder='Enter Name(Nickname)'
            className='joinInput'
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter Room Name'
            className='joinInput mt-20'
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chatroom?name=${name}&room=${room}`}
        >
          <button className='button mt-20' type='submit'>
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
