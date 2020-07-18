import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "./navibar.css";
import { useUserContext } from "../../utils/GlobalState";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navibar() {
  const [state, _] = useUserContext();

  return (
    
    <Navbar className="color-nav"  variant="light">

      <Link className="navbar-brand" to="/"></Link>
      <Link className="navbar-brand" to="/home"  style={{color:"red"}}>
        Home
      </Link>
      <Link className="navbar-brand" to="/signup" style={{color:"red"}}>
        Sign up
      </Link>
      <Link className="navbar-brand" to="/buy" style={{color:"red"}}>
        Buy
      </Link>
      <Link className="navbar-brand" to="/sell" style={{color:"red"}}>
        Sell
      </Link>
      <Link className="navbar-brand" to="/cart" style={{color:"red"}}>
        Cart
      </Link>
      <Link className="navbar-brand" to="/donate" style={{color:"red"}}>
        Donate
      </Link>
      <strong className="float-right">{state.user ? state.user.firstName : ""}</strong>
    </Navbar>
  );
}

export default Navibar;
