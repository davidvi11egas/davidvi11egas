import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Skills.css";

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <Row lg className="d-inline-flex">
                        <h2 className="sectionHeader">Skills</h2>
                </Row>
                <hr className="thickHR" />
                <br/>
                <Row>
                
                    <div className="d-flex container justify-content-center skillRow">
                        <Col flex md={3}>
                            <h5>
                                <strong>Web Development</strong>
                            </h5>
                            <ul>
                                <li>HTML, CSS, & Bootstrap</li>
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
                                <li>Campaign Management</li>
                                <li>E-Commerce Management</li>
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
                                <strong>Continued</strong>
                            </h5>
                            <ul>
                                <li>Over 5 Years of Management</li>                            
                                <li>Bilingual (Spanish)</li>
                                <li>CRMs (HubSpot)</li>
                                <li>MS Office</li>
                                <li>Trello</li>
                                <li>ConstantContact</li>
                                <li>HootSuite</li>
                                <li>SolidWorks</li>

                            </ul>
                        </Col>
                    </div>
                </Row>

            </div>
        );
    }
}

export default Skills;
