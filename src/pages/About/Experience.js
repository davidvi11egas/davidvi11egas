import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Experience.css";

import "./Experience.css";

class Experience extends Component {
    render() {
        return (
            <section className="container experience" id="resume">
                <div className="mainContent">
                    <Row className="d-inline-flex">
                        <Col>
                            <h2 className="sectionHeader">Experience</h2>
                        </Col>
                    </Row>

                    <Col className="jobSection">
                        {/* <section> */}
                            <div className="sectionContentTitle">
                                <h5>
                                    <strong>
                                        <a
                                            href="https://visitnsbfl.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Southeast Volusia Advertising
                                            Authority
                                        </a>
                                    </strong>
                                </h5>
                                <h5>Digital Marketing Manager</h5>
                            </div>
                            <p class="sectionContent">
                                During his time as Digital Marketing Manager at
                                the New Smyrna Beach Vistitor’s bureau, he
                                personally implemented virtual reality tours
                                which increased online traffic by 11%. He also
                                worked as a Marketing Manager where he utilized
                                Google SEO’s and Strategic Social Media
                                Marketing to raise over $50,000 in Hurricane
                                Irma relief efforts. His skills not only span
                                the Economic Tourism and Urban Development
                                industries, but also dives into the world of
                                Event Planning as a Social Media Marketer for
                                one of Miami’s top Entertainment Promoters, New
                                World Events, where he achieved a perfect 5-star
                                Yelp! Rating by building strong brand
                                recognition while providing high-quality
                                service.
                            </p>
                        {/* </section> */}
                    </Col>

                    <Col className="jobSection">
                        <section>
                            <div className="sectionContentTitle">
                                <h5>
                                    <strong>
                                        <a
                                            href="https://visitnsbfl.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Sky Builders USA
                                        </a>
                                    </strong>
                                </h5>
                                <h5>Marketing Manager</h5>
                            </div>

                            <p class="sectionContent">
                                Developed content for all social media channels
                                with strategies aimed to strengthen brand and
                                grow online presence. Assisted in website
                                redesign to create a better user experience,
                                especially for mobile users. Increased web
                                traffic by uploading new content regularly.
                                Utilized social media outlets to raise over
                                $50,000 for Hurricane Irma relief efforts.
                            </p>
                        </section>
                    </Col>
                    {/* <br /> */}
                    <Col className="jobSection">
                        <section>
                            <div className="sectionContentTitle">
                                <h5>
                                    <strong>
                                        <a
                                            href="https://visitnsbfl.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            New World Events
                                        </a>
                                    </strong>
                                </h5>
                                <h5>Social Media Marketing Manager</h5>
                            </div>
                            <p class="sectionContent">
                                Utilized Instagram, Facebook, and Twitter to
                                promote weekly performances by world renowned
                                Djs in Miami’s best nightclubs like LIV,
                                Mansion, Story, and Club Space. Generated
                                revenue by maintaining strong relationships with
                                clients. Achieved a perfect 5-star Yelp rating
                                by building a strong brand reputation for
                                providing high-quality service.
                            </p>
                        </section>
                    </Col>
                </div>
            </section>
        );
    }
}

export default Experience;
