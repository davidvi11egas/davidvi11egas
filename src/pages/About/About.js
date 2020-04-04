import React, {Component} from 'react';
import './About.css';
import data from './AboutData';



class About extends Component {
    render() {
        return (
            <div className="pageContent">
                <h1 className="pageHeader"> About Me </h1>
                <h3>{data.aboutData[1]}</h3>
            </div>
        );
    }
}

export default About;