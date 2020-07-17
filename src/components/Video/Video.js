import React from 'react';
import { Player } from 'video-react';

const Video = props =>  


    <Player
      playsInline 
      Muted
      autoPlay
      Loop
      poster="/assets/poster.png"
      src="https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"
    />
;

export default Video;