import React from "react";


const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        SEO & PPC
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
        Email Marketing
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Blog")}
        className={
          props.currentPage === "Blog" ? "nav-link active" : "nav-link"
        }
      >
        Social Media
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Copywriting
      </a>
    </li>
  </ul>
);

export default NavTabs;
