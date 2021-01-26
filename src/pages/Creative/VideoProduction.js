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
      <div className="bodyText pb-2 text-justify" id="graphics">
      <br/>
        <p>
            David has over 8 years of experience in capturing, editing, and implementing videos. With video marketing becoming ever more dominant in digital marketing, it is crucial to have someone on your marketing team with these skills.
        </p>
        <br/>
        <hr />
      </div>               
                    <Row className="d-flex  mt-5">
                        <Col sm={8}>
                            <ReactPlayer
                                url="https://youtu.be/N3YUDcv4ctY"
                                controls
                                width="100%"
                            />
                        </Col>
                        <Col>
                            <p className="justify-text-justify">
                            
                                    This clip was filmed in collaboration with{" "}
                                    <a href="https://www.instagram.com/enjillneer" target="_blank">
                                        {" "}
                                        Enjillneer{" "}
                                    </a>
                                    for{" "}
                                    <a href="https://www.movaglobes.com/stayhomesciencefair" target="_blank">
                                        {" "}
                                        Mova Globe's Stay Home Science Fair.
                                    </a>
                                    This video was filmed on an iPhone and Dji Phantom Drone. 
                                    Post production was completed in Adobe Premiere Pro
                              
                            </p>
                        </Col>
                    </Row>
                    <Row className="d-flex  mt-5">
                        <Col sm={8}>
                            <ReactPlayer
                                url="https://youtu.be/V1fE_iiI4bo"
                                controls
                                width="100%"
                            />
                        </Col>
                        <Col>
                            <div>
                                <p>
                                    This video was made for <a href="https://www.laserphotonics.com" target="_blank">Laser Photonics Corporation</a> in Orlando Florida
                                </p>
                            </div>
                        </Col>
                        {/* <Col md="auto" className="pt-3">
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
                        </Col> */}
                    </Row>                    
            </Container>
        );
    }
}

export default Videos;
