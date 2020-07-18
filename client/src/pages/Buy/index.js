import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MediaCard from "../../components/MediaCard/index";
import { Consumer } from "../../utils/GlobalState";
import "./buy.css";
import axios from "axios";
import API from "../../utils/API";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: "16",
      itemsToDisplay: [{ 
            user_id: 1,
            item_name: "a",
            item_price: 12,
            item_quantity: 1,
            item_desc: 'asdv',
            item_img_url: 'aaa'
          }],
      sessionNotes: [{ 
        user_id: 1,
        item_name: "a",
        item_price: 12,
        item_quantity: 1,
        item_desc: 'asdv',
        item_img_url: 'aaa'
      }],
    };
  }

  // handleAddToCart() {
  //   console.log()
  //   API.addToCart({ 
  //     user_id: 1,
  //     item_name: "a",
  //     item_price: 12,
  //     item_quantity: 1,
  //     item_desc: 'asdv',
  //     item_img_url: 'aaa'
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  // }

  search(key) {
    console.log(key.target.value);
    let itemsToDisplayLocal = [];
    console.log(this.state.sessionNotes);
    this.state.sessionNotes.map((r, i) => {
      console.log(r);
      if (
        r.item_name.toLowerCase().indexOf(key.target.value.toLowerCase()) >= 0
      ) {
        itemsToDisplayLocal.push(r);
      }
    });
    this.setState({
      itemsToDisplay: itemsToDisplayLocal,
    });
  }

  componentDidMount() {
    API.itemData().then((res) => {
      console.log(res.data);

      this.setState({
        sessionNotes: res.data,
        itemsToDisplay: res.data,
      });
    }).catch(err => console.log(err));
    console.log("itd", this.state.itemsToDisplay);
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    let page = [];
    console.log("items", this.state.itemsToDisplay);
    for (let i = 0; i < this.state.itemsToDisplay.length; i++)
      page.push(
        <Col xs={4} style={{ marginTop: "50px" }}>
          <MediaCard sessionNote={this.state.itemsToDisplay[i]} />
        </Col>
      );
    console.log("page");
    if (this.state.isLoading) {
      return <p>Loading Please Wait....</p>;
    }

    return (
      <Consumer>
        {state =>
          state[0].user ?
          <Container 
          style={{ marginTop: "50px" }}
          >
            <Row>
              <input
                className="form-control"
                style={{ fontSize: "35px", minHeight: "85px" }}
                type="text"
                placeholder="Search"
                id="filterText"
                onChange={this.search.bind(this)}
              />
            </Row>
            <Row>{page}</Row>
          </Container>
          : <Redirect to="/login" />
        }
      </Consumer>
    );
  }
}

export default Buy;
