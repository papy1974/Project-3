import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./sell.css";
import Form from '../../components/Form';


function Sell() {

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async event => {

    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "forsaleitems");
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/dncdjgcih/image/upload",
    { method: "POST",
      body: data
    });

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  }
  
  return (
    <Container>
      <Row>
        {loading ? (<h3>Loading...</h3>)
        : (<img src={image} style = {{width: "500px"}} />)}
      </Row>
      <br />
      <Row>
        <Form>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="item name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Item Quantity</Form.Label>
              <Form.Control type="text" placeholder="item quantity" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Unit Price</Form.Label>
              <Form.Control type="text" placeholder="unit price" />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Item Description</Form.Label>
            <Form.Control placeholder="item description" />
          </Form.Group>

          <Form.Group >
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" name="file" onChange={uploadImage} placeholder="image" />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <Row>
        <Form
        />
      </Row>
    </Container>
  );
}

export default Sell;
