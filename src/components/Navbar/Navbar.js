import React from "react";
import "./Navbar.css";
import dvLogo from "../../images/dvLogo.png";
import { Container, NavbarBrand, Nav } from 'react-bootstrap';

const NavBar = props => (
  <Nav className="navbar navbar-expand-md">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon p-4">
        {/* <img
          src={dvLogo}
          width="30px"
          height="30px"
          className="mobileLogo"
          alt="David Villegas Logo"
        /> */}
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarContent">
      <Container className="justify-content-lg-center">
      <NavbarBrand href="/" className="bg-white">
      <img
        src={dvLogo}
        width="30px"
        height="30px"
        className="d-inline-block align-top"
        alt="David_Villegas_icon"
      />
    </NavbarBrand>
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>        
          <li className="nav-item">
            <a className="nav-link" href="/about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about#resume">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/webDev">Web Development</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/creative">Creative Content</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Me</a>
          </li>
        </ul>
      </Container>
    </div>
  </Nav>
);
export default NavBar;
