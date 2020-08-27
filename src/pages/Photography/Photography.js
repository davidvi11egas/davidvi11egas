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
          <h6>
            <a href="/creative">
              Back to the creative page
            </a>
          </h6>
        </div>
        <hr />
        <div>
        <h5 id="photoPageBlurb">
            The following photos were modified with Photoshop and Lightroom
          </h5>
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
        <div className="text-center backToCreativeLink" >
          <a href="/creative">
            Back to the creative page
          </a>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default Photography;
