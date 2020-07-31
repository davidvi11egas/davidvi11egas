import React, { Component } from "react";
import "./Webdev.css";
import Navbar from "../../components/Navbar";
import visitFlorida from "../../images/visitFlorida.png";
import upPup from "../../images/upPup.png";
import nsbSharks from "../../images/nsbSharks.png";
class Webdev extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <header className="webDevHeader pb-3">WebDev</header>




        <div className="container bodyText">
          <div className="instructions">
          <h4><strong> Click on the title to learn more about the site,</strong></h4>
          <h5>Click on the picture to view the page in a new tab.</h5>
          </div>
          <div className="grid pt-4" id="layout">
            <section>
              <div className="websiteName">
              <h1><a href="#visitFlorida" data-toggle="collapse" aria-expanded="false" className="siteText"
                aria-controls="visitFlorida">Florida</a></h1>
                </div>
              <div className="collapse" id="visitFlorida">
                <h1>
                This page is fully responsive & built with just HTML, CSS, and Bootstrap
									</h1>
              </div>
              <a href="https://davidvi11egas.github.io/visit_florida/" target="_blank" rel="noopener noreferrer">
                <img src={visitFlorida} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>
            <br/>
            <section id="lists">
            <div className="websiteName">
              <h3><a href="#nsbSharks" data-toggle="collapse" aria-expanded="false" className="siteText"
                aria-controls="nsbSharks">New Smyrna Beach Sharks</a></h3>
                </div>
              <div className="collapse" id="nsbSharks">
                <h1>
                  NSB Sharks is a React app hosted on AWS Amplify
									</h1>
              </div>
              <a href="https://www.newsmyrnasharks.com/" target="_blank" rel="noopener noreferrer">
                <img src={nsbSharks} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>    
            <br/>          
            <section id="lists">
            <div className="websiteName">
              <h3><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false" className="siteText"
                aria-controls="collapseMenu5">Up Pup</a></h3>
                </div>
              <div className="collapse" id="collapseMenu5">
                <h1>
                  Responsive HTML & CSS
									</h1>
              </div>
              <a href="https://master.d35odzy1irc8uc.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={upPup} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>
          



          </div>
        </div>





      </div>




    );
  }
}

export default Webdev;
