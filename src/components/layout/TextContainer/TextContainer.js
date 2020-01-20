import React from 'react';

const TextContainer = ({ users, user, setFeedBackOn }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>
          <i className='users icon'></i>Room Users
        </div>
        {users ? (
          <div className='ui list names'>
            {users.map(({ name }) => {
              return (
                <div className='activeUser' key={name}>
                  <p className='items'>
                    {name}
                    <i
                      className='circle filled icon'
                      style={{
                        float: 'right',
                        fontSize: '10px',
                        color: 'green'
                      }}
                    ></i>
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className='extra content'>
        Rate us:
        <i className='star outline icon' onClick={setFeedBackOn}></i>
        <i className='star outline icon' onClick={setFeedBackOn}></i>
        <i className='star outline icon' onClick={setFeedBackOn}></i>
        <i className='star outline icon' onClick={setFeedBackOn}></i>
        <i className='star outline icon' onClick={setFeedBackOn}></i>
      </div>
    </div>
  );
};

export default TextContainer;
