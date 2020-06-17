import React from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';
import linkedin from './icons/linkedin.png';
import email from './icons/email.png';

// icon download link: https://www.iconfinder.com/iconsets/social-media-outline-6

function Footer() {
    return (
        <footer>
            <Nav justified>
                <NavItem>
                    <Button variant="light">
                        <img src={email} width='20px' alt='emailIcon' />
                    </Button>
                </NavItem>
                <NavItem>
                    <Button variant='light'>
                        <img src={linkedin} width='20px' alt='linkedInIcon' />
                    </Button>      
                </NavItem>
            </Nav>
            <div className="text-center small copyright">
                © David Villegas 2020
            </div>
        </footer>
    );
}

export default Footer;