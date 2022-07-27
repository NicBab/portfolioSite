import React from "react";
import "./Footer.css";
import { FootLinks, FootSocial } from "../compIndex";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerNav">
        <FootSocial/>
        <FootLinks/>
      </div>
    </div>
  );
};

export default Footer;
