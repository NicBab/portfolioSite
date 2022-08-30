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
            Striking balance between functional and aesthetic design...
          </p>
          <p className="a-desc">
            With a passion for developing features utilizing a variety of markup
            languages and frameworks to create web front end, back end, servers,
            databases SQL and noSQL, APIs and enhance the functionality, user
            experience and user interface design, while optimizing web pages for
            maximum speed and scalability. striking a balance between functional
            and aesthetic design. Strong technical background and management
            skills. Excellent troubleshooting, debugging and problem-solving
            skills. Ability to multi-task and a keen eye for detail provide the
            ability to work individually, or as part of a development team to
            create high-level programs that perfectly meet the needs of the
            company.Being able to understand the big picture means being able to
            imagine another way of doing things, one that might work better for
            the organization's goal, employee productivity and job satisfaction
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
