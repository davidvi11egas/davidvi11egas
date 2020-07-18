import React from "react";
import "./Navbar.css";
import dvLogo from "../../images/dv.png";
import {Container, Navbar, NavbarBrand} from 'react-bootstrap';
// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const NavBar = props => (

<nav className="navbar navbar-expand-lg ">
  {/* <a className="navbar-brand" href="/"></a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <Container >
      <li className="nav-item">
        <a className="nav-link" href="/about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/webDev">Web Development</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/marketing">Digital Marketing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/creative">Creative Content </a>
      </li>
    </Container>
    </ul>

  </div>
</nav>



);

export default NavBar;
