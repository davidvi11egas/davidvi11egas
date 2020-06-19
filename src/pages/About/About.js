import React, { Component } from 'react';
import './About.css';
import { Row, Col } from 'react-bootstrap';


// icon & photo imports
// import googleAnalytics from '../../images/googleAnalytics.png';
import aboutMePic from '../../images/headShot.jpg';
// import SEOicon from '../../images/SEOicon.png';

class About extends Component {
    render() {
        return (
            <div className="pageContent aboutMe">
                <header className="pageHeader">
                    About Me
                   
                </header>
                <hr />
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <img src={aboutMePic} width="80%" className="profilePhoto" alt="davidBioPhoto" />
                    </Col>
                    <Col>
                        <section className="profileHeader">
                            <h1>David Villegas</h1>
                            <h4>Web Developer &</h4>
                            <h4>Digital Marketing Professional</h4>
                            <hr />
                            <p>
                                With an eye for captivating design and a passion for innovation, David Villegas has over a decade of experience in digital marketing and creative production.
                                In addition to digital marketing, David has talents spread across photography, cinematography, and musical production.
                                Or, to put it frankly - David Villegas is a production house all in one. </p>
                        </section>
                    </Col>
                </Row>


                <br /><br />
{/* 
                <Row className="justify-content-md-left">
                    <section className="talentsAndSkills">
                        <h1> Talent & Skill </h1>
                        <hr />
                        <div className="mainContent">
                            <br/>
                            <article>
                                <h2 className="sectionContentTitle"> Digital Marketing </h2>
                                <aside class="socialNetworkNavBar">
                                    <div class="socialNetworkNav">
                                        <img src={googleAnalytics} width="200" alt="google_analytics_logo" /> </div>
                                    <div class="socialNetworkNav">
                                        <img src={SEOicon} width="150" alt="seo_icon" /> </div>
                                </aside>
                            </article>
                            <br/>
                        </div>
                    </section>
                </Row> */}

                <section className="previousExperience">
                    <span className="pageHeader"> Experience </span>
                    <hr />

                    <div className="mainContent">
                        <br />
                        <article>
                            <h2 className="sectionContentTitle"> Southeast Volusia Advertising Authority </h2>
                            <h3 className="sectionContentSubTitle"> Digital Marketing Manager </h3>
                            <p class="sectionContent">
                                Produced original images and videos for use across digital and print mediums. Worked closely with internal PR team to strengthen brand awareness, and increase public engagement through social media. Utilized Google Analytics to validate marketing initiatives. Generated keywords to improve organic ranking. Utilized ConstantContact to send monthly newsletters to industry partners. Maintained multimedia archives for public access with CleanPix. Received Henry Award from destination marketing industry for our ​Sustainable Tourism​ campaign.
                            </p>
                        </article>
                        <br />
                        <article>
                            <h2 className="sectionContentTitle"> Sky Builders USA </h2>
                            <h3 className="sectionContentSubTitle"> Marketing Manager </h3>
                            <p class="sectionContent">
                                Developed content for all social media channels with strategies aimed to strengthen brand and grow online presence. Assisted in website redesign to create a better user experience, especially for mobile users. Increased web traffic by uploading new content regularly. Utilized social media outlets to raise over $50,000 for Hurricane Irma relief efforts.
                         </p>
                        </article>
                        <br />
                        <article>
                            <h2 className="sectionContentTitle"> New World Events </h2>
                            <h3 className="sectionContentSubTitle"> Social Media Marketer </h3>
                            <p class="sectionContent">
                                Utilized Instagram, Facebook, and Twitter to promote weekly performances by world renowned Djs in Miami’s best nightclubs like LIV, Mansion, Story, and Club Space. Generated revenue by maintaining strong relationships with clients. Achieved a perfect 5-star Yelp rating by building a strong brand reputation for providing high-quality service.
                         </p>
                        </article>



                    </div>
                </section>



            </div>
        )
    }
}

export default About;