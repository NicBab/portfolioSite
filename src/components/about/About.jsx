import React from "react";
import "./About.css";
import ME from "../../image/AD9772C5-CF2B-41C2-9C6A-7D97D7EC8D35_1_105_c.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        Left
        <div className="cardBackground">
          <div className="aboutCard">
            <img src={ME} alt="" className="aboutImg" />
          </div>
        </div>
      </div>
      <div className="aboutRight">Right</div>
    </div>
  );
};

export default About;
