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
                        <div className="sectionContentTitle">
                            <h5>
                                <strong>
                                    <a
                                        href="https://acornstairlifts.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Acorn Stairlifts
                                    </a>
                                </strong>
                            </h5>
                            <h5>Digital Marketing Manager</h5>
                        </div>
                        <p class="sectionContent">
                            Lead in planning, design, and rollout of company
                            websites. Managed detailed aspects of paid search,
                            email, and web campaigns. Conducted analyses on
                            website interactions to gauge performance and
                            engagement. Analyzed source code to identify and fix
                            SEO opportunities for both domestic and
                            international websites. Achievements: Created “Stay
                            Home Stay Safe” marketing campaign to help incoming
                            web traffic understand corporate efforts during the
                            pandemic.
                        </p>
                    </Col>
                    <Col className="jobSection">
                        <div className="sectionContentTitle">
                            <h5>
                                <strong>
                                    <a
                                        href="https://visitnsbfl.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Southeast Volusia Advertising Authority
                                    </a>
                                </strong>
                            </h5>
                            <h5>Digital Marketing Manager</h5>
                        </div>
                        <p class="sectionContent">
                            During his time as Digital Marketing Manager at the
                            New Smyrna Beach Vistitor’s bureau, he personally
                            implemented{" "}
                            <a
                                href="https://visitnsbfl.com/nsb360"
                                link="_blank"
                                rel=""
                            >
                                360 Experience Tours
                            </a>{" "}
                            which increased online traffic by 11%. Produced
                            original images and videos for use across digital
                            and print mediums. Worked closely with internal PR
                            team to strengthen brand awareness, and increase
                            public engagement through social media. Utilized
                            Google Analytics to validate marketing initiatives.
                            Generated keywords to improve organic ranking.
                            Utilized ConstantContact to send monthly newsletters
                            to industry partners. Maintained multimedia archives
                            for public access with CleanPix. Received Henry
                            Award from destination marketing industry for our
                            Sustainable Touris m campaign.
                        </p>
                    </Col>
                    <Col className="jobSection">
                        <section>
                            <div className="sectionContentTitle">
                                <h5>
                                    <strong>
                                        <a
                                            href="https://nweventsllc.com//"
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
                    <Col className="jobSection">
                        <section>
                            <div className="sectionContentTitle">
                                <h5>
                                    <strong>
                                        <a
                                            href="http://www.skybuildersusa.com/"
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
                </div>
            </section>
        );
    }
}

export default Experience;
