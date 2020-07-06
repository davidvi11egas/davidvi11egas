import React from "react";
import "./Navbar.css";
import dvLogo from "../../images/dv.png";
// import {Nav, NavLink, NavItem} from 'react-bootstrap';
// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Navbar = props => (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/home">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/webdev"> Web Dev</a>
      {/* <a className="nav-item nav-link" href="#">Pricing</a> */}
      {/* <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
    </div>
  </div>
</nav>


);

export default Navbar;
