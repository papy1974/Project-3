import React from "react";
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
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
        <Button className="submit-btn" type="submit">
            Log In
        </Button>
      </Link>
      </Col>
      </Row>
      <Row>
      <Card>
    <Card.Body>
      <Card.Text>
       Welcome to Exchanging Hands. This is an online retail space with all proceeds going to a charity of your choice. Purchase products you enjoy, sell items for a good cause, or donate directly to your favorite cause.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="/maria-oswalt-uKHyDoZLx5E-unsplash.jpg" />
  </Card>
      </Row>
    </Container>
  );
  
 
}

export default Welcome;
