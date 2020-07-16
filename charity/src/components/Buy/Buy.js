import React from "react";
import Header from "../Header/Header";
import filter from "./images/filter.png";
import cart from "./images/cart.png";
import box from "./images/item.png";
import "./style.css";

class Buy extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("called", document.getElementById("buy"));
  }
  render() {
    return (
      <div className="BuyMainDiv">
        <Header />
        <div className="searchMainDiv">
          <div className="row">
            <div className="col-4">
              <div className="filterPlaceHolder">
                <img src={filter} alt="home" className="imageIcon"></img>
              </div>
            </div>
            <div className="col-4">
              <input
                className="textBox"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            <div className="col-4">
              <div className="cartPlaceHolder">
                <img src={cart} alt="home" className="imageIcon"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="itemsDisplayMainDiv">
          <div className="row">
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
            <div className="col-4">
              <div className="boxPlaceHolder">
                <img src={box} alt="item"></img>
              </div>
              <div className="textCenter textFont">Name</div>
              <div className="textCenter textFont">$$$</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
