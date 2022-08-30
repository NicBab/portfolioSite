import React from "react";
import "./Social.css";
import {
  githubIcon,
  linkedinIcon,
} from "../../icons/iconData";
import { Tooltip } from "@mui/material";

const Social = () => {
  const onLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/nic-babineaux/");
  };

  const onGhIconClick = () => {
    window.open("https://github.com/NicBab");
  };

  return (
    <div className="icons">

      <Tooltip title="View GitHub Profile">
        <div className="icon" onClick={onGhIconClick}>
          {githubIcon}
        </div>
      </Tooltip>
      <Tooltip title="View LinkedIn">
        <div className="icon" onClick={onLinkedinClick}>
          {linkedinIcon}
        </div>
      </Tooltip>
    </div>
  );
};

export default Social;
