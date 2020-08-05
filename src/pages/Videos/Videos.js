import React, { Component } from "react";
import ReactPlayer from 'react-player/lazy';
import "./Videos.css";
// component imports
import { Container, Card, Grid, Col, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import { Grid, Row, Col } from 'react-flexbox-grid';


class Videos extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <div className="videoBodyText text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
        </div>
        <h1 className="videoHeader">Videos</h1>
        <div className=" container photographyBodyText">
          <h5>
            My Videos
          </h5>
        </div>
        <hr />
        <Container>
          <Row center="xs">
          
            <ReactPlayer url="https://youtu.be/N3YUDcv4ctY"
            controls
            />
         
            <Col xs>
            <p>
            <h5 id="movaGlobeText">
              I shot this clip with 2 iphones and a drone. Then used Adobe Premier for editing.
              In collaboration with <a href="https://www.instagram.com/enjillneer"> Enjillneer </a>
              for <a href="https://www.movaglobes.com/stayhomesciencefair"> Mova Globe's Stay Home Science Fair</a>
              </h5>
            </p>
            </Col>
          </Row>
        </Container>
        <hr />
        <div className="videoBodyText text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default Videos;
