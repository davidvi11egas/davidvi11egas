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
        <Navbar />
        <div className="photographyHeader pt-5">
          <h1>Photography</h1>
          <h5>
            The following photos were modified with Photoshop and Lightroom
          </h5>
          <p>
            <a href="/creative">
              <strong>Back to the creative page</strong>
            </a>
          </p>
        </div>
        <hr />
        <Container>
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
        </Container>
        <hr />
        <div className="photographyHeader text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default Photography;
