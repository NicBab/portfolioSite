import React from "react";
import "./Footer.css";
import { FootLinks, FootSocial } from "../compIndex";
import gearsImg from "../../image/gearsImg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerNav">
        <FootSocial />
        <FootLinks />
        <div className="gearsImgWrapper">
          <img src={gearsImg} alt="" className="gearsImg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
