import React, { Component } from "react";
import "./About2.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import data from "./ContactData.js";
class About2 extends Component {
    render() {
        return (
            <Container>
                {/* <Navbar /> */}
    

                <Skills />
                <Experience />
                <div>
                    <br/>
                    <br/>
                </div>
            </Container>
        );
    }
}

export default About2;
