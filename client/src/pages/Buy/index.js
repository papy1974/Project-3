import React, {useState} from "react";
import { Container, Row } from 'react-bootstrap';
import ProductCard from "../../components/Product Card";
import "./buy.css";



function Buy() {
  
  const [products, setProducts] = useState([{key: 1, name: 'Vase', img: '/example.vase.png', price: 200, desc: 'Decorative Vase for Charity'}, {key: 1, name: 'Vase', img: '/example.vase.png', price: 200, desc: 'Decorative Vase for Charity'}]);

  return (
    <Container>
      <Row>
        <p>Buy Page!</p>
      </Row>
      <Row>
        {products.map((product) => (
          <ProductCard
          key={product.key}
          img={product.img}
          name={product.name}
          price={product.price}
          desc={product.desc}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Buy;
