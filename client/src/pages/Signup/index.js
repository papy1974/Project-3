import React, {useState} from "react";
import {Container, Row, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import API from "../../utils/API"
import "./signup.css";

function Signup() {

  const [formObject, setFormObject] = useState({});
  

  function signUpUser() {
    
    // Setting our component's initial state
    if (!formObject.email || !formObject.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.userSignup(formObject.email, formObject.password);
    
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
                          name="email"
                          onChange={handleInputChange}
                          placeholder="Please enter email to sign up here" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          name="password"
                          onChange={handleInputChange}
                          placeholder="Password" />
          </Form.Group>
      
          <Button variant="primary" type="submit" onSubmit={signUpUser}>
            SIGN UP
          </Button>
          <span>OR</span>
          <Link to="/login"> 
            <Button variant="primary" type="submit">
              LOG IN
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
}

export default Signup;
