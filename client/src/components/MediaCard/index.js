import React, { Component } from "react";
import API from "../../utils/API";

import {
  Card,
  CardActions,
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
  handleAddToCart(itemToCart) {
    
    console.log(itemToCart);

    let data =  
    {
      user_id: itemToCart.user_id,
      item_name: itemToCart.item_name,
      item_price: itemToCart.item_price,
      item_quantity: itemToCart.item_quantity,
      item_desc: itemToCart.item_desc,
      item_img_url: itemToCart.item_img_url
    }
  //   {
  //     item_name: "this.props.sessionNote.item_name",
  //     item_price: 122,
  //     item_quantity: 1,
  //     item_desc: "this.props.sessionNote.item_desc",
  //     item_img_url: "data:image/png;base64,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"
  //   };
  // // ]

    API.addToCart(data)
      .then(res => console.log(res))
      .catch((err) => {
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

