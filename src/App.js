import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//package imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/creative" component={Creative} />
      <Route exact path="/webDev" component={Webdev} />
      <Route exact path="/marketing" component={Marketing} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
    </Container>
  </Router>
);
export default App;
