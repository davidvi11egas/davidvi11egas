import React, { Component } from 'react';
import data from './ContactData';
import './Contact.css';

class Contact extends Component {
    render() {
        return (

            <div>
                <h1 className="contactHeader"> Contact </h1>
                <h1>
                    Reach out and lets see what we can do together!<br></br>
                    </h1>
                <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                {/* <ul>
                    {data.social.map((link, index) => (
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}
                </ul> */}
            </div>


        );
    }
}

export default Contact;