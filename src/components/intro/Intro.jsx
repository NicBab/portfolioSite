import React from "react";
import "./Intro.css";
import drumPic from "../../image/IMG_3364.jpeg"

const Intro = () => {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="introLeftWrapper">
          <h2 className="introHello">Hello, My name is</h2>
          <h1 className="introName">Nick Babineaux</h1>
          <div className="introTitle">
            <div className="introTitleWrapper">
              <div className="introTitleItem">Fullstack</div>
              <div className="introTitleItem">Web</div>
              <div className="introTitleItem">UI/UX</div>
            </div>
          </div>
          <div className="introDescription">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </div>
        </div>
      </div>
      <div className="introRight">
        <div className="introImgBackground"></div>
        <img src={drumPic} alt="" className="introImg" />
      </div>
    </div>
  );
};

export default Intro;
