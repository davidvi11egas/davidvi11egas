import React, { Component } from 'react';
import data from './ContactData';
import './Contact.css';
import Navbar from "../../components/Navbar";
import { Container, Col, Row } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <div className="pt-5">
          <h1 className="pageHeader">Contact Me</h1>
          <hr />
        </div>
        <Row center="xs">
          <Col xs>
            <p>
              <ul className="contactLinks">
                <li>
                  <h4>
                    <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href={"https://www.linkedin.com/in/davidvi11egas/"}> Connect on LinkedIn</a>
                  </h4>
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;