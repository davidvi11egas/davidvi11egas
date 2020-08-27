import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, CardColumns,Col } from "react-bootstrap";
import Navbar from '../../components/Navbar';
// image imports
import photoIcon from "../../images/photoIcon.png";
import videoIcon from "../../images/videoIcon.png";
// import downArrow from "../../images/downArrow.png";
import parseroCafe from '../../images/parseroCafe.jpg';
import oishiSushi from '../../images/oishiSushiLogo.jpg';
import skullAndBones from '../../images/skullAndBones.jpg';
import codeNasty from '../../images/codeNasty.jpg';
import sapphireLogo from '../../images/sapphireLogo.jpg';
// import dagoBong from '../../images/dagoBong.gif';
import englishMuffin from '../../images/englishMuffin.gif';

class Creative extends Component {
  render() {
    return (
 


        <Container>
          <Navbar />
          <div className="pt-4">
          <h1 className="creativeHeader">Creative Content</h1>
          </div>
          <div className="row creativeLinks">
          <Col>
            <a href="/photography">
                Photos
            </a>|
            <a href="/videos">
               <strong>Videos</strong>
            </a>
            </Col>
          </div>
          <hr />
          <div className="bodyText" id="graphics">
          <p>
          
          My designs are hand-drawn first, then perfected with Illustrator & Photoshop
          </p>
          </div>
          <CardColumns>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={oishiSushi}
              />
            </Card>
          {/* <card style={{ width: "100%" }}>
              <Card.Img
                src={dagoBong}
              />
            </card> */}
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={parseroCafe}
              />
            </Card>

            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={skullAndBones}
              />
            </Card>
            <card style={{ width: "100%" }}>
              <Card.Img
                src={englishMuffin}
              />
            </card>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={codeNasty}
              />
            </Card>
            <card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={sapphireLogo}
              />
            </card>
          </CardColumns>
          <br />
        </Container>

    );
  }
}

export default Creative;
