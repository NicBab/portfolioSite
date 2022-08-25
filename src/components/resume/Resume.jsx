import React from "react";
// import { Link } from "react-router-dom";
import "./Resume.css";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import resPNG from "../../image/Nic_Bab_res.png";

const Resume = () => {
  return (
    <div className="res-pg">
      <div className="res-ctn">
        <img src={resPNG} alt="" className="resPNG"/>
      </div>
    </div>
  );
};

export default Resume;
