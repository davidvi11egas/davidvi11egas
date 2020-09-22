import React, { Component } from "react";
import "./Marketing.css";
// component imports
// import { Container, Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// photo imports
import slimKitty from '../../images/slim_kitty.png';


class Marketing extends Component {
  render() {
    return (
      <Container>


        <Navbar/>
        <div className="photographyBodyText text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
      </div>
          <h1 className="marketingHeader">Marketing</h1>
          <div className=" container photographyBodyText">
          <h5>
            Cat food product graphic created with inDesign 
          </h5>
          </div>
          <hr/>
         <Container>
          <Card style={{ width: "50%" }} border="light">
              <Card.Img
                variant="top"
                src={slimKitty}
                height=""
              />
            </Card>  
        
          

        </Container>
        <hr/>
        <div className="photographyBodyText text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
      </div>
        <Footer/>
        
      </Container>
    );
  }
}

export default Marketing;
