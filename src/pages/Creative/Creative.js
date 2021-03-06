import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, CardColumns, Col } from "react-bootstrap";
import GraphicDesign from "./GraphicDesign";
import VideoProduction from "./VideoProduction";
import Photography from "./Photography";
import Creative_NavTabs from "./Creative_NavTabs";

class Creative extends Component {

      state = {
        currentPage: "GraphicDesign"
      };
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === "GraphicDesign") {
          return <GraphicDesign />;
        } else if  (this.state.currentPage === "VideoProduction") {
          return <VideoProduction />;
        } else if (this.state.currentPage === "Photography") {
          return <Photography />;
        } else {
          return <GraphicDesign />;
        }
      };
      render() {
        return (
          <Container>
            {/* <Navbar/> */}
            <div className="marketingHeader pt-5">
              <h1>Creative Content</h1>
              <hr className="thickHR"  />
            </div>
            <div  className="marketingComponent">
              <Creative_NavTabs
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
              />
              {this.renderPage()}
            </div>
            <div>
              <br/>
              <br/>
              <br/>
            </div>
          </Container>
        
        );
      }
   

}

export default Creative;
