import React from 'react';
import { Player, ControlBar } from 'video-react';
import "./Video.css";


// const Video = props =>  

// <div className="videoHolder">
//     <Player
//       playsInline 
//       muted
//       autoPlay
//       loop
//       poster="/assets/poster.png"
//       src="https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"
//     />
//     </div>
// ;

// export default Video;

// export default props => {
//   return (
//     <Player
//     preLoad
//     autoPlay
//     loop>
//       <source src="https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4" />
//     </Player>
//   );
// };

export default props => {
  return (
    <Player 
    autoPlay 
    loop
    fullscreen
    src="https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4">
      <ControlBar disableCompletely={true} className="my-class" />
    </Player>
  );
};
