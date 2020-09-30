import React from "react";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

var pageStyle = {
    width: "100%",
    height: "500px",
};
const SeoPPC = () => (
    <Container className="pt-4 p-0">
        <h2>
            <strong>SEO & PPC</strong>
        </h2>
        <div className="bodyText pb-2 text-justify" id="graphics">
            <p>
            SEO begins under the hood of your website. From Meta tags in your header, to title tags in your body, the structure of your source code MATTERS.   
            </p>
        <p>
            I follow these 6 steps towards successful SEO.
        </p>
        <ul>
            <li>
                Crawl accessibility so engines can read your website
            </li>
            <li>
Compelling content that answers the searcher’s query
            </li>
            <li>
            Keyword optimized to attract searchers & engines 
            </li>
            <li>
Great user experience including a fast load speed and compelling UX
            </li>
            <li>
            Title, URL, & description to draw high CTR in the rankings  
            </li>
        </ul>
        </div>
    </Container>
);

export default SeoPPC;
