import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <h2>SimpleReactRouter</h2>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          {" "}
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          {" "}
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
export default Navbar;
