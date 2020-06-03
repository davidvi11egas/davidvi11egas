import React, { Component } from 'react';
import data from './ContactData';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="pageContent">
                <header className="pageHeader"> Contact </header>
                <div id="contactBox" >
                    <p>
                 
                        
                        <a href={`mailto:${data.contactEmail}`} className='email'>Send me an Email</a>
                        {data.social.map((link, index) => (
                            <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        ))}
                    </p>
                </div>
            </div>
        );
    }
}

export default Contact;