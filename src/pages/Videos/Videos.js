import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import "./Videos.css";
// component imports
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import { Grid, Row, Col } from 'react-flexbox-grid';

class Videos extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <div className="pt-4">
                <h1 className="videoHeader">Videos</h1>
                <hr />
                </div>

                <Container>
                    <Row className="d-flex justify-content-center mt-2">
                        <Col md="auto">
                            <ReactPlayer
                                url="https://youtu.be/N3YUDcv4ctY"
                                controls
                            />
                        </Col>
                        <Col md="auto" className="pt-3">
                            <p>
                                <h5 id="movaGlobeText">
                                    This clip was filmed in collaboration with{" "}
                                    <a href="https://www.instagram.com/enjillneer">
                                        {" "}
                                        Enjillneer{" "}
                                    </a>
                                    for{" "}
                                    <a href="https://www.movaglobes.com/stayhomesciencefair">
                                        {" "}
                                        Mova Globe's Stay Home Science Fair
                                    </a>
                                </h5>
                            </p>
                        </Col>
                    </Row>
                </Container>



                <hr />
                <div className="videoBodyText text-center">
                    <a href="/creative">
                        <strong>Back to the creative page.</strong>
                    </a>
                </div>
                <Footer />
            </Container>
        );
    }
}

export default Videos;
