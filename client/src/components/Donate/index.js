import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./donate.css";
import API from "../../utils/API";
import DropdownItem from "../Dropdown Item/index";

function Donate() {
  const [charities, setCharities] = useState([]);
  const [search, setSearch] = useState("");
  const [donate, setDonate] = useState("");
  const [charitySelector, setCharitySelector] = useState("");
  const inputEl = React.useRef();
  const donationRef = React.useRef();
  const charitySelectorRef = React.useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick() {
    API.searchApi({ body: search })
      .then((res) => {
        const result = res.data;
        console.log(result);
        setCharities(result);
      })
      .catch((err) => console.log(err));
  }

  function donationToCart() {
    alert("Added to cart: $" + donate + "donation to " + charitySelector);
  }

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Donate
      </Button>
      <Modal size="lg" backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="m-2" style={{ backgroundColor: "" }}>
            <h1>Donate!</h1>
            Search for the charity of your choosing, select them, and add a
            donation amount to add funds raised to your chart.
          </Modal.Title>
        </Modal.Header>
        <div className="container">
          <Modal.Body className="show-grid">missin statement here</Modal.Body>
        </div>
        <Modal.Body className="show-grid">
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
              <Button type="submit" onClick={() => handleClick()}>
                Search
              </Button>
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
              <Button type="submit" onClick={() => donationToCart()}>
                Donate
              </Button>
            </Col>
          </Row>
          <Row>
            <select
              className="m-2"
              ref={charitySelectorRef}
              onChange={() => {
                setCharitySelector(charitySelectorRef.current.value.trim());
                console.log(charitySelector);
              }}
            >
              {charities.map((charity) => (
                <DropdownItem
                  key={charity.ein}
                  charityName={charity.charityName}
                />
              ))}
            </select>
            <Col sm={12} className="text-center">
              <Button>Charity Contribution Tracker</Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Donate;
