import React, { Component } from "react";
import "./Home.css";
import { Row, Col } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div className="container pageContent">
        <div id="homePage">
          <Row className="row justify-content-md-center">
            <div className="tagLineBox">
              <p className="tagLineText"> David Villegas </p>
              <p className="tagLineText"> Digital Marketing </p>
              <p className="tagLineText"> Web Development </p>
              <p className="tagLineText"> graphic design </p>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
