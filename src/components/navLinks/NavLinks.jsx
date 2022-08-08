import React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <Link to="/" className="navLink">
        HOME
      </Link>
      <Link to="/bio" className="navLink">
        BIO
      </Link>
      <Link to="/portfolio" className="navLink">
       PORTFOLIO
      </Link>
      <Link to="/resume" className="navLink">
        RESUME
      </Link>
      <Link to="/contact" className="navLink">
        CONTACT
      </Link>
    </div>
  );
};

export default NavLinks;
