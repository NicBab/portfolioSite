import React from "react";
import "./FootLinks.css";
import { Link } from "react-router-dom";

const FootLinks = () => {

  return (
    <>
      <div className="footLinks">
        <Link to="/" className="footLink">
          HOME
        </Link>
        <Link to="/bio" className="footLink">
          BIO
        </Link>
        <Link to="/portfolio" className="footLink">
          PORTFOLIO
        </Link>
        <Link to="/resume" className="footLink">
          RESUME
        </Link>
        <Link to="/contact" className="footLink">
          CONTACT
        </Link>
      </div>
    </>
  );
};

export default FootLinks;
