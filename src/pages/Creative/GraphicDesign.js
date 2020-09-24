import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
const GraphicDesign = () => (
    
    <Container className="pt-5">
    <h1>Graphic Design</h1>
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

export default GraphicDesign;