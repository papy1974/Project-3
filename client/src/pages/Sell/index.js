import React from "react";
import { Container, Row } from 'react-bootstrap';
import "./sell.css";
import Form from '../../components/Form';


function Sell() {
  
  return (
    <Container>
      <Row>
        <p>Sell Page!</p>
      </Row>
      <Row>
        <Form
        />
      </Row>
    </Container>
  );
}

export default Sell;
