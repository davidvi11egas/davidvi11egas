import React, { Component } from "react";
import "./Home2.css";
import Navbar from "../../components/Navbar";
import data from "../Contact/";
// import droneShot from '../../images/lakeDroneShot.jpg';

class Home2 extends Component {
  render() {
    return (
      <div>
        <div className="videoHolder">
          <video
            id="background-video"
            width="100%"
            autoPlay
            loop
            muted
          >
            <source
              src={
                "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"
              }
              type="video/mp4"
            />
              Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <span className="nameLine">David Villegas</span>
            <Navbar />
          </div>
        </div>
        <div className="mobile">
          <Navbar />
          <p>DAVID VILLEGAS</p>
          <h1>Web Developer</h1>
          <h2>Graphic Design</h2>
          <h3>Marketing</h3>
        </div>
      </div>
    );
  }
}

export default Home2;
