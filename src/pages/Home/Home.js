import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";
//////////////////////
class Home extends Component{
  render(){
    return(
      <div>
        <div id="bioBox">
          <p id="myName"> David Villegas </p>
          <img id="bioPic" src={require("../../images/davidFullBody.jpg")} alt="landingPic"/>         
            </div>
              {/* <div id="nameBox">
                <p id="myName"> David Villegas </p>
                  </div> */}
                    <div id="textBox">
                      <p className="tagLine"> creative </p>
                      <p className="tagLine"> marketing </p>
                      <p className="tagLine"> developer  </p>



                    </div>
      </div>
    );
  }
}
export default Home;
