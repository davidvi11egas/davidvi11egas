import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home2 from "./pages/Home/home2";
// import About from "./pages/About";
import About2 from "./pages/About";

import Webdev from "./pages/Webdev";
import Marketing from "./pages/Marketing";
import Creative from "./pages/Creative";
import Contact from "./pages/Contact";
import Photography from "./pages/Photography";
import Videos from "./pages/Videos";
import WpLogin from "./pages/WpLogin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => (
  <Router>   
        <Navbar/>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Home2} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/about" component={About2} />

        <Route path="/creative" component={Creative} />
        <Route path="/photography" component={Photography} />
        <Route path="/videos" component={Videos} />
        <Route path="/webDev" component={Webdev} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/contact" component={Contact} />
        <Route path="/wp-admin" component={WpLogin}/>
        <Footer/>
  </Router>
 
);
export default App;
