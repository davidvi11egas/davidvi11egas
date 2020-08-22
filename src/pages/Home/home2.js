import React, { Component } from "react";
import {Container} from "react-bootstrap";
import "./Home2.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import data from "../Contact/";


class Home2 extends Component {
    render() {
        return (
            <div>
                <div className="videoHolder">
                    <video
                        id="background-video"
                        width="100%"
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src={
                                "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"
                            }
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <span className="nameLine">David Villegas</span>
                        <Navbar />
                    </div>
                    <Footer/>
                </div>
                <div className="mobile">
                    <Navbar />
                    <div className="mobileContent">     
                    {/* <h1>DAVID VILLEGAS</h1> */}
                    {/* <h2>Web Development</h2> */}
                    {/* <h2>Digital Marketing</h2> */}
                    {/* <h2>Graphic Design</h2> */}
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Home2;
