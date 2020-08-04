import React, { Component } from "react";
import "./Home2.css";
import Navbar from '../../components/Navbar';
import data from "../Contact/";
// import droneShot from '../../images/lakeDroneShot.jpg';



class Home2 extends Component {
  render() {
    return (

      <div>

        <div className="videoHolder">
          <video id="background-video" width="100%" autoPlay loop  muted >
            <source src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <span id="nameLine">David Villegas</span>

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
{/*     
        <section className="footer_banner justify-content-md-center" id="contact">
          <div className="button">
          <a href={`mailto:${data.contactEmail}`} className='email'>Contact Me</a></div>
          <div className="iconBar">
            <img src={"https://img.icons8.com/color/60/000000/html-5.png"} alt="html5" />
            <img src={"https://img.icons8.com/color/60/000000/css3.png"} alt="css" />
            <img src={"https://img.icons8.com/color/60/000000/javascript.png"} alt="javascript" />
            <img src={"https://img.icons8.com/color/60/000000/react-native.png"} alt="react" />
            <img src={"https://img.icons8.com/color/60/000000/python.png"} alt="python" />
            <img src={"https://img.icons8.com/officel/60/000000/php-logo.png"} alt="php" />
            <img src={"https://img.icons8.com/windows/60/000000/amazon-web-services.png"} alt="aws" />
            <img src={"https://img.icons8.com/color/60/000000/google-ads.png"} alt="googleAds" />
            <img src={"https://img.icons8.com/fluent/60/000000/visual-studio-code-2019.png"} alt="vsCode" />
            <img src={"https://img.icons8.com/fluent/60/000000/github.png"} alt="github" />
            <img src={"https://img.icons8.com/fluent/60/000000/adobe-photoshop.png"} alt="photoshop" />
            <img src={"https://img.icons8.com/color/60/000000/adobe-illustrator.png"} alt="illustrator" />
            <img src={"https://img.icons8.com/fluent/60/000000/adobe-dreamweaver.png"} alt="dreamweaver" />
            <img src={"https://img.icons8.com/fluent/60/000000/adobe-premiere-pro.png"} alt="premier" />
            <img src={"https://img.icons8.com/color/60/000000/adobe-creative-cloud.png"} alt="adobeCC" />
          </div>
        </section> */}
        {/* <div className="copyright">&copy;2020- <strong>David Villegas</strong></div> */}
      </div>
    )
  }
}

export default Home2;