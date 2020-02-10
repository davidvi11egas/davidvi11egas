import React from 'react';
import "./Footer.css";
import {Card, Button} from 'react-bootstrap'

const Footer = props => (
    // <footer className="blockquote-footer">FOOTER</footer>
    <Card className="text-center">

  
            <Button variant="primary">Go somewhere</Button>
       
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
)

export default Footer;