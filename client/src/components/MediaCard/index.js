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
              class="btn btn-secondary btn-lg btn-block"
              onClick={() => this.addTocart(this.props.sessionNote)}
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

