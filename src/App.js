import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//package imports
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
//component imports
// import Container from '../src/components/Container';
import Navbar from "../src/components/Navbar";
// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Webdev from "./pages/Webdev";
import Marketing from "./pages/Marketing";
import Creative from "./pages/Creative";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
  
    <Navbar />
    <Container>
   
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/creative" component={Creative} />
      <Route path="/webDev" component={Webdev} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/contact" component={Contact} />
  
    </Container>

  </Router>
);
export default App;
