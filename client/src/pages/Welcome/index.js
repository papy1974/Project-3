import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./welcome.css";

function Welcome() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <p>Welcome Page!</p>
        </Col>
        <Col sm={6}>
          <Link to="/signup">
            <Button className="submit-btn" type="submit">Log In</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Text>Welcome to Exchanging Hands. This is an online</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </Row>
    </Container>
  );
}

export default Welcome;
