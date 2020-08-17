import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, CardColumns } from "react-bootstrap";
import Navbar from '../../components/Navbar';
// image imports
import photoIcon from "../../images/photoIcon.png";
import videoIcon from "../../images/videoIcon.png";
import downArrow from "../../images/downArrow.png";
import parseroCafe from '../../images/parseroCafe.jpg';
import oishiSushi from '../../images/oishiSushiLogo.jpg';
import skullAndBones from '../../images/skullAndBones.jpg';
import codeNasty from '../../images/codeNasty.jpg';
import sapphireLogo from '../../images/sapphireLogo.jpg';
import dagoBong from '../../images/dagoBong.gif';
import englishMuffin from '../../images/englishMuffin.gif';

class Creative extends Component {
  render() {
    return (
      <div className="pageContent photographyPage">


        <Container>
          <Navbar />
          
          <h1 className="creativeHeader">Creative Content</h1>

          <div className="row creativeLinks">

            <a href="/photography">
              <img src={photoIcon} width="55px" alt="link_to_photos" />
                Click here for pics
            </a>
            <br/>
            <a href="/videos">
              <img src={videoIcon} width="55px" alt="link_to_videos" />
                Click here for vids
            </a>
          </div>
          <hr />
          <div className="bodyText" id="graphics">
          <h1><strong>
          My designs are hand-drawn first, then perfected with Illustrator & Photoshop
          </strong></h1>
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
      </div>
    );
  }
}

export default Creative;
