import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap"
import { useUserContext } from "../../utils/GlobalState";
import API from "../../utils/API"
import "./login.css";

function Login() {
  const [dispatch] = useUserContext();
  const [formObject, setFormObject] = useState({});

  function LogUserIn(event) {
    event.preventDefault();

    // Setting our component's initial state
    if (!formObject.email || !formObject.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.loginUser(formObject)
      .then(res => {
        console.log(res.data);
        dispatch({ type: 'login', user: res.data });
      })
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value })
  };

  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" onChange={handleInputChange} placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={LogUserIn}>LOGIN</Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
