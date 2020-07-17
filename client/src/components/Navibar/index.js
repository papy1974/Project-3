import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
//import "./navibar.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navibar() {

  const [user, setUser] = useState("User");

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"></Link>
      <Link className="navbar-brand" to="/home">
        Home
      </Link>
      <Link className="navbar-brand" to="/signup">
        Sign up
      </Link>
      <Link className="navbar-brand" to="/buy">
        Buy
      </Link>
      <Link className="navbar-brand" to="/sell">
        Sell
      </Link>
      <Link className="navbar-brand" to="/cart">
        Cart
      </Link>
      <Link className="navbar-brand" to="/donate">
        Donate
      </Link>
  <Nav className="ml-auto"><strong >{user}</strong></Nav>
    </Navbar>
        
  );
}

export default Navibar;
