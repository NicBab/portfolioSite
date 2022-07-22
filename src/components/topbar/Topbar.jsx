import React from "react";
import "./Topbar.css";

import { Hamburger, NavLinks, Social } from "../compIndex";

const Topbar = () => {
  return (
    <div className="topBar">
      <Hamburger />
      <NavLinks />
      <Social />
    </div>
  );
};

export default Topbar;
