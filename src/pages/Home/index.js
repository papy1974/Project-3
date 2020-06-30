import React from "react";
import { Container, Row, Button} from 'react-bootstrap';

import "./home.css";


function Home() {

  return (
    <Container>
      <Row>
        <p>Home Page!</p>
      </Row>
      <Button className="submit-btn" type="submit">
           Login
      </Button>
    </Container>
  );
  
 
}

export default Home;
