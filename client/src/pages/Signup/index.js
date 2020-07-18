import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";
import API from "../../utils/API";
//import AlertWindow from "../../components/Alertwindow";
import "./signup.css";

function Signup() {
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const passwordInputRef = useRef();
  const [willRedirect, setWillRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [signupStatus, setSignupStatus] = useState();

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
      password: passwordInputRef.current.value,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSignupStatus(true);
          setShow(true);
        }
      })
      .catch((err) => {
        console.log(err);

        setShow(true);
      });
  }

  const handleClose = () => {
    setShow(false);
    if (signupStatus) {
      setWillRedirect(true);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {signupStatus
            ? "You successfully signed up!"
            : "The email you just entered has already been used. Please use a different email to sign up or log in"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {willRedirect ? (
        <Redirect to="/login" />
      ) : (
        <Container>
          <Row>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  ref={firstNameInputRef}
                  type="firstName"
                  name="firstName"
                  placeholder="First name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  ref={lastNameInputRef}
                  type="lastName"
                  name="lastName"
                  placeholder="Last name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passwordInputRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={signUpUser}>
                Sign Up
              </Button>
            </Form>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Signup;
