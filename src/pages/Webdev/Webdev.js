import React, { Component } from "react";
import "./Webdev.css";

class Webdev extends Component {
  render() {
    return (
      <div className="pageContent">
        <header className="pageHeader">WebDev</header>
        <div className="card siteCard">
          <div className="card-header">
            <h1>CODE</h1>
          </div>
          <div className="card-body">
            <img width="100" src="https://www.xmple.com/wallpaper/checkered-blue-squares-white-1920x1080-c2-00bfff-ffffff-l-240-a-60-f-2.svg" alt="sampleWebsite" />
            <hr></hr>


          </div>
        </div>
      </div>
    );
  }
}

export default Webdev;
