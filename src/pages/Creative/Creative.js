import React, { Component } from "react";
import "./Creative.css";
import { Container, Card, Row, Col, CardColumns } from "react-bootstrap";

class Creative extends Component {
  render() {
    return (
      <div className="pageContent">
        <header className="pageHeader">Creative </header>
        <Container style={{ backgroundColor: "mediumseagreen" }}>
          <CardColumns>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={require("../../images/oishiSushiLogo.png")}
              />
              <Card.Footer style={{ textAlign: "center" }}>
                Sushi Restaraunt - "Oishi Sushi"
              </Card.Footer>
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={require("../../images/parseroCafe.jpg")}
              />
              <Card.Footer style={{ textAlign: "center" }}>
                Coffee Brand - "Parsero Cafe"
              </Card.Footer>
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={require("../../images/skullAndBones.jpg")}
              />
              <Card.Footer style={{ textAlign: "center" }}>
                Clothing Brand - "Skull & Roses"
              </Card.Footer>
            </Card>
            <Card style={{ width: "100%", padding: "3px" }} border="dark">
              <Card.Img
                variant="top"
                src={require("../../images/codeNasty.png")}
              />
              <Card.Footer style={{ textAlign: "center" }}>
                Musical Artist Logo - "CodeNasty"
              </Card.Footer>
            </Card>
          </CardColumns>
          <br />
        </Container>
      </div>
    );
  }
}

export default Creative;
