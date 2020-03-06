import React, { Component } from 'react';
import './Creative.css';
import {Container, Card, Row, Col, CardColumns } from 'react-bootstrap';


class Creative extends Component {
    render() {
        return (
            <Container style={{ backgroundColor:"white"  }}>
                <Row>
                    <Col xs={6} md={4}>
                        <h1 className="creativeHeader">Creative.</h1>
                    </Col>
                </Row>
                    <br/>
                <CardColumns> 
                        <Card style={{ width: '18rem', padding:'3px' }} border="dark">
                            <Card.Img variant="top" src={require("../../images/oishiSushiLogo.png")} />
                                <Card.Footer style={{textAlign:"center"}}>
                                    Sushi Restaraunt - "Oishi Sushi" 
                                </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem', padding: '3px' }} border="dark">
                            <Card.Img variant="top" src={require("../../images/parseroCafe.jpg")} />
                                <Card.Footer style={{ textAlign: "center" }}>
                                    Coffee Brand - "Parsero Cafe"
                                 </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem', padding: '3px' }} border="dark">
                            <Card.Img variant="top" src={require("../../images/skullAndBones.jpg")} />
                                <Card.Footer style={{ textAlign: "center" }}>
                                    Clothing Brand - "Skull & Roses"
                                </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem', padding: '3px' }} border="dark">
                            <Card.Img variant="top" src={require("../../images/codeNasty.png")} />
                                <Card.Footer style={{ textAlign: "center" }}>
                                    Musical Artist Logo - "CodeNasty"
                            </Card.Footer>
                        </Card>                           
                </CardColumns>             

                  

                <br/>

            
            
            
            
            
            
            
            
           
            
            </Container>

        );
    }
}

export default Creative;