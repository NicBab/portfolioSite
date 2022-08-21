import React from "react";
import "./Footer.css";
import { FootLinks, FootSocial } from "../compIndex";
import gears_Img from "../../image/gears_Img.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerNav">
        <FootSocial />
        <FootLinks />
        <div className="gearsImgWrapper">
          <img src={gears_Img} alt="" className="gearsImg" />
          <span className="devTag">2022 STELLAR INNOVATION</span>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
