import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";
import Welcome from "./pages/Welcome";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import { UserProvider } from "./utils/GlobalState";

const HideNavbar = withRouter (({ location}) => {
  return (
    <div>
      {location.pathname !== "/signup" && location.pathname !== "/login" &&
      location.pathname !== "/" && <Navibar />}
    </div>
  )
})

function App() {
  document.title = "Charities";

  return (
    <Router>
      <Wrapper>
        <UserProvider>
          <HideNavbar />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/cart" component={Cart} />
        </UserProvider>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
