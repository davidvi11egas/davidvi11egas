import React from "react";
// import { Nav, NavItem, Button } from "react-bootstrap";
// import linkedin from "./icons/linkedin.png";
// import email from "./icons/email.png";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <hr />
            <div className="text-center small copyright">
                This site was built with react
                <img
                    src={
                        "https://icon-library.com/images/react-icon/react-icon-14.jpg"
                    }
                    width="15px"
                />
                | © David Villegas 2020
            </div>
        </footer>
    );
}

export default Footer;
