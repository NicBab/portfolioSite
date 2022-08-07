import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import drumPic from "../../image/IMG_3364.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <div className="cardBackground"></div>
        <div className="aboutCard">
          <img src={drumPic} alt="" className="drumPic" />
        </div>
      </div>
      <div className="aboutRight">
        <div className="aboutDescWrapper">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
        </div>
        <Link to="/bio">
          <button className="moreAboutBtn">
            MORE ABOUT ME
            <ArrowForwardIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
