import React, { Component } from "react";
import "./Photography.css";
import { Container, Card, CardColumns } from "react-bootstrap";

import apartmentsInCuba from '../../images/apartmentsInCuba.jpg';
import cubanChurch from '../../images/cubanChurch.jpg';
import puertoRicanBeach from '../../images/puertoRicanBeach.jpg';
import yellowApartment from '../../images/yellowApartment.jpg';

class Creative extends Component {
  render() {
    return (
      <div className="pageContent photographyPage">
        <header className="pageHeader">Photography</header>
         <Container>
         
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
      </div>
    );
  }
}

export default Creative;
