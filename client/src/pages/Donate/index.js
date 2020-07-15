import React, { useState } from "react";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import "./donate.css";
import API from "../../utils/API";
import DropdownItem from "../../components/Dropdown Item/index";

function Donate() {
  const [charities, setCharities] = useState([]);
  const [search, setSearch] = useState("");
  const [donate, setDonate] = useState("");
  const [charitySelector, setCharitySelector] = useState("");
  const inputEl = React.useRef();
  const donationRef = React.useRef();
  const charitySelectorRef = React.useRef();

  function handleClick () {
    API.searchApi({ body: search }).then((res) => {
        const result = res.data;
        console.log(result);
        setCharities(result);
        })
        .catch(err => console.log(err))


  }

  function donationToCart () {
    alert("Added to cart: $" + donate + "donation to " + charitySelector);
  }

  return (
    <Container>
      <Row>
      <Jumbotron className="m-2" style={{backgroundColor: ""}}>
  <h1>Donate!</h1>
  <p>
  Search for the charity of your choosing, select them, and add a donation amount to add funds raised to your chart.
  </p>
</Jumbotron>
      </Row>
        <Row>
          <Col sm={6}>
          <input
          type=""
          placeholder="Charity Search"
          ref={inputEl}
          onChange={() => {
            setSearch(inputEl.current.value.trim());
            console.log(search);
          }}
        />
        
        <Button type="submit" onClick={() => handleClick()}>Search</Button>
       </Col>
       <Col sm={6} className="float-right">
         <input 
         type=""
         placeholder="Donation Amount"
          ref={donationRef}
          onChange={() => {
            setDonate(donationRef.current.value.trim());
            console.log(donate);
          }}
         />
         <Button type="submit" onClick={() => donationToCart()}>Donate</Button>
        </Col>
       </Row>
       <Row>
        <select 
            ref={charitySelectorRef}
            onChange={() => {
            setCharitySelector(charitySelectorRef.current.value.trim());
            console.log(charitySelector);
          }}>
          {charities.map((charity) => (
            <DropdownItem
            key={charity.ein}
            charityName={charity.charityName}
            />
          ))}
        </select>
        </Row>
        <Row>
          <div>

          </div>
        </Row>
    </Container>
  );
}

export default Donate;
