import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import skills from "../../images/skills.png";
import "./Skills.css";
// import SkillsIconBar from "../../components/SkillsIconBar";

class Skills extends Component {
    render() {
        return (
            <Container className="skills">
                <Row lg className="d-inline-flex">
                    <Col>
                        <h2 className="sectionHeader">Skills</h2>
                    </Col>
                </Row>
                <Row>
                    <Container className="d-flex justify-content-center skillRow">
                        <Col flex md={3}>
                            <h5>
                                <strong>Web Development</strong>
                            </h5>
                            <ul>
                                <li>HTML5, CSS, & Bootstrap</li>
                                <li>Javascript</li>
                                <li>WordPress</li>
                                <li>Node.js</li>
                                <li>React.js</li>
                                <li>PHP</li>
                                <li>Amazon Web Services</li>
                                <li>GitHub</li>
                            </ul>
                        </Col>

                        <Col md={3}>
                            <h5>
                                <strong>Marketing</strong>
                            </h5>
                            <ul>
                                <li>Consultation</li>
                                <li>Campaign Design</li>
                                <li>Google Ads</li>
                                <li>PPC</li>
                                <li>Email Marketing</li>
                                <li>Social Media</li>
                                <li>Keyword Research</li>
                                <li>Copywriting</li>
                            </ul>
                        </Col>

                        <Col md={3}>
                            <h5>
                                <strong>Creative Content</strong>
                            </h5>
                            <ul>
                                <li>Illustration</li>
                                <li>Photography</li>
                                <li>Cinematography</li>
                                <li>Photoshop</li>
                                <li>Indesign</li>
                                <li>Illustrator</li>
                                <li>Adobe Premier</li>
                                <li>After Effects</li>


                            </ul>
                        </Col>

                        <Col md={3}>
                            <h5>
                                <strong>Extra</strong>
                            </h5>
                            <ul>
                                <li>Management Experience</li>                            
                                <li>Bilingual (Spanish)</li>
                                <li>CRMs (HubSpot)</li>
                                <li>MS Office</li>
                                <li>Trello</li>
                                <li>ConstantContact</li>
                                <li>HootSuite</li>
                                <li>SolidWorks</li>

                            </ul>
                        </Col>
                    </Container>
                </Row>

            </Container>
        );
    }
}

export default Skills;
