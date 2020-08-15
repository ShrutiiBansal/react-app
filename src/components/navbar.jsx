import React, { Component } from "react";

//stateless functional component-cannot use lifecycle hooks
//sfc
const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
