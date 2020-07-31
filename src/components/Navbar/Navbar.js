import React from "react";
import "./Navbar.css";
import dvLogo from "../../images/dvLogo.png";
import { Container, NavbarBrand } from 'react-bootstrap';

const NavBar = props => (

  <nav className="navbar navbar-expand-lg ">

    <NavbarBrand href="/">
      <img
        src={dvLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="David_Villegas_icon"
      />
    </NavbarBrand>





    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon">
        <img
          src={dvLogo}
          width="30"
          height="30"
          className="d-inline-block align-top navbar-toggler-icon"
          alt="React Bootstrap logo"
        />
      </span> 
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
      <Container className="justify-content-lg-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/webDev">Web Development</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/marketing">Digital Marketing</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/creative">Creative Content</a>
          </li>
        </ul>
      </Container>
    </div>
  </nav>



);

export default NavBar;
