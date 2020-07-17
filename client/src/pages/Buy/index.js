import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import ProductCard from "../../components/Product Card";
import "./buy.css";
import { useUserContext } from "../../utils/GlobalState";
import Login from "../Login";

function Buy() {
  const [state, _] = useUserContext();
  const [products, setProducts] = useState([{ key: 1, name: 'Vase', price: 200, desc: 'Decorative Vase for Charity' }]);

  return (
    <div>
      {state.user ?
        <Container>
          <Row>
            <p>Buy Page!</p>
          </Row>
          <Row>
            {products.map((product) => (
              <ProductCard
                key={product.key}
                name={product.name}
                price={product.price}
                desc={product.desc}
              />
            ))}
          </Row>
        </Container>
        : <Redirect to={"/login"} />
      }
    </div>
  );
}

export default Buy;
