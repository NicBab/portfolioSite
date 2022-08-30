import React from "react";
import "./FootSocial.css";
import {
  githubIcon,
  linkedinIcon,
} from "../../../icons/iconData";
import { Tooltip } from "@mui/material";

const FootSocial = () => {
  const onLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/nic-babineaux/");
  };

  const onGhIconClick = () => {
    window.open("https://github.com/NicBab");
  };


  return (
    <div className="footerSocial">
      <Tooltip title="View LinkedIn">
        <div className="fs-icon" onClick={onLinkedinClick}>
          {linkedinIcon}
        </div>
      </Tooltip>
      <Tooltip title="View GitHub Profile">
        <div className="fs-icon" onClick={onGhIconClick}>
          {githubIcon}
        </div>
      </Tooltip>
    </div>
  );
};

export default FootSocial;
