import React, { Component } from 'react';
import data from './ContactData';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
           <div className="pageContent">
                <span className="pageHeader"> Contact </span>
            <div id="contactBox">
                <p>
                    Reach out and lets see what we can do together!<br></br>
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