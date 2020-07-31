import React, { Component } from "react";
import "./Creative.css";
import { Container, Card,CardColumns } from "react-bootstrap";
import Navbar from '../../components/Navbar';
// image imports
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
     
       
        {/* <Container style={{ backgroundColor: "mediumseagreen" }}> */}
          <Container>
          <Navbar/>
          <h1 className="creativeHeader">Creative Content</h1>
          <div className=" container bodyText">
          <h3>
            I made all of these graphics with my ipad & then used Photoshop and Illustrator to make them even better.
          </h3>
          </div>
          <hr/>
          <CardColumns>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={oishiSushi}
              />
            </Card>
            <card style={{ width: "100%" }}>
              <Card.Img
                // variant="top"
                src={dagoBong}
              />
            </card>            
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
                // variant="top"
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
