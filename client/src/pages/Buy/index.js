import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MediaCard from "../../components/MediaCard/index";
import { Consumer } from "../../utils/GlobalState";
import "./buy.css";

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
      <Consumer>
        {state =>
          state[0].user ?
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
          : <Redirect to="/login" />
        }
      </Consumer>
    );
  }
}

export default Buy;
