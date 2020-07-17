import React from "react";
import { Container, Row, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./welcome.css";


function Welcome() {

  return (
    <Container>
      <Row>
        <p>Welcome Page!</p>
      </Row>
      <Link to="/signup">
        <Button className="submit-btn" type="submit">
            START
        </Button>
      </Link>
    </Container>
  );
  
 
}

export default Welcome;
