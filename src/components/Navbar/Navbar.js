import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/" style={{ color:"#2F72FF"}}>
      David Villegas
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/about"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/creative"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Creative
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/marketing"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Marketing
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
