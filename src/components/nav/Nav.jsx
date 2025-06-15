import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="leftPanel flexContainer">
        <h2>React routing</h2>
      </div>
      <div className="rightPanel flexContainer">
        <a href="">Home </a>

        <a href="">Products </a>
        <a href="">Counter</a>
        <a href="">ImageComp </a>
      </div>
    </div>
  );
}

export default Nav;
