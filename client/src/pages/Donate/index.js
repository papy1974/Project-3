import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./donate.css";
import API from "../../utils/API";
import LI from "../../components/LI/index";

function Donate() {
  const [charities, setCharities] = useState([]);
  const [search, setSearch] = useState("");
  const inputEl = React.useRef();

  function handleClick () {
    {
      API.searchApi({ body: search }).then((res) => {
        const result = res.data;
        console.log(result);
        setCharities(result);
        })
        .catch(err => console.log(err))

    }
  }

  return (
    <Container>
      <Row>
        <p>Donate Page!</p>
        </Row>
        <Row>
          <input
          type="search"
          placeholder="Charity Search"
          ref={inputEl}
          onChange={() => {
            setSearch(inputEl.current.value.trim());
            console.log(search);
          }}
        />
        
        <button onClick={() => handleClick()}>Search</button>
       </Row>
       <Row>
        <ul>
          {charities.map((charity) => (
            <LI
            key={charity.ein}
            charityName={charity.charityName}
            />
          ))}
        </ul>
        </Row>
    </Container>
  );
}

export default Donate;
