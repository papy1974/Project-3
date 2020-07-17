import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MediaCard from "../../components/MediaCard/index";
import "./buy.css";
import axios from "axios";
import API from "../../utils/API";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: "16",
      itemsToDisplay: [],
      sessionNotes: [
        {
          name: "item2",
          qty: "dexcription",
          price: 40,
        },
        {
          name: "item1",
          qty: "dexcription",
          price: 40,
        },
        {
          name: "item1",
          qty: "dexcription",
          price: 40,
        },
        {
          name: "item1",
          qty: "dexcription",
          price: 40,
        },
      ],
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
    this.state.sessionNotes.map((r, i) => {
      if (r.name.indexOf(key.target.value) >= 0) {
        itemsToDisplayLocal.push(r);
      }
    });
    this.setState({
      itemsToDisplay: itemsToDisplayLocal,
    });
  }
  
  componentWillMount() {
    this.setState({
      itemsToDisplay: this.state.sessionNotes,
    });
    console.log("itd", this.state.itemsToDisplay);
    // this.setState({
    //   isLoading: true,
    // });
    // axios
    //   .get(config.host + "/home/buy")
    //   .then((res) => {
    //     this.setState({
    //       sessionNotes: res.data.items,
    //       isLoading: false,
    //       itemsToDisplay: res.data.items,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Something went wrong please try again...");
    //     this.setState({
    //       isLoading: false,
    //     });
    // });
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
      <div>
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <input
              className="form-control"
              style={{ fontSize: "35px", minHeight: "85px" }}
              type="text"
              placeholder="Search"
              id="filterText"
              onChange={this.search.bind(this)}
            ></input>
          </Row>
          <Row>{page}</Row>
        </Container>
      </div>
    );
  }
}

export default Buy;
