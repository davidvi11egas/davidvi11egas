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
                    Welcome to David, your number one source for all things Digital Marketing. We're dedicated to giving you the very best of [product], with a focus on [store characteristic 1], [store characteristic 2], [store characteristic 3].
                    Founded in [year] by [founder name], David has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to [action: quit day job, do tons of research, etc.] so that David can offer you [competitive differentiator - e.g. "the world's most advanced toothbrush"]. We now serve customers all over [place - town, country, the world], and are thrilled that we're able to turn our passion into [my/our] own website.
                    [I/we] hope you enjoy [my/our] products as much as [I/we] enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact [me/us].
                    Sincerely,
                    [founder name] 
                    </p>
                </div>
            </Row>
           
            </div>
        );
    }
}

export default About;