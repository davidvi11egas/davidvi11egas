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
          <h4><strong> Click on the title to learn more about the site</strong></h4>
          <h5>Click on the picture to visit the website</h5>
          </div>
          <div className="grid" id="layout mt-4">
            <section className="websiteName">
              <h3><a href="#visitFlorida" data-toggle="collapse" aria-expanded="false" className="siteText"
                aria-controls="visitFlorida">Florida</a></h3>
              <div className="collapse" id="visitFlorida">
                <p className="dropDownText">
                  Responsive HTML & CSS
									</p>
              </div>
              <a href="https://davidvi11egas.github.io/visit_florida/" target="_blank" rel="noopener noreferrer">
                <img src={visitFlorida} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>
            <section id="lists">
              <h3><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false"
                aria-controls="collapseMenu5">Up Pup</a></h3>
              <div className="collapse" id="collapseMenu5">
                {/* <div className="card"> */}
                <p>
                  Responsive HTML & CSS
									</p>
                {/* </div> */}
              </div>
              <a href="https://www.newsmyrnasharks.com/" target="_blank" rel="noopener noreferrer">
                <img src={nsbSharks} width="100%"
                  alt="Cocoa Beach Florida" />
              </a>
            </section>              
            <section id="lists">
              <h3><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false"
                aria-controls="collapseMenu5">Up Pup</a></h3>
              <div className="collapse" id="collapseMenu5">
                {/* <div className="card"> */}
                <p>
                  Responsive HTML & CSS
									</p>
                {/* </div> */}
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
