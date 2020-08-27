import React from "react";
import "./Navbar.css";
import { Container, NavbarBrand, Nav } from 'react-bootstrap';

const NavBar = props => (
  <Nav className="navbar navbar-expand-md">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon p-4">
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarContent">
      <Container className="justify-content-lg-center bg-white">
      <NavbarBrand href="/">
      <img
        src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/dvLogo2.png"}
        width="25px"
        height="25px"
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
