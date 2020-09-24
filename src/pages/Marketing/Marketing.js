import React, { Component } from "react";
import "./Marketing.css";
import Container from 'react-bootstrap/Container';
import Navbar from "../../components/Navbar";
import NavTabs from "./NavTabs";
import SeoPPC from "./pages/SeoPPC";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class Marketing extends Component {

  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <SeoPPC />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };
  render() {
    return (
      <Container>
        <Navbar/>
        <div className="marketingHeader pt-2">
          <h1> Marketing </h1>
          {/* <h5>
            With over 5 year 
          </h5> */}
          <hr />
        </div>
        <div  className="marketingComponent">
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      </Container>
    
    );
  }
}

export default Marketing;

