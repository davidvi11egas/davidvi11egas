import React from "react";

const Creative_NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("GraphicDesign")}
        className={
          props.currentPage === "GraphicDesign" ? "nav-link active" : "nav-link"
        }
      >
        Graphic Design
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("VideoProduction")}
        className={
          props.currentPage === "VideoProduction" ? "nav-link active" : "nav-link"
        }
      >
        Video Production
      </a>
    </li>
   
  </ul>
);

export default Creative_NavTabs;
