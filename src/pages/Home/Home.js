import React,{Component} from "react";
import "./Home.css";

class Home extends Component{
  render(){
    return(
      <div>
        <div className="bioPicBox">
        <img id="bioPic" src={require("../../images/davidFullBody.jpg")} alt="landingPic" /> 
        </div>
        <div id="textBox">
          <p className="tagLine"> digital marketing </p>
          <p className="tagLine"> creative design </p>
          <p className="tagLine"> web development  </p>

        </div>
      </div>
    );
  }
}
export default Home;
