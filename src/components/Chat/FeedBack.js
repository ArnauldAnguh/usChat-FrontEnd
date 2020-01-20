import React from 'react';

const FeedBack = ({ feedBack, setFeedBackOff }) => {
  return feedBack ? (
    <div className='showFeed'>
      <span className='close' onClick={setFeedBackOff}>
        <i className='times circle outline icon'></i>
      </span>
      <div className='ui segment feedback'>
        <h1>THANKS FOR YOUR FEEDBACK</h1>
        <small>
          <b>
            please <i>SHARE</i> this app link with friends
          </b>
        </small>
   
      </div>
    </div>
  ) : null;
};

export default FeedBack;
