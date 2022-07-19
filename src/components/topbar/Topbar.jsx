import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { Hamburger } from "../compIndex";

const Topbar = () => {
  return (
    <>
      <div className="topNav">
    <Hamburger/>
        <div className="navLinks">
          <Link to="/" className="home">
            HOME
          </Link>
          <Link to="/bio" className="bio">
            BIO
          </Link>
          <Link to="/portfolio" className="portfolio">
            PORTFOLIO
          </Link>
          <Link to="/resume" className="resume">
            RESUME
          </Link>
          <Link to="/contact" className="contact">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topbar;
