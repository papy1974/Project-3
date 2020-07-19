import React, { Component } from "react";
import "./cart.css";
import Paypal from "../../components/Paypal";
import { Container, Row } from "react-bootstrap";
import { toInteger } from "lodash";
import API from "../../utils/API";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0,
    };
    // let data = JSON.parse(localStorage.getItem("cart"));
    // console.log("data", data);
    
  }
  onSuccess(payment) {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    const obj = {
      paypal_pay_id: payment.paymentID,
      user_name: payment.address.recipient_name,
      user_address: 
      payment.address.line1 + 
      payment.address.city + 
      payment.address.state + 
      payment.address.country_code + 
      payment.address.postal_code,
    };
    console.log("My obj");
    // API Route to add payment object to Order table
    API.postOrder(obj)
    .then(res => console.log(res))
    .catch(err => console.log(err));

  }

  onCancel(data) {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  onError(err) {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  componentDidMount() {
    // this.setState({
    //   items: JSON.parse(localStorage.getItem("cart")).cart,
    // });
    // console.log("set", this.state.items);
    // let user_id = 1;
    API.displayCartItems().then((resp) => {
      this.setState({ items: resp.data });
      console.log(resp);
    });
  }
  render() {
    let page = [];
    let totalPrice = 0;
    this.setState({total: totalPrice});
    for (let i = 0; i < this.state.items.length; i++) {
       totalPrice +=
        toInteger(this.state.items[i]["item.item_price"]) *
        this.state.items[i]["item_quantity"];
      page.push(
        <tbody>
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{this.state.items[i]["item.item_name"]}</td>
            <td> {this.state.items[i]["item_quantity"]}</td>
            <td> $ {this.state.items[i]["item.item_price"]}</td>
          </tr>
        </tbody>
      );
    }
    
    return (
      <div>
        <div>
          <Container style={{ marginTop: "90px" }}>
            <Row>
              <table className="table">
                <thead className="thead-dark">
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
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Total Price</th>
                    <th scope="col">$ {totalPrice}</th>
                  </tr>
                </thead>
              </table>
            </Row>
            <Row>
              <Paypal
                total={totalPrice}
                onError={this.onError}
                onSuccess={this.onSuccess}
                onCancel={this.onCancel}
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Cart;
