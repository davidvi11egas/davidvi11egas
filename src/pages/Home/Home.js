import React, { Component } from "react";
import "./Home.css";
import { Row, Col } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div className="container pageContent">
        <div id="homePage">
          <Row className="row justify-content-md-center">
            <img className="bioPic" src={require("../../images/davidFullBody.jpg")} alt="david_villegas_photo" />
            <div className="tagLineBox">
              <p className="tagLineText" id="name"> david villegas </p>
              <p className="tagLineText"> digital marketing</p>
              <p className="tagLineText"> web developer </p>
              <p className="tagLineText"> graphic designer </p>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
