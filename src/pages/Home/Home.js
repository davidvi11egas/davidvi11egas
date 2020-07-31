import React, { Component } from "react";
import "./Home.css";
import { Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';
import fireWorks from '../../images/fireWorks1.mp4';

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
            {/* <video id="background-video" width="100%" loop autoPlay muted> */}
              {/* <source src={fireWorks} type="video/mp4"/> */}
              {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
              {/* Your browser does not support the video tag. */}
          {/* </video>             */}

          </Row>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
