import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="topnav">
      <div className="container">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Nav;
