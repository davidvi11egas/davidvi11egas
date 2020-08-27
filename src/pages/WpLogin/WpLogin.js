import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "./WpLogin.css";
class WpLogin extends Component {
  render() {
    return (
      <div className="WpLogin pt-5">
        <div className="container justify-content-center p-3">
          <h5>This is not a WordPress website.</h5>
          <img width="75%" src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/niceTry.jpg"} alt="nice_try" />
        </div>
        <Button
          variant="secondary"
          href="/"
        >Go Back</Button>
      </div>
    );
  }
}

export default WpLogin;
