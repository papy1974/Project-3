import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Donate from "./pages/Donate";
import Cart from "./pages/Cart";
import Navibar from "./components/Navibar";

import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  document.title = "Charities";
  return (
    <Router>
      <Wrapper>
        <Navibar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/cart" component={Cart} />
      </Wrapper>
    </Router>
  );
}

export default App;
