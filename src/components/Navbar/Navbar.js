import React from "react";
import "./Navbar.css";
import dvLogo from "../../images/dvLogo.png";
import { Container, NavbarBrand } from 'react-bootstrap';

const NavBar = props => (
  <nav className="navbar navbar-expand-lg ">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-black">
        <img
          src={dvLogo}
          width="30"
          height="30"
          className="d-inline-block mobileLogo"
          alt="React Bootstrap logo"
        />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarContent">
      <Container className="justify-content-lg-center">
      <NavbarBrand href="/" className="bg-white">
      <img
        src={dvLogo}
        width="40"
        height="40"
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
  </nav>
);
export default NavBar;
