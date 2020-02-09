import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <Nav  className="bg-dark center" defaultActiveKey="/">
    <Nav.Item>
      <Nav.Link href="/"> Home </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about" eventKey="link-1"> About Me </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/creative" eventKey="link-1"> Creative Production </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="marketing" eventKey="link-2"> Digital Marketing </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/webDev"> Web Development </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navbar;
