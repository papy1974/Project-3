import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function ProductCard (props) {

    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>props.ITEMNAME</Card.Title>
    <Card.Text>
      props.PRICE
    </Card.Text>
    <Card.Text>
      props.DESCRIPTION
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>
    )

}

export default ProductCard;