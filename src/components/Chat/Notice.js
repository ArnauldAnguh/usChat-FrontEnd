import React from 'react';
// import { WhatsappIcon } from 'react-share';
const Notice = () => {
  return (
    <div className='ui segment advice'>
      <div className='main'>
        <p>
          <i className='user secret icon'></i> <br />
          <b>Attention:</b> Users are advised not to <b>Violate</b> Terms and
          Conditions of a group
        </p>
      </div>
      {/* share : <WhatsappIcon size={32} round={true} /> */}
    </div>
  );
};

export default Notice;
