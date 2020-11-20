import React, { Component } from "react";
import data from "../About/ContactData";
import "./Contact.css";
import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Container>
                {/* <Navbar /> */}
                <div className="contactHeader pt-5">
                    <h1>Contact Me</h1>
                    <hr className="thickHR" />
                </div>
                <div className="linkBox">
                    <br />
                    <h4>
                        <a
                            href={`mailto:${data.contactEmail}`}
                            className="email"
                        >
                            Send me an Email
                        </a>
                    </h4>
                    <h4>
                        <a
                            href={"https://www.linkedin.com/in/davidvi11egas/"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Connect on LinkedIn
                        </a>
                    </h4>
                </div>
            </Container>
        );
    }
}

export default Contact;
