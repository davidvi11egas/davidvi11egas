import React, { Component } from 'react';
import data from './ContactData';
import './Contact.css';
import sunAndMoon from '../../images/sunAndMoon.gif';
import Navbar from "../../components/Navbar";
class Contact extends Component {
    render() {
        return (
       
            <div className="container-fluid pageContent contactPage">
                <div className="container bg-transparent">
                 <Navbar/>
                <header className="contactHeader"> Contact Me</header>
                <div className="justify-content-md-center">
                    <div id="contactBox">
                        <p className="contactLink mt-4">
                            {/* <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
                            {data.social.map((link, index) => (
                                <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                            ))} */}
                            <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
                            <br/>
                            <a href={'github.com/davidvi11egas'}>Check Out My Github</a>

                        </p>

                        <img width="80%" src={sunAndMoon} alt="sun and Moon" />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;