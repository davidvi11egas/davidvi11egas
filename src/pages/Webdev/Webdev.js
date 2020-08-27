import React, { Component } from "react";
import "./Webdev.css";
import Navbar from "../../components/Navbar";



class Webdev extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="webDevHeader pt-5">
          <h1> Web Development </h1>
          <h5>
            <strong>Click on the title to learn more about the site | </strong>
            Click on the picture to view the page in a new tab.
          </h5>
          <hr />
        </div>
        <div className="bodyText">
          <div className="grid pt-5" id="layout">
            <section>
              <div className="websiteName">
                <h4><strong><a href="#visitFlorida" data-toggle="collapse" aria-expanded="false" className="siteText"
                  aria-controls="visitFlorida">Florida</a></strong></h4>
              </div>
              <div className="collapse" id="visitFlorida">
                <p>
                  This page is fully responsive & built with just HTML, CSS, and Bootstrap
									</p>
              </div>
              <a href="https://davidvi11egas.github.io/visit_florida/" target="_blank" rel="noopener noreferrer">
                <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/visitFlorida.png"} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>
            <br />
            <section id="lists">
              <div className="websiteName">
                <h4><strong><a href="#nsbSharks" data-toggle="collapse" aria-expanded="false" className="siteText"
                  aria-controls="nsbSharks">New Smyrna Beach Sharks</a></strong></h4>
              </div>
              <div className="collapse" id="nsbSharks">
                <p>
                  NSB Sharks is a React app hosted on AWS Amplify
									</p>
              </div>
              <a href="https://www.newsmyrnasharks.com/" target="_blank" rel="noopener noreferrer">
                <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/nsbSharks.png"} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>
            <br />
            <section id="lists">
              <div className="websiteName">
                <h4><strong><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false" className="siteText"
                  aria-controls="collapseMenu5">Up Pup</a></strong></h4>
              </div>
              <div className="collapse" id="collapseMenu5">
                <p>
                  Responsive HTML & CSS
									</p>
              </div>
              <a href="https://master.d35odzy1irc8uc.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/upPup.png"} width="100%"
                  alt="UpPup" />
              </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Webdev;
