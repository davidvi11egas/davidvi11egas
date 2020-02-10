import React, {Component} from 'react';
import './About.css';
import data from './AboutData';

class About extends Component {
    render(){
        return(
            <div>
                    <div>
                    <h1 className="aboutHeader"> about </h1>
                </div>
                {/* <div className="aboutText"> */}
                <h3>{data.aboutData[1]}</h3>
                {/* </div> */}
            </div>
            
        );
    }
}

export default About;