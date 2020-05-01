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
// import Home from "./pages/Home";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Webdev from "./pages/Webdev";
import Marketing from "./pages/Marketing";
import Creative from "./pages/Creative";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <Container>
    <Navbar />
    
   
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/creative" component={Creative} />
      <Route exact path="/webDev" component={Webdev} />
      <Route exact path="/marketing" component={Marketing} />
      <Route exact path="/contact" component={Contact} />
  
    </Container>

  </Router>
);
export default App;
