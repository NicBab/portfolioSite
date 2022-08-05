import React from "react";
import "./Intro.css";
import sipPic from "../../image/17037709-5A5F-41F2-A024-3EF7A2E76EA1_1_105_c.jpeg";
import { FootSocial } from "../compIndex"

const Intro = () => {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="introLeftWrapper">
          <h2 className="introHello">Hello, My name is,</h2>
          <h1 className="introName">Nick Babineaux</h1>
          <div className="introTitle">
            <div className="introTitleWrapper">
              <div className="introTitleItem">Fullstack</div>
              <div className="introTitleItem">Web</div>
              <div className="introTitleItem">UI/UX</div>
            </div>
          </div>
          <div className="introDescription">
            Specializing in creative, stylish, functional modern websites, web services and E-commerce.
            <div className="i-desc-social">
              <FootSocial/>
            </div>
          </div>
        </div>
      </div>
      <div className="introRight">
        <div className="introImgBackground"></div>
        <img src={sipPic} alt="" className="introImg" />
      </div>
    </div>
  );
};

export default Intro;
