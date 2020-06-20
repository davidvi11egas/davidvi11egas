import React from 'react';
import { Nav, NavItem, Button, NavbarBrand } from 'react-bootstrap';
import linkedin from './icons/linkedin.png';
import email from './icons/email.png';
import "./Footer.css";
// icon download link: https://www.iconfinder.com/iconsets/social-media-outline-6

function Footer() {
    return (
        <footer>
        <hr></hr>
            <Nav justified>
                <NavItem className="button">
                    <Button variant="light" href={`mailto:${"davidvillegas627@gmail.com"}`}>
                        <img src={email} width='25px' alt='emailIcon' />
                    </Button>
                </NavItem>
                <NavItem className="button">
                    <Button variant="light" href="https://www.linkedin.com/in/davidvi11egas/">
                        <img src={linkedin} width='25px' alt='linkedInIcon' />
                    </Button>      
                </NavItem>
            </Nav>
            {/* <div className="text-center small copyright">
                © David Villegas 2020
            </div> */}
        </footer>
    );
}

export default Footer;