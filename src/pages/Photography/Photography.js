import React, { Component } from "react";
import "./Photography.css";
import { Container, Card, CardColumns } from "react-bootstrap";

class Creative extends Component {
  render() {
    return (
      <div className="pageContent photographyPage">
        <header className="pageHeader">Photography</header>
        <Container>
          <CardColumns>
            <Card style={{ width: "60vw", padding: "3px" }} border="light">
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/fu1xCQboQkUF8SzMNHVjWo4622c0SD-wCwZldtkVibl9z9BaNEebuGHCvDnS4HDIN6mAw2eNfBNLBengK744YjOO7pTSAHiY31cU2kXuKAOP_Uwf2XRjyvfIijbC6GpoX_O39ZF9F00pNFR1Sv3w6pTmUmtCh6g9YtQkOaKMta7GyWXQocZiZZ2xkaCgJIeDS9K-TiJRi8tUOKFbPI6eTRaRzPooTZ4j-KQOHM5ABcKMfIAw3DuEHdz6IIzzwvN4rxZmvX-3vnf3WxmHdpH6AmcRrzyanNS24jRUvuVY5eWU9vsRfNlRTfM_p0q4BAY_B4AngrvNX5eDlifA0qPac6urGXLfXCChRIWsFNfyrHBkKX9EyQMqBUMJWxkQwzOZoku7sLvzgwoZy9yEaPVa4S1Q3OE-nMGnA8fzzCzKfNk7p8exZxP332vHwR7GZ_u7Kb_TZhFJS5Fh6TuZX3LkyGaFCaSLXKAUDDduKtzeyphXHtDNP2_d71QHmjGeS9o0zKT0LLnUiPFP3nGP4eq70oX-K2jtA03h3q_Om7QVgy0ENqWZA3o3GaERliCtz_QKNTpP7r4hGumlYpnXPlibeQUi5tNHneUke-26wAQm9znYzWCYCPR0-azz6GAnjX_anAxMAlDxmuCYLH0vOdO7ri8tFQUtbRkO4PFLqXGT2FBVuT6BI92ZSbxWDA8=w1680-h1260-no?authuser=0"
              />
              <Card.Footer style={{ textAlign: "center" }}>
                Cuba 2019
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
