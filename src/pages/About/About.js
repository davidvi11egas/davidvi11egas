import React, { Component } from "react";
import "./About.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import aboutMePic from "../../images/headShot.jpg";
// import skills from "../../images/skills.png";
import SkillsIconBar from "../../components/SkillsIconBar";
import Skills from "./Skills.js";
import Experience from "./Experience.js";

class About extends Component {
    render() {
        return (
            <Container className="masterContainer">
                <div id="top"></div>
                <Navbar />
                <br />
                <Row className="d-flex justify-content-center mt-2">
                    <Col
                        md="4"
                        height="100%"
                        width="100%"
                        className="d-inline-flex"
                        id="imageCol"
                    >
                        <img
                            src={aboutMePic}
                            width="100%"
                            className="profilePhoto"
                            alt="davidBioPhoto"
                        />
                    </Col>
                    <Col md="8">
                        <div className="profileHeader">
                            <h1>David Villegas</h1>
                            <h2>
                                <strong>Web Developer |</strong> Content Creator
                            </h2>
                            <h2>
                                {" "}
                                &
                                <strong> Digital Marketing Professional</strong>
                            </h2>

                            <h3>
                                <hr />
                                With an eye for captivating design, love for
                                technology, and a mind overflowing with
                                creativity; David Villegas delivers innovation,
                                quality and accuracy in web development,
                                creative production, and digital marketing.{" "}
                                <a href="#resume" id="resumeLink">
                                    View My Resume
                                </a>
                            </h3>
                        </div>
                    </Col>
                </Row>
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
                        <h5>
                            Born in Medellin Colombia, then raised in Central
                            Florida, David Villegas pulls inspiration from the
                            spirit and culture of the places that raised him.
                            With extensive knowledge in a variety of industries
                            such as web development, marketing, graphic design,
                            and music production, David has the skills needed to
                            take your any idea and make it into reality. Never
                            stop learning, because life never stops teaching.
                        </h5>
                    </div>
                    <div className="parallax_description justify-justify">
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
                            promoted musical performances at Miami's most iconic
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
                    </div>
                </section>

                <Container id="resume">
                    <Row>
                        <Col>
                            <h1 className="pageHeader" id="resumeTitle">
                                David Villegas |
                                Orlando, FL
                            </h1>
                            <Container>
                            
                                <h6>
                                    {" "}
                                    <a
                                        href="https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/david_villegas_resume_8.2020.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View the printable PDF
                                    </a>{" "}
                                </h6>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Skills />
                
                <Experience />

                <br></br>
                <Container>
                    <Row>
                        <Col id="btt">
                            <a href="#top">
                                <strong>Back To Top</strong>
                            </a>
                        </Col>
                    </Row>
                    <SkillsIconBar/>
                </Container>
                <Footer />
            </Container>
        );
    }
}

export default About;
