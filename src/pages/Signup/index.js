import React from "react";
import {Container, Row, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  
  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Pleae enter email to sign up here" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
      
          <Button variant="primary" type="submit">
            SIGN UP
          </Button>
          <Link to="/login"> 
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
}

export default Signup;
