import React, { Component } from "react";
import "./About2.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Skills from "./Skills.js";
import Experience from "./Experience.js";

class About2 extends Component {
    render() {
        return (
            <Container>
                <Navbar />
    
                <Row>
                    {/* <div id="resume"></div> */}
                    <Col>
                        <div className="pt-5">
                            <h1>
                                <strong>
                                    David Villegas
                                </strong>
                            </h1>
                        </div>
                        <h5>
                            Digital Marketer | Web Developer | Creative Designer
                            </h5>
                        <hr />
                        <p id="personalBio">
                            Born in Medellin Colombia, then raised in Central
                            Florida, David Villegas pulls inspiration from the
                            spirit and culture of the places that raised him.
                            With extensive knowledge in a variety of industries
                            such as web development, marketing, graphic design,
                            and music production, David has the skills needed to
                            take your any idea and make it into reality. With an
                            eye for captivating design, love for technology, and
                            a mind overflowing with creativity; David Villegas
                            delivers innovation, quality and accuracy in web
                            development, creative production, and digital
                            marketing.Never stop learning, because life never
                            stops teaching.
                        </p>
                    </Col>

                </Row>
                <Skills />
                <Experience />

                <Footer />
            </Container>
        );
    }
}

export default About2;
