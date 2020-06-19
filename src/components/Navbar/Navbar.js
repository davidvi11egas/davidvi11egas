import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand logo" href="/">DV</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar1">
        <ul className="navbar-nav nav nav-fill w-100">
          <li className="nav-item">
            <a className="nav-link active" href="About">About Me</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="Webdev">Web Development</a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="Marketing">Digital Marketing</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="Creative">Creative Production</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Photography">Photography</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

);

export default Navbar;
