import React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <Link to="/" className="home">
        HOME
      </Link>
      <Link to="/bio" className="bio">
        BIO
      </Link>
      <Link to="/portfolio" className="portfolio">
        WORK
      </Link>
      <Link to="/resume" className="resume">
        RESUME
      </Link>
      <Link to="/contact" className="contact">
        CONTACT
      </Link>
    </div>
  );
};

export default NavLinks;
