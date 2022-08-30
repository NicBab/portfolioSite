import React from "react";
// import { Link } from "react-router-dom";
import "./Resume.css";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NickResume from "../../image/Nic_Babineaux_resume.png"

const Resume = () => {
  return (
    <div className="res-pg">
      <div className="res-ctn">
        <img src={NickResume} alt="" className="resPNG"/>
      </div>
    </div>
  );
};

export default Resume;
