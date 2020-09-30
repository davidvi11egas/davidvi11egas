import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const EmailMarketing = () => (
    <Container className="pt-4 p-0">
        <h2>
            <strong>Email Marketing</strong>
        </h2>
        <div className="bodyText pb-2 text-justify" id="graphics">
            <p>
            Email marketing is a digital marketing strategy based on sending emails and developing relationships with prospects and customers. An effective email marketing strategy convert prospects into customers, and turn first time buyers into recurring customers. One advantage of email marketing is that you can automate the entire process.
            </p>
        <hr />
            <p>
            The following is an UpPUP Email Marketing sample.
            The source code is written with table based HTML which provides consistency across all email service providers. Some providers (like gmail) automatically remove the styling from the page. To prevent this, all styling is included <i>in-line</i> with the HTML code.
            </p>
            <embed 
            src="https://davidvi11egas.github.io/email_marketing_sample/"
            width="100%"
            height="800px"></embed>
        </div>
    </Container>
);
export default EmailMarketing;
