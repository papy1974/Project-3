import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import "./navibar.css";
import { useUserContext } from "../../utils/GlobalState";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navibar() {
  const [state] = useUserContext();

  return (
    
    <Navbar className="color-nav"  variant="light">

      <Link className="navbar-brand" to="/"></Link>
      <Link className="navbar-brand" to="/home" style={{color:"red"}}>
        Home
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
           
      <span className="float-right"><strong><h4>{state.user ? state.user.firstName : ""}</h4></strong></span>
     
    </Navbar>
  );
}

export default Navibar;
