import React, { Component } from 'react';
import './About.css';
import { Row, Col } from 'react-bootstrap';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// icon & photo imports
// import googleAnalytics from '../../images/googleAnalytics.png';
import aboutMePic from '../../images/headShot.jpg';
// import SEOicon from '../../images/SEOicon.png';

class About extends Component {
    render() {
        return (
            <div className="container">
            <Navbar/>
                {/* <header className="pageHeader">
                    About Me
                   
                </header> */}
                <hr />
                <Row className="justify-content-md-center ">
                    <Col md="auto">
                        <img src={aboutMePic} width="90%" className="profilePhoto" alt="davidBioPhoto" />
                    </Col>
                    <Col>
                        <section className="profileHeader">
                            <h1>David Villegas</h1>
                            <h4>Web Developer &</h4>
                            <h4>Digital Marketing Professional</h4>
                            <hr />
                            <p>
                            With an eye for captivating design and a passion for innovation, David Villegas has over a decade of experience in digital marketing and creative production. In addition to digital marketing, David’s talents spread across photography, cinematography, musical production, and web development. 
                                <br/><br/>
                            With extensive knowledge in a variety of computer languages like HTML, CSS, Java Script, React, and PHP, David is capable of producing creative content via Adobe CC, Logic, and Final Cut Pro to develop engaging user experiences, but can also deliver this content to the world with captivating front-end development. 
                                 </p>
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
                            During his time as Digital Marketing Manager at the New Smyrna Beach Vistitor’s bureau, he personally implemented virtual reality tours which increased online traffic by 11%. He also worked as a Marketing Manager where he utilized Google SEO’s and Strategic Social Media Marketing to raise over $50,000 in Hurricane Irma relief efforts. His skills not only span the Economic Tourism and Urban Development industries, but also dives into the world of Event Planning as a Social Media Marketer for one of Miami’s top Entertainment Promoters, New World Events, where he achieved a perfect 5-star Yelp! Rating by building strong brand recognition while providing high-quality service.
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
                
           
                    <br></br>
                    <br></br>
                   


                    <Footer/>

            </div>
            
        )
    }
}

export default About;