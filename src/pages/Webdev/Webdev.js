import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Webdev.css";
class Webdev extends Component {
    render() {
        return (
            <Container>
                <div className="webDevHeader pt-5">
                    <h1> Web Development </h1>
                    <hr className="thickHR" />
                    <br />
                </div>
                <p>
                    Web design and web development are two sides of the same
                    coin; one cannot exist without the other, making them
                    essential components to a brand’s online presence.
                    Ultimately, a brand’s website is the hub for everything
                    pertaining to the brand’s identity – their goals, mission,
                    about section, products/services – all of which determine
                    how their online presence will be perceived by consumers. As
                    a result, it is imperative that your brand’s website is
                    tuned for optimal performance.
                </p>
                <br />
                <hr />
                <h6>
                    <strong>
                        Click on the title to learn more about the site |{" "}
                    </strong>
                    Click on the picture to view the page in a new tab.
                </h6>
                <div className="webDev_bodyText">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <br />
                                <section className="m-1">
                                    <div className="websiteName">
                                        <h4>
                                            <strong>
                                                <a
                                                    href="#dagobong"
                                                    data-toggle="collapse"
                                                    aria-expanded="false"
                                                    className="siteText"
                                                    aria-controls="dagobong"
                                                >
                                                    DagoBong Vintage Clothing
                                                    Shop
                                                </a>
                                            </strong>
                                        </h4>
                                    </div>
                                    <div className="collapse" id="dagobong">
                                        <p>
                                            <ul>
                                                <li>
                                                    {" "}
                                                    Fully Functional E-Commerce
                                                    Website
                                                </li>
                                                <li>
                                                    {" "}
                                                    Owned & operated by David &
                                                    Matthew Villegas
                                                </li>
                                                <li> Built with Wordpress</li>
                                                <li>
                                                    {" "}
                                                    Sales made with WooCommerce{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Hosted on Amazon Web
                                                    Services{" "}
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <a
                                        href="https://dagobong.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={
                                                "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/dagobongScreenshot.png"
                                            }
                                            width="100%"
                                            alt="Dagobong Vintage Clothing"
                                        />
                                    </a>
                                </section>
                            </Col>
                            <Col md={6}>
                                <br />
                                <section className="m-1">
                                    <div className="websiteName">
                                        <h4>
                                            <strong>
                                                <a
                                                    href="#visitFlorida"
                                                    data-toggle="collapse"
                                                    aria-expanded="false"
                                                    className="siteText"
                                                    aria-controls="visitFlorida"
                                                >
                                                    Florida
                                                </a>
                                            </strong>
                                        </h4>
                                    </div>
                                    <div className="collapse" id="visitFlorida">
                                        <p>
                                            <ul>
                                                <li> Full Responsive</li>
                                                <li> HTML 5 </li>
                                                <li> CSS </li>
                                                <li> Bootstrap </li>
                                                <li> Hosted on AWS </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <a
                                        href="https://davidvi11egas.github.io/visit_florida/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={
                                                "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/visitFlorida2.png"
                                            }
                                            width="100%"
                                            alt="Cocoa Beach Florida"
                                        />
                                    </a>
                                </section>
                            </Col>
                            <br />
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    }
}
export default Webdev;
