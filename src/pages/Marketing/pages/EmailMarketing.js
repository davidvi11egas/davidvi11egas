import React from "react";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "../Marketing.css";

const EmailMarketing = () => (
    <Container className="pt-4 p-0">
        {/* <h3>Email Marketing</h3> */}
        <div className="bodyText pb-2 text-justify" id="graphics">
        <br/>
            <p>
            An effective email marketing strategy converts prospects into customers and turns first-time buyers into recurring customers. 
            The goal is to build a good relationship by only sending high quality content that will benefit the receiver.         </p>
        <br/>
        <hr className="thick" />
            <div className="mt-4 mb-4">
            <h6>
            The following is an UpPUP Email Marketing sample.
            The source code is written with table based HTML which provides consistency across all email service providers. Some providers (like gmail) automatically remove the styling from the page. To prevent this, all styling is included <i>in-line</i> with the HTML code.
            </h6>
            </div>
            <div className="text-center">
            <embed 
            src="https://davidvi11egas.github.io/email_marketing_sample/"
            width="80%"
            height="800px"></embed>
            </div>
        </div>
    </Container>
);
export default EmailMarketing;
