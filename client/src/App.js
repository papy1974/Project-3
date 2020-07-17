import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Donate from "./pages/Donate";
import Cart from "./pages/Cart";
import Welcome from "./pages/Welcome";
import Navibar from "./components/Navibar";
import Wrapper from "./components/Wrapper";

import "./App.css";
import { UserProvider } from "./utils/GlobalState";

function App() {
  document.title = "Charities";

  return (
    <Router>
      <Wrapper>
        <UserProvider>
          <Navibar />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/cart" component={Cart} />
        </UserProvider>
      </Wrapper>
    </Router>
  );
}

export default App;
