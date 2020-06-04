import React, { Component } from 'react';
import './About.css';
import {Row} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div className="pageContent">
                <header className="pageHeader"> About Me </header>
                <Row>
                    <img className="bioPic" src={require("../../images/davidFullBody.jpg")} alt="david_villegas_photo" />
                    <div className="aboutMeText">
                        <p>
                            With an eye for captivating design, and a passion for innovation, David Villegas has over a decade of experience in digital marketing and creative production.
                            In addition to digital marketing, David has talents spread across photography, cinematography, and musical production.
                            Or, to put it frankly - David Villegas is a production house all in one.
                        </p>
                    </div>
                </Row>
            </div>
        );
    }
}

export default About;
