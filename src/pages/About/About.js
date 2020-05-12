import React, {Component} from 'react';
import './About.css';
import data from './AboutData';
import { Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div className="pageContent">
                <header className="pageHeader"> About Me </header>
                {/* <h3>{data.aboutData[1]}</h3> */}
                <Row>
                <img className="bioPic" src={require("../../images/davidFullBody.jpg")} alt="david_villegas_photo" />

                <div className="aboutMeText">
                    <p>
                    With an eye for captivating design, and a passion for creation - David Villegas is a professional digital marketer, web developer, audio engineer and creative content producer.
                    From
                    
                    </p>
                </div>
            </Row>
           
            </div>
        );
    }
}

export default About;