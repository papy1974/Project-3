import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./welcome.css";

function Welcome() {
  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Text>
              Welcome to Exchanging Hands. This is an online retail space with
              all proceeds going to a charity of your choice. Purchase products
              you enjoy, sell items for a good cause, or donate directly to your
              favorite cause.
            </Card.Text>
            <Card.Text>
              <Col className="text-center">
                <Link to="/signup">
                  <Button className="submit-btn">SIGN UP</Button>
                </Link>

                <Link to="/login">
                  <Button className="submit-btn">LOG IN</Button>
                </Link>
              </Col>
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src="/maria-oswalt-uKHyDoZLx5E-unsplash.jpg"
          />
        </Card>
      </Row>
    </Container>
  );
}

export default Welcome;
