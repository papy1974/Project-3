import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function ProductCard (props) {

    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img className="d-block" variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      <p>${props.price}</p>
    </Card.Text>
    <Card.Text>
      {props.desc}
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>
    )

}

export default ProductCard;