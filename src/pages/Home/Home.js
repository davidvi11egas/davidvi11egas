import React,{Component} from "react";
import "./Home.css";

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
