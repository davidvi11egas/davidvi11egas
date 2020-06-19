import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, Row, Col, CardColumns } from "react-bootstrap";

// image imports
import parseroCafe from '../../images/parseroCafe.jpg';
import oishiSushi from '../../images/oishiSushiLogo.jpg';
import skullAndBones from '../../images/skullAndBones.jpg';
import codeNasty from '../../images/codeNasty.jpg';
import sapphireLogo from '../../images/sapphireLogo.jpg';
import dagoBong from '../../images/dagoBong.jpg';

class Creative extends Component {
  render() {
    return (
      <div className="pageContent photographyPage">
        <header className="pageHeader">Creative </header>
        {/* <Container style={{ backgroundColor: "mediumseagreen" }}> */}
          <Container>
          <CardColumns>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={oishiSushi}
              />
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={parseroCafe}
              />
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={skullAndBones}
              />
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={codeNasty}
              />
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={sapphireLogo}
              />
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={dagoBong}
              />
            </Card>
          </CardColumns>
          <br />
        </Container>
      </div>
    );
  }
}

export default Creative;
