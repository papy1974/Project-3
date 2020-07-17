import React, { Component } from "react";

import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { isInteger, toInteger } from "lodash";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "name1",
          price: "40",
          count: 1,
        },
        {
          name: "name2",
          price: "40",
          count: 1,
        },
        {
          name: "name3",
          price: "50",
          count: 1,
        },
      ],
    };
    // let data = JSON.parse(localStorage.getItem("cart"));
    // console.log("data", data);
  }
  onSuccess (payment) {
    // Congratulation, it came here means everything's fine!
        console.log("The payment was succeeded!", payment);
        // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
}

onCancel(data) {
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
}

 onError (err) {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
}

  componentWillMount() {
    // this.setState({
    //   items: JSON.parse(localStorage.getItem("cart")).cart,
    // });
    // console.log("set", this.state.items);
  }
  render() {
    let page = [];
    let totalPrice = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      totalPrice += toInteger(this.state.items[i].price);
      page.push(
        <tbody>
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{this.state.items[i].name}</td>
            <td> {this.state.items[i].count + 1}</td>
            <td> $ {this.state.items[i].price}</td>
          </tr>
        </tbody>
      );
    }
    return (
      <div>
        <div>
          <Container style={{ marginTop: "90px" }}>
            <Row>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Qty.</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                {page}
              </table>
            </Row>
            <Row>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Total Price</th>
                    <th scope="col">$ {totalPrice}</th>
                  </tr>
                </thead>
              </table>
            </Row>
           <Row>
        <Paypal
        onError={this.onError} 
        onSuccess={this.onSuccess}
        onCancel={this.onCancel} />
       
      </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Cart;
