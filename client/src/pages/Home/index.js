import React, { useState} from "react";
import { Container, Row, Button, Carousel} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./home.css";


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <h2><p>What would you like to do?</p></h2>
      </Row>

      <Row>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
              src="https://placehold.it/800x400"
              alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
              src="https://placehold.it/800x400"
              alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
              src="https://placehold.it/800x400"
              alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        </Row>
       
        <Row>
          <Link to="/buy">
            <Button className="submit-btn" type="submit">
              Buy
            </Button>
          </Link>
          <Link to="/sell">
            <Button className="submit-btn" type="submit">
              Sell
            </Button>
          </Link>
          <Link to="/donate">
            <Button className="submit-btn" type="submit">
              Donate
            </Button>
          </Link>
        </Row>
      
    </Container>
  );
}

export default Home;
