import React, {Component} from 'react';
import './About.css';
import data from './Biography';

class About extends Component {
    render(){
        return(
            <div>
                <div id="bioBox">
                    <p id="myName"> David Villegas </p>
                    <img id="bioPic" src={require("../../images/davidFullBody.jpg")} alt="landingPic" />
                </div>
                <div>
                    <p id="bioHeader">About Me</p>
                </div>
                <div className="bioText">
                <h3>{data.biography[1]}</h3>
                </div>
            </div>
            
        );
    }
}

export default About;