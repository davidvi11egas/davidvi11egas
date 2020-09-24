import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../../components/Navbar";

import "./Webdev.css";

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
        <div className="bodyText mt-4">
          <Container>
            <Row>
            <Col md={6}>
                <section>
                  <div className="websiteName">
                    <h4><strong><a href="#dagobong" data-toggle="collapse" aria-expanded="false" className="siteText"
                      aria-controls="dagobong">DagoBong Vintage Clothing Shop</a></strong></h4>
                  </div>
                  <div className="collapse" id="dagobong">
                    <p>
                    <ul>
                        <li> Fully Functional E-Commerce Website</li>
                        <li> Owned & operated by David & Matthew Villegas</li>
                        <li> Built with Wordpress</li>
                        <li> Sales made with WooCommerce </li>
                        <li> Hosted on Amazon Web Services </li>
                      </ul>
									</p>
                  </div>
                  <a href="https://dagobong.com" target="_blank" rel="noopener noreferrer">
                    <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/dagobongScreenshot.png"} width="100%"
                      alt="Dagobong Vintage Clothing" />
                  </a>
                </section>
              </Col>            
              <Col md={6}>
                <section>
                  <div className="websiteName">
                    <h4><strong><a href="#visitFlorida" data-toggle="collapse" aria-expanded="false" className="siteText"
                      aria-controls="visitFlorida">Florida</a></strong></h4>
                  </div>
                  <div className="collapse" id="visitFlorida">
                    <p>
                    <ul>
                        <li> Full Responsive</li>
                        <li> HTML 5 </li>
                        <li> CSS </li>
                        <li> Bootstrap </li>
                        <li> Hosted on AWS </li>
                      </ul>
									</p>
                  </div>
                  <a href="https://davidvi11egas.github.io/visit_florida/" target="_blank" rel="noopener noreferrer">
                    <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/visitFlorida.png"} width="100%"
                      alt="Cocoa Beach Florida" />
                  </a>
                </section>
              </Col>
              {/* <Col md={6}>
                <section>
                  <div className="websiteName">
                    <h4><strong><a href="#nsbSharks" data-toggle="collapse" aria-expanded="false" className="siteText"
                      aria-controls="nsbSharks">New Smyrna Beach Sharks</a></strong></h4>
                  </div>
                  <div className="collapse" id="nsbSharks">
                  <ul>
                        <li> Full Responsive</li>
                        <li> React.js </li>
                        <li> CSS </li>
                        <li> react-bootstrap </li>
                        <li> Hosted on AWS </li>
                      </ul>
                  </div>
                  <a href="https://www.newsmyrnasharks.com/" target="_blank" rel="noopener noreferrer">
                    <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/nsbSharks.png"} width="100%"
                      alt="Cocoa Beach Florida" />
                  </a>
                </section>
              </Col> */}
            {/* </Row> */}
            <br />
            {/* <Row> */}
              <Col md={6}>
                <section id="lists">
                  <div className="websiteName">
                    <h4><strong><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false" className="siteText"
                      aria-controls="collapseMenu5">Up Pup</a></strong></h4>
                  </div>
                  <div className="collapse" id="collapseMenu5">
                    <p>
                      <ul>
                        <li> Full Responsive</li>
                        <li> HTML 5 </li>
                        <li> CSS </li>
                        <li> Bootstrap </li>
                        <li> Hosted on AWS </li>
                      </ul>
									</p>
                  </div>
                  <a href="https://master.d35odzy1irc8uc.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/upPup.png"} width="100%"
                      alt="UpPup" />
                  </a>
                </section>
              </Col>
              <Col md={6}>
                <section id="lists">
                  <div className="websiteName">
                    <h4><strong><a href="#collapseMenu6" data-toggle="collapse" aria-expanded="false" className="siteText"
                      aria-controls="collapseMenu5">Email Marketing</a></strong></h4>
                  </div>
                  <div className="collapse" id="collapseMenu6">
                    <p>
                    This email marketing page was written with email marketing campaigns in mind.
                    This means the body is table based, and all styling occurs in-line.
									</p>
                  </div>
                  <a href="https://davidvi11egas.github.io/email_marketing_sample/" target="_blank" rel="noopener noreferrer">
                    <img src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/email_marketing.png"} width="100%"
                      alt="UpPup" />
                  </a>
                </section>

              </Col>
            </Row>
          </Container>

        </div>
      </div>
    );
  }
}

export default Webdev;
