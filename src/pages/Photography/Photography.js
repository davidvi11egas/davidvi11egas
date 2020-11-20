import React, { Component } from "react";
import "./Photography.css";
// component imports
import { Container, Card } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

class Photography extends Component {
  render() {
    return (
      <Container>
        {/* <div className="photographyHeader pt-5">
          <h1>Photography</h1>
        </div>
        <hr /> */}
        <div>

          <div className="bodyText pb-2 justify-text" id="graphics">
        <br/>
          <p>
          The following photos were modified with Photoshop and Lightroom
          </p>
          <br/>
          <hr />
        </div>
        <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/HOWT4335.jpeg"}
            />
          </Card>
          <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/guatalahara.jpg"}
            />
          </Card>          
          <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/lakeDroneShot.jpg"}
            />
          </Card>
          <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/apartmentsInCuba.jpg"}
            />
          </Card>
          <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/cubanChurch.jpg"}
            />
          </Card>
          <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/puertoRicanBeach.jpg"}
            />
          </Card>
          <Card style={{ width: "inherit" }} border="light">
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/favelasInTheValley_1.gif"}
            />
          </Card>
        </div>
        <hr />

        {/* <Footer /> */}
      </Container>
    );
  }
}

export default Photography;
