import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MediaCard from "../../components/MediaCard/index";
import { Consumer } from "../../utils/GlobalState";
import "./buy.css";
import API from "../../utils/API";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: "16",
      itemsToDisplay: [],
      sessionNotes: [],
    };
  }

  search(key) {
    console.log(key.target.value);
    let itemsToDisplayLocal = [];
    console.log(this.state.sessionNotes);
    this.state.sessionNotes.map(r => {
      console.log(r);
      if (
        r.item_name.toLowerCase().indexOf(key.target.value.toLowerCase()) >= 0
      ) {
        itemsToDisplayLocal.push(r);
      }
      return r;
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
    //*   <Consumer>
      //state =>
        //state[0].user ?
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
           //* : <Redirect to="/login" />
         //} 
      //</Consumer>*/}
    );
  }
}

export default Buy;
