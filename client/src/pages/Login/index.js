import React, {useState} from "react";
import {Container, Row, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import API from "../../utils/API"
import "./login.css";

function Login() {
  const [formObject, setFormObject] = useState({});
  

  function LogUserIn() {
    
    // Setting our component's initial state
    if (!formObject.email || !formObject.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.loginUser(formObject.email, formObject.password);
    
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
                          placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          name="password"
                          onChange={handleInputChange}
                          placeholder="Password" />
          </Form.Group>
      
          <Button variant="primary" type="submit" onSubmit={LogUserIn}>
            LOGIN
          </Button>
          <Link to="/signup">
            <Button variant="primary" type="submit">
              SIGN UP
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
