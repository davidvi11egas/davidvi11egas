import React, { Component } from "react";
import "./SkillsIconBar.css";
import {Row} from 'react-bootstrap';

function SkillsIconBar() {
    return(
        <Row className="justify-content-md-center">
        <div className="iconBar"> 
            <img
                src={
                    "https://img.icons8.com/color/60/000000/html-5.png"
                }
                alt="html5"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/css3.png"
                }
                alt="css"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/javascript.png"
                }
                alt="javascript"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/react-native.png"
                }
                alt="react"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/python.png"
                }
                alt="python"
            />
            <img
                src={
                    "https://img.icons8.com/officel/60/000000/php-logo.png"
                }
                alt="php"
            />
            <img
                src={
                    "https://img.icons8.com/windows/60/000000/amazon-web-services.png"
                }
                alt="aws"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/google-ads.png"
                }
                alt="googleAds"
            />
            <img
                src={
                    "https://img.icons8.com/fluent/60/000000/visual-studio-code-2019.png"
                }
                alt="vsCode"
            />
            <img
                src={
                    "https://img.icons8.com/fluent/60/000000/github.png"
                }
                alt="github"
            />
            <img
                src={
                    "https://img.icons8.com/fluent/60/000000/adobe-photoshop.png"
                }
                alt="photoshop"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/adobe-illustrator.png"
                }
                alt="illustrator"
            />
            <img
                src={
                    "https://img.icons8.com/fluent/60/000000/adobe-dreamweaver.png"
                }
                alt="dreamweaver"
            />
            <img
                src={
                    "https://img.icons8.com/fluent/60/000000/adobe-premiere-pro.png"
                }
                alt="premier"
            />
            <img
                src={
                    "https://img.icons8.com/color/60/000000/adobe-creative-cloud.png"
                }
                alt="adobeCC"
            />
         </div> 
    </Row>
    )
}

export default SkillsIconBar;