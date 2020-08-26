import React, { Component } from 'react';
import data from './ContactData';
import './Contact.css';
import sunAndMoon from '../../images/sunAndMoon.gif';
import Navbar from "../../components/Navbar";
import { Container, Card, Grid, Col, Row } from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
       
            // <div className="container-fluid pageContent contactPage">
            //     <div className="container bg-transparent">
            //      <Navbar/>
            //     <header className="contactHeader"> Contact Me</header>
            //     <div className="justify-content-md-center">
            //         <div id="contactBox">
            //             <p className="contactLink mt-4">
            //                 {/* <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
            //                 {data.social.map((link, index) => (
            //                     <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
            //                 ))} */}
            //                 <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
            //                 <br/>
            //                 <a href={'github.com/davidvi11egas'}>Check Out My Github</a>

            //             </p>

            //             {/* <img width="80%" src={sunAndMoon} alt="sun and Moon" /> */}
            //         </div>
            //     </div>
            //     </div>
            // </div>
            <Container>
        <Navbar />
        {/* <div className="videoBodyText text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
        </div> */}
        <h1 className="pageHeader">Contact Me</h1>
        {/* <div className=" container photographyBodyText">
          <h5>
            My Videos
          </h5>
        </div> */}
        <hr />
        <Container>
          <Row center="xs">
          

         
            <Col xs>
            <p>
            <h5 id="movaGlobeText">

            <ul>
                <li>
                <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
                </li>
                <li>
                <a href={"https://www.linkedin.com/in/davidvi11egas/"}> Connect on LinkedIn</a>
                </li>
            </ul>
              
            
              </h5>
            </p>
            </Col>
          </Row>
        </Container>
        {/* <hr /> */}
        {/* <div className="videoBodyText text-center">
          <a href="/creative">
            <strong>Back to the creative page.</strong>
          </a>
        </div> */}
        {/* <Footer /> */}
      </Container>
        );
    }
}

export default Contact;