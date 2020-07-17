import React, { Component } from "react";
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

  addTocart(itemTocart) {
    itemTocart.count = this.state.count;
    let item = JSON.parse(localStorage.getItem("cart"));
    if (!item) {
      item = {
        cart: [itemTocart],
        count: 0,
      };
    } else {
      let i;
      for (i = 0; i < item.cart.length; i++) {
        if (itemTocart.id === item.cart[i].id) {
          break;
        }
      }
      item.cart.splice(i, 1);
      item.cart.push(itemTocart);
    }
    item.count = item.count + 1;
    console.log("itemss", item);
    localStorage.setItem("cart", JSON.stringify(item));
    this.setState({
      notAdded: false,
      count: this.state.count + 1,
    });
    window.location.reload();
  }
  render() {
    return (
      <MuiThemeProvider>
        <Card style={{ backgroundColor: "cornflowerblue" }}>
          {/* <CardMedia>
          
          </CardMedia> */}
          <CardTitle
            titleStyle={{ fontSize: "50px" }}
            title={this.props.sessionNote.name}
          />
          <CardText style={{ fontSize: "35px" }}>
            $ {this.props.sessionNote.price}
          </CardText>
          <CardActions>
            <button
              type="button"
              class="btn btn-secondary btn-lg btn-block"
              onClick={() => this.addTocart(this.props.sessionNote)}
            >
              BUY
            </button>

            {/* {!this.state.notAdded && (
              <FlatButton
                label={this.state.count}
                onClick={() => this.addTocart(this.props.sessionNote)}
              />
            )} */}
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}
export default MediaCard;

