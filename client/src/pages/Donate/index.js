import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
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
    {
      API.searchApi({ body: search }).then((res) => {
        const result = res.data;
        console.log(result);
        setCharities(result);
        })
        .catch(err => console.log(err))

    }
  }

  function donationToCart () {
    alert("Added to cart: $" + donate + "donation to " + charitySelector);
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
         <input 
         type=""
         placeholder="Donation Amount"
          ref={donationRef}
          onChange={() => {
            setDonate(donationRef.current.value.trim());
            console.log(donate);
          }}
         />
         <button onClick={() => donationToCart()}>Donate</button>
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
