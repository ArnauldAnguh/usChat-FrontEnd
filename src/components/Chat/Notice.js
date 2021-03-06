import React from 'react';
import SocialMediaButtons from './SocialBtns';
const Notice = ({ showNotice, toggleOffNotice, room }) => {
  const url = 'dreamy-archimedes-7da915.netlify.com/';
  return showNotice ? (
    <div className='overlay'>
      <span className='close' onClick={toggleOffNotice}>
        <i className='times circle outline icon'></i>
      </span>
      <div className='ui segment advice'>
        <div className='main'>
          <p>
            <i className='user secret icon'></i> <br />
            <b>Attention:</b> Users are advised not to <b>Violate</b> Terms and
            Conditions of a group
          </p>
        </div>
        <hr />
        <div
          style={{
            width: '100%',
            textAlign: 'center'
          }}
        >
          <span>{'\u2728'}share on:</span>
          <br></br>
          <SocialMediaButtons
            url={url}
            text='Hey, Lets Chat on'
            room={room}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Notice;
