import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import "./Videos.css";
// component imports
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../../components/Navbar";

class Videos extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <div className="pt-5 videoHeader">
                    <h1 className="videoHeader">Videos</h1>
                    <a href="/creative">
                        Back to the creative page
                    </a>
                    <hr />
                </div>
                <Container>
                    <Row className="d-flex justify-content-center mt-5">
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
                <div className="videoHeader text-center">
                    <a href="/creative">
                        Back to the creative page
                    </a>
                </div>
            </Container>
        );
    }
}

export default Videos;
