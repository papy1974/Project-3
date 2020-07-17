import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form, Button } from "react-bootstrap";
import API from "../../utils/API";
import Login from "../../pages/Login";
import "./signup.css";

function Signup() {
  const [formObject, setFormObject] = useState({});
  const [willRedirect, setWillRedirect] = useState(false);

  function signUpUser(e) {
    e.preventDefault();

    // Setting our component's initial state
    if (!formObject.email || !formObject.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.userSignup(formObject)
      .then(res => {
        setFormObject({
          email: "",
          password: ""
        });
        setWillRedirect(true);
      })
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value })
  };

  return (
    <div>
      {willRedirect ?
        <Redirect to="/login" />
        :
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

              <Button variant="primary" type="submit" onClick={signUpUser}>SIGN UP</Button>
            </Form>
          </Row>
        </Container>
      }
    </div>
  );
}

export default Signup;
