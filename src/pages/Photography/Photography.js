import React, { Component } from "react";
import "./Photography.css";
// component imports
import { Container, Card} from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// photo imports
import apartmentsInCuba from '../../images/apartmentsInCuba.jpg';
import cubanChurch from '../../images/cubanChurch.jpg';
import puertoRicanBeach from '../../images/puertoRicanBeach.jpg';
import yellowApartment from '../../images/yellowApartment.jpg';
import lakeDrownShot from '../../images/lakeDroneShot.jpg';

class Photography extends Component {
  render() {
    return (
      <Container>


        <Navbar/>
          <h1 className="photographyHeader">Photography</h1>
          <div className=" container photographyBodyText">
          <h5>
            I took these photos with an iPhone, then used Light Room & Photoshop to edit them.
          </h5>
          </div>
          <hr/>
         <Container>
          <Card style={{ width: "inherit" }} border="light">
              <Card.Img
                variant="top"
                src={lakeDrownShot}
              />
            </Card>  
            <Card style={{ width: "inherit" }} border="light">
              <Card.Img
                variant="top"
                src={apartmentsInCuba}
              />
            </Card>
            <Card style={{ width: "inherit" }} border="light">
              <Card.Img
                variant="top"
                src={cubanChurch}
              />
            </Card>
            <Card style={{ width: "inherit" }} border="light">
              <Card.Img
                variant="top"
                src={puertoRicanBeach}
              />
            </Card>
            <Card style={{ width: "inherit" }} border="light">
              <Card.Img
                variant="top"
                src={yellowApartment}
              />
            </Card>
          

         
      
        </Container>
        <Footer/>
      </Container>
    );
  }
}

export default Photography;
