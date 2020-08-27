import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, CardColumns, Col } from "react-bootstrap";
import Navbar from '../../components/Navbar';


class Creative extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <div className="pt-5">
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
            Most of my graphics begin as hand-drawn pieces. From there I then digitize them with Illustrator.
          </p>
        </div>
        <CardColumns>
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/oishiSushiLogo.jpg"}
            />
          </Card>
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/parseroCafe.jpg"}
            />
          </Card>

          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/skullAndBones.jpg"}
            />
          </Card>
          <card style={{ width: "100%" }}>
            <Card.Img
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/englishMuffin.gif"}
            />
          </card>
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/codeNasty.jpg"}
            />
          </Card>
          <card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/sapphireLogo.jpg"}
            />
          </card>
        </CardColumns>
        <br />
      </Container>

    );
  }
}

export default Creative;
