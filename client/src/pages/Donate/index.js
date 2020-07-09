import React from "react";
import { Container, Row } from 'react-bootstrap';
import "./donate.css";
import { searchApi } from "../../../controllers/donation";


function Donate() {
  
  return (
    <Container>
      <Row>
        <p>Donate Page!</p>
        <input type="search" placeholder="Charity Search" id="search"/>
        <button onClick={(e => {
          const search = document.getElementById("search").val();
          searchApi(search);
        })}>Search</button>
      </Row>
    </Container>
  );
}

export default Donate;
