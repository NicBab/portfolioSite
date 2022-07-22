import React from "react";
import "./Topbar.css";

import { Hamburger, NavLinks, Social, Plus } from "../compIndex";

const Topbar = () => {
  return (
    <div className="topBar">
      <Hamburger />
      <NavLinks />
      <Social />
      <Plus />
    </div>
  );
};

export default Topbar;
