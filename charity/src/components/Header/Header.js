import React from "react";
import "./style.css";
import home from "./images/home.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.selectBuy = this.selectBuy.bind(this);
    this.selectSell = this.selectSell.bind(this);
  }

  selectBuy() {
    document.getElementById("buy").classList.add("selected");
    document.getElementById("sell").classList.remove("selected");
  }
  selectSell() {
    document.getElementById("sell").classList.add("selected");
    document.getElementById("buy").classList.remove("selected");
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-2">
            <div className="homePlaceHolder">
              <img src={home} alt="home" className="imageIcon"></img>
            </div>
          </div>
          <div className="col-9">
            <div className="row mainBar">
              <div
                id="buy"
                className="col-4 rightBorder textCenter"
                onClick={this.selectBuy}
              >
                Buy
              </div>
              <div
                id="sell"
                className="col-4 rightBorder textCenter"
                onClick={this.selectSell}
              >
                Sell
              </div>
              <div id="donate" className="col-4 textCenter">
                Donate
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
