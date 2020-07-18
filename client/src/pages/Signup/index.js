import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form, Button } from "react-bootstrap";
import API from "../../utils/API";
// import Login from "../../pages/Login";
import "./signup.css";

function Signup() {
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const passwordInputRef = useRef();
  const [willRedirect, setWillRedirect] = useState(false);

  function signUpUser(e) {
    e.preventDefault();

    // Setting our component's initial state
    if (!emailInputRef.current.value || !passwordInputRef.current.value) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    API.userSignup({
      email: emailInputRef.current.value,
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      password: passwordInputRef.current.value
    })
      .then(_ => {
        setWillRedirect(true);
      })
      .catch(err => console.log(err));
  }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;

  //   setFormObject({ ...formObject, [name]: value })
  // };

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
                <Form.Control ref={emailInputRef} type="email" name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control ref={firstNameInputRef} type="firstName" name="firstName" placeholder="First name" />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control ref={lastNameInputRef} type="lastName" name="lastName" placeholder="Last name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordInputRef} type="password" name="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={signUpUser}>Sign Up</Button>
            </Form>
          </Row>
        </Container>
      }
    </div>
  );
}

export default Signup;
