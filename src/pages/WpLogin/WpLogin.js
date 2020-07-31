import React, { Component } from "react";
import "./WpLogin.css";
import niceTry from '../../images/niceTry.jpg';
import LeftArrow from "../../images/leftArrow.png";
class WpLogin extends Component {
  render() {
    return (
      <div className="justify-content-md-center WpLogin">
        {/* <header >Nice Try!</header> */}
        
            <div className="justify-content-center m-5">
            <h2> This is NOT a wordpress website, but...</h2>
            <img width="800" src={niceTry} alt="nice_try"/>
           
            
          
   
            {/* <span>Nice Try! This is NOT a wordpress site! This website was made 100% by David Villegas.</span> */}
            {/* <h3> Guess he's the real deal, huh?</h3> */}
            </div>
            <a href="/">
            <img src={LeftArrow}alt="leftArrow" width="60px"/>
            <strong>Back To The Good Stuff</strong></a>
      </div>
     
 
    );
  }
}

export default WpLogin;
