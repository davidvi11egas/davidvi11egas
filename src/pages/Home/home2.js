import React, { Component } from "react";
import "./Home2.css";
import Navbar from "../../components/Navbar";
class Home2 extends Component {
    render() {
        return (
            <div className="videoHolder">
{/* 
                <video
                    id="background-video"
                    width="100%"
                    
                    autoPlay
                    muted
                    loop
                    >
                    <source
                    src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"}
                    type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> */}
                {/* DESKTOP VIEW */}
                <div className="overlay">
                    <span className="nameLine a1">David Villegas</span>
                    <span className="nameLine2 a2">Marketing</span>
                    <span className="nameLine3 a3">Web Development</span>
                    <span className="nameLine4 a4">Creative Content</span>


                    {/* <Navbar /> */}
                </div>
                {/* MOBILE VIEW */}
                {/* <div className="container mobile">
                    <div className=" container mobileContent p-3">
                        <h1>David Villegas</h1>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default Home2;


