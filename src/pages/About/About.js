import React, {Component} from 'react';
import './About.css';
import data from './AboutData';



class About extends Component {
    render() {
        return (
            <div className="pageContent">
               
            
                <header className="pageHeader"> About Me </header>

                <h3>{data.aboutData[1]}</h3>
                <h2> TEST <h2>
            </div>
        );
    }
}

export default About;