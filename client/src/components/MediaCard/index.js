import React, { Component } from "react";
import API from "../../utils/API";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class MediaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notAdded: true,
      count: 0,
    };
  }

  // handleAddToCart(itemTocart) {
  //   itemTocart.count = this.state.count;
  //   let item = JSON.parse(localStorage.getItem("cart"));
  //   if (!item) {
  //     item = {
  //       cart: [itemTocart],
  //       count: 0,
  //     };
  //   } else {
  //     let i;
  //     for (i = 0; i < item.cart.length; i++) {
  //       if (itemTocart.id === item.cart[i].id) {
  //         break;
  //       }
  //     }
  //     item.cart.splice(i, 1);
  //     item.cart.push(itemTocart);
  //   }
  //   item.count = item.count + 1;
  //   API.addToCart({
  //     user_id: 1,
  //         item_name: item.name,
  //         item_price: item.price,
  //         item_quantity: 1,
  //         item_desc: item.qty,
  //         item_img_url: 'aaa'
  //   })
  //   console.log("items", item);
  //   localStorage.setItem("cart", JSON.stringify(item));
  //   this.setState({
  //     notAdded: false,
  //     count: this.state.count + 1,
  addTocart(itemTocart) {
    let data = {
      item_model: itemTocart.id,
      item_quantity: 1,
      item_type: "buy",
      user_id: 1,
    };
    API.addToCart(data).catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardMedia>
            <img src={this.props.sessionNote.item_img_url} alt="" />
          </CardMedia>
          <CardTitle
            title={this.props.sessionNote.item_name}
            subtitle={this.props.sessionNote.item_desc}
          />
          <CardText style={{ fontSize: "20px", fontWeight: "600" }}>
            $ {this.props.sessionNote.item_price}
          </CardText>
          <CardActions>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => 
                this.handleAddToCart(this.props.sessionNote)
              }
            >
              BUY
            </button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}
export default MediaCard;

