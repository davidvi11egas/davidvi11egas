import React, { Component } from "react";
import "./About.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import aboutMePic from "../../images/headShot.jpg";
// import skills from "../../images/skills.png";
import Skills from "./Skills.js";
import Experience from "./Experience.js";

class About extends Component {
    render() {
        return (
            <Container>
                <div id="top"></div>
                <Navbar />
           
                <Container className="pt-5">
                    <Row className="d-flex justify-content-center">
                        <Col md="4" id="imageCol">
                            <img
                                src={aboutMePic}
                                width="90%"
                                className="profilePhoto"
                                alt="davidBioPhoto"
                            />
                        </Col>
                        <Col md="8">
                            <div className="profileHeader">
                                <h1>David Villegas</h1>
                                <h2>
                                    <strong>Web Developer |</strong> Content
                                    Creator
                                </h2>
                                <h2>
                                    {" "}
                                    &
                                    <strong>
                                        {" "}
                                        Digital Marketing Professional
                                    </strong>
                                </h2>
                                <p>
                                    <h5>
                                        <hr />
                                        Hello, and welcome to my website! My
                                        name is David Villegas, and I’ve created
                                        this page to showcase some of my talent,
                                        experience, and for you to get to know
                                        me a little better. If you would like to
                                        read more about me - scroll down. If
                                        you'd prefer to skip straight to my
                                        professional resume,{" "}
                                        <a href="#resume" id="resumeLink">
                                            Click Here.
                                        </a>
                                    </h5>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <section className="banner">
                    <h2 className="parallax">
                        <u>
                            <strong></strong>
                        </u>
                    </h2>
                    <div className="parallax_description justify-justify">
                        <h4>
                            <strong>About Me</strong>
                        </h4>
                        <p>
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
                    </div>
                    {/* <div className="parallax_description justify-justify">
                        <h4>
                            <strong>Professional History</strong>
                        </h4>
                        <h5>
                            David's career began in Miami Florida with an
                            internship at Emmy Award-winning studio,{" "}
                            <a
                                href="https://www.thekitchen.tv/"
                                rel="noopener noreferrer"
                                link="_blank"
                            >
                                The Kitchen
                            </a>
                            . Where most of his day was spent in ProTools
                            editing dialogue for film overdubs. At night David
                            promoted events at Miami's most iconic
                            venues such as{" "}
                            <a
                                href="https://www.livnightclub.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LIV
                            </a>
                            ,{" "}
                            <a
                                href="https://www.sbe.com/hotels/sls-hotels/south-beach"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SLS
                            </a>
                            , and{" "}
                            <a
                                href="https://www.clubspace.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Club Space
                            </a>
                            .
                        </h5>
                    </div> */}
                </section>
                    <Row>
                    <div id="resume"></div>
                        <Col className="mt-5 mb-5">
                        <span>
                            
                            <h1 id="resumeTitle">
                                David Villegas | Orlando, FL
                               
                            </h1>
                          
                            </span>
                            <h3>
                            Digital Marketing | Web Development | Creative Content
                            </h3>
                            <hr />

                            <h5>
                                <a
                                href="https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/david_villegas_resume_8.2020.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                View the printable PDF
                                </a>
                            </h5>
                        </Col>

                    </Row>
                    <Skills />
                    <Experience />
                    <Row>
                        <Col id="btt">
                            <a href="#top">
                                <strong>Back To Top</strong>
                            </a>
                        </Col>
                    </Row>
                    <Footer />
            </Container>
        );
    }
}

export default About;
