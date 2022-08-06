import React from "react";
import "./Topbar.css";
import { Hamburger, NavLinks, Plus, Logo } from "../compIndex";

const Topbar = () => {
  return (
    <div className="topBar">
      <Hamburger />
      <Logo />
      <NavLinks />
      <Plus />
    </div>
  );
};

export default Topbar;
