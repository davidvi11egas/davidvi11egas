import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";


const SocialMedia = () => (
    <Container className="pt-4 p-0">
   
        <section className="bodyText pb-2 text-justify" id="graphics">
            <div>
            <br/>
                <p>
                    Social media can be a great platform for building brand
                    awareness, increasing conversions, and engaging with your
                    audience. Quality is key and content is no exception.
                </p>
                <br/>
            </div> 
        </section>
        {/* <h1>Social Media Samples</h1>
                  <p>
                    These are some of the posts I have made with previous employers
                  </p>
        <section> */}
        <section>
        {/* <CardColumns>
        <Card style={{  border:"none" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/nsb_social_1.jpeg"}
            />
          </Card>        
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/nsbSocialPost_2.jpeg"}
            />
          </Card>
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/ig_skrillex.png"}
            />
          </Card>
        </CardColumns> */}
        </section>
            <Row>
                <Col ms={6} m-2>
                    <img
                        src={
                            "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/nsb_social_1.jpeg"
                        }
                        width="100%"
                        // height="50%"
                        alt="New Smyrna Beach Social Media Post"
                    />
                </Col>
                <Col m-2>
                    <img
                        src={
                            "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/nsbSocialPost_2.jpeg"
                        }
                        width="100%"
                        // height="50%"
                        alt="New Smyrna Beach Social Media Post"
                    />
                </Col>
                <Col m-2>
                    <img
                        src={
                            "https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/ig_skrillex.png"
                        }
                        width="100%"
                        // height="50%"
                        alt="New Smyrna Beach Social Media Post"
                    />
                </Col>                
                {/* <Col>
                  <h1>Social Media Samples</h1>
                  <p>
                    These are some of the posts I have made with previous employers
                  </p>
                </Col> */}
            </Row>
    </Container>
);

export default SocialMedia;
