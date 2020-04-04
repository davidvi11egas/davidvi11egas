import React, { Component } from "react";
import "./Webdev.css";

class Webdev extends Component {
  render() {
    return (
      <div className="pageContent">
        <header className="pageHeader">WebDev</header>
        <div className="card">
          <div className="card-header">
            <h1>CODE</h1>
          </div>
          <div className="card-body">
                    <img width="100" src="https://www.xmple.com/wallpaper/checkered-blue-squares-white-1920x1080-c2-00bfff-ffffff-l-240-a-60-f-2.svg" alt="sampleWebsite"/>
            <hr></hr>
            <p>
              Making your way in the world today takes everything you've got.
              Taking a break from all your worries, sure would help a lot.
              Wouldn't you like to get away? Sometimes you want to go where
              everybody knows your name, and they're always glad you came. You
              wanna be where you can see, our troubles are all the same. You
              wanna be where everybody knows your name. You wanna go where
              people know, people are all the same, you wanna go where everybody
              knows your name.
            </p>
                    {/*
            <p>
              Man lives in the sunlit world of what he believes to be reality.
              But, there is, unseen by most, an underworld, a place that is just
              as real, but not as brightly lit... a darkside. The darkside is
              always there, waiting for us to enter, waiting to enter us. So
              until next time, try to enjoy the daylight.
            </p>

            <p>
              My bologna has a first name, it's O-s-c-a-r. My bologna has a
              second name, it's M-e-y-e-r. Oh, I love to eat it every day, and
              if you ask me why, I'll say: 'cuz Oscar Meyer has a way with
              b-o-l-o-g-n-a. How's that?
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Webdev;
