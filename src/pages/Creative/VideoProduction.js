import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar";

class Videos extends Component {
    render() {
        return (
                <Container className="pt-4 p-0">
    <h2><strong>Video Production</strong></h2>
      <div className="bodyText pb-2 text-justify" id="graphics">
        <p>
            David has over 10 years of experience in capturing, editing, and implementing videos. With video marketing becoming ever more dominant in digital marketing, it is crucial to have someone on your marketing team with these skills.
        </p>
        <hr />
      </div>               
                    <Row className="d-flex justify-content-center mt-5">
                        <Col sm={8}>
                            <ReactPlayer
                                url="https://youtu.be/N3YUDcv4ctY"
                                controls
                                width="100%"
                            />
                        </Col>
                        <Col md="auto" className="pt-3">
                            <p>
                                <h5 id="movaGlobeText">
                                    This clip was filmed in collaboration with{" "}
                                    <a href="https://www.instagram.com/enjillneer" target="_blank">
                                        {" "}
                                        Enjillneer{" "}
                                    </a>
                                    for{" "}
                                    <a href="https://www.movaglobes.com/stayhomesciencefair" target="_blank">
                                        {" "}
                                        Mova Globe's Stay Home Science Fair
                                    </a>
                                </h5>
                            </p>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default Videos;
