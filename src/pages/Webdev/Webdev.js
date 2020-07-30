import React, { Component } from "react";
import "./Webdev.css";
import Navbar from  "../../components/Navbar";
import visitFlorida from "../../images/visitFlorida.png";
import upPup from "../../images/upPup.png";
class Webdev extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Navbar/>
        <header className="pageHeader">WebDev</header>
       

          <div className="container text-center">
          <div className="d-inline-flex">
          <div className="row">
          <div className="col">
          <section id="lists">
							<h3><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false"
									aria-controls="collapseMenu5">Florida</a></h3>
							<div className="collapse" id="collapseMenu5">
								<div className="card card-body">
									<p>
                    Responsive HTML & CSS
									</p>
								</div>
							</div>
              <a href="https://davidvi11egas.github.io/visit_florida/" target="_blank">
							<img src={visitFlorida} width="50%"
								alt="Cocoa Beach Florida"/>
                </a>
						</section>
            <section id="lists">
							<h3><a href="#collapseMenu5" data-toggle="collapse" aria-expanded="false"
									aria-controls="collapseMenu5">Up Pup</a></h3>
							<div className="collapse" id="collapseMenu5">
								<div className="card card-body">
									<p>
                    Responsive HTML & CSS
									</p>
								</div>
							</div>
              <a href="https://master.d35odzy1irc8uc.amplifyapp.com/" target="_blank">
							<img src={upPup} width="50%"
								alt="Cocoa Beach Florida"/>
                </a>
						</section>
            </div>
            </div>
            </div>
        </div>
        </div>
  
    );
  }
}

export default Webdev;
