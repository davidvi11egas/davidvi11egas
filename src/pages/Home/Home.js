import React, { Component } from "react";
import "./Home.css";
import { Row, Col } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div className="pageContent">
        <Row id="row">
    
          <img className="bioPic" src={require("../../images/davidFullBody.jpg")} alt="david_villegas_photo" />
          <div className= "tagLineBox">
            <p className="tagLineText"> david villegas </p>
            <p className="tagLineText"> web development</p>
            <p className="tagLineText"> marketing </p>
            <p className="tagLineText"> graphic design </p>
            {/* <img className="bioPic" src={require("../../images/davidFullBody.jpg")} alt="david_villegas_photo" /> */}
          </div>
        
        </Row>
      </div>
    );
  }
}

export default Home;
