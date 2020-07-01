import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, Row, Col, CardColumns } from "react-bootstrap";
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
      <Navbar/>
       
        {/* <Container style={{ backgroundColor: "mediumseagreen" }}> */}
          <Container>
          <h1 className="pageHeader">Creative </h1>
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
