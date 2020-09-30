import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
// import {EastCoastSurfer as src} from "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/EastcoastSurferLogo.png";
const GraphicDesign = () => (
    
    <Container className="pt-4 p-0">
    <h2><strong>Graphic Design</strong></h2>
      
        <div className="bodyText pb-2 justify-text" id="graphics">
          <p>
            Graphic Designs begin as hand drawn sketches. From there, they are converted to vector images using Adobe Illustrator.
            From there, designs are then brought into Adobe Photoshop for any additional editing. 
          </p>
          <hr />
        </div>

        <CardColumns>
        <Card style={{  border:"none" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/EastcoastSurferLogo.png"}
            />
          </Card>        
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