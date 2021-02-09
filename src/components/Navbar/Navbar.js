import React from "react";
import "./Navbar.css";
import { Container, NavbarBrand, Nav } from "react-bootstrap";

const NavBar = (props) => (
    <Nav className="navbar navbar-expand-md">
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon p-4"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
            <Container className="justify-content-lg-center bg-white p-0">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                           <h5> <b>DV</b></h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/resume">
                            Resume
                        </a>
                    </li>
                    {/* <li className="nav-item">
            <a className="nav-link" href="/about#resume">Resume</a>
          </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/marketing">
                            Marketing
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="/webDev">
                            Web Development
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/creative">
                            Creative Content
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            // href="/contact"
                            href={`mailto:${'david.v.resume@gmail.com'}`}
                           
                        >
                            Send Me an Email
                        </a>
                    </li>
                </ul>
            </Container>
        </div>
    </Nav>
);
export default NavBar;
