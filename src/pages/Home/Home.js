import React,{Component} from "react";
import "./Home.css";
import { Row, Col } from 'react-bootstrap';

class Home extends Component{
  render(){
    return(
      <div>
        <Row>
          <Col>
            <div className="bioPicBox">
              <img id="bioPic" src={require("../../images/davidFullBody.jpg")} alt="landingPic" />
            </div>
          </Col>
          <Col xs="7">
            <div id="textBox">
              <p className="nameLine"> david villegas </p>
              <p className="tagLine"> web developer </p>
              <p className="tagLine"> marketing pro </p>
              <p className="tagLine"> graphic designer  </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Home;
