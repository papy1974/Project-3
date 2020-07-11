import React from "react";
import { Container, Row } from 'react-bootstrap';
import "./donate.css";
import { searchApi } from "../../utils/API";
import API from "../../utils/API";

function Donate() {
  
  return (
    <Container>
      <Row>
        <p>Donate Page!</p>
        <input type="search" placeholder="Charity Search" id="search"/>
        <button onClick={(e => {
          const search = document.getElementById("search").val();
          API.searchApi(search);
        })}>Search</button>
      </Row>
    </Container>
  );
}

export default Donate;
