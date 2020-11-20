import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
// import {EastCoastSurfer as src} from "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/EastcoastSurferLogo.png";
const GraphicDesign = () => (
    <Container className="pt-4 p-0">
        {/* <h3>Graphic Design</h3> */}

        <div className="bodyText pb-2 justify-text" id="graphics">
            <br />
            <p>
The majority of these shots were taken on an iPhone and touched up using Adobe Creative Cloud applications.
Some of the locations you'll see include Cuba, Puerto Rico, Colombia, and Cocoa Beach in Florida.
            </p>
            <br />
            <hr />
        </div>

        <CardColumns>
            <Card style={{ border: "none" }}>
                <Card.Img
                    variant="top"
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/HOWT4335.jpeg"
                    }
                />
            </Card>
            <Card style={{ width: "100%" }}>
                <Card.Img
                    variant="top"
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/guatalahara.jpg"
                    }
                />
            </Card>
            <Card style={{ width: "100%" }}>
                <Card.Img
                    variant="top"
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/lakeDroneShot.jpg"
                    }
                />
            </Card>

            <Card style={{ width: "100%" }}>
                <Card.Img
                    variant="top"
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/apartmentsInCuba.jpg"
                    }
                />
            </Card>
            <card style={{ width: "100%" }}>
                <Card.Img
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/cubanChurch.jpg"
                    }
                />
            </card>
            <Card style={{ width: "100%" }}>
                <Card.Img
                    variant="top"
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/puertoRicanBeach.jpg"
                    }
                />
            </Card>
            <card style={{ width: "100%" }}>
                <Card.Img
                    variant="top"
                    src={
                        "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/favelasInTheValley_1.gif"
                    }
                />
            </card>
        </CardColumns>
        <br />
    </Container>
);

export default GraphicDesign;
