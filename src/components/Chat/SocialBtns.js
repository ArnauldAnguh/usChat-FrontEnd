import React from 'react';
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton
} from 'react-share';

const SocialMediaButtons = props => (
  <div>
    <FacebookShareButton
      url={props.url}
      quote={
        (props.text, ` {'\u2728'} <br>(Join Me in ROOM NAME: ${props.room})`)
      }
    >
      <FacebookIcon size={28} round={true} />
    </FacebookShareButton>
    <WhatsappShareButton
      url={props.url}
      title={
        (props.text, ` {'\u2728'} <br>(Join Me in ROOM NAME: ${props.room})`)
      }
    >
      <WhatsappIcon size={28} round={true} />
    </WhatsappShareButton>
  </div>
);

export default SocialMediaButtons;
