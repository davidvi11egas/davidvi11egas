import React, { Component } from "react";
import "./Marketing.css";
import Container from 'react-bootstrap/Container';
import Navbar from "../../components/Navbar";
import NavTabs from "./NavTabs";
import SeoPPC from "./pages/SeoPPC";
// import PPC from "./pages/PPC";
import EmailMarketing from "./pages/EmailMarketing";
import SocialMedia from "./pages/SocialMedia";
import Copywriting from "./pages/Copywriting";
import MarketingHome from "./pages/MarketingHome";
import Footer from '../../components/Footer';
class Marketing extends Component {

  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <SeoPPC />;
    }    
    else if (this.state.currentPage === "SeoPPC") {
      return <SeoPPC />;
    } 
    else if (this.state.currentPage === "About") {
      return <EmailMarketing />;
    }
    else if (this.state.currentPage === "Blog") {
      return <SocialMedia />;
    } 
    else {
      return <Copywriting />;
    }
  };
  render() {
    return (
      <Container id="marketing">
        <Navbar/>
        <div className="marketingHeader pt-5">
          <h1> Marketing </h1>
          <hr />
        </div>
        <div  className="marketingComponent">
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
        <Footer/>
      </Container>
    
    );
  }
}

export default Marketing;

