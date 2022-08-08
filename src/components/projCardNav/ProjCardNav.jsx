import React, { useState } from "react";
import "./ProjCardNav.css";
import { Tooltip } from "@mui/material";
import { infoIcon, githubIcon, eyeFill } from "../../icons/iconData";

const ProjCardNav = ({ item }) => {
  const [info, setInfo] = useState(false);

  const openInNewTab = (url, gitURL) => {
    const newWindow = window.open(url, gitURL, "_blank", "noreferrer");
    if (newWindow) newWindow.open = null;
  };

  return (
    <div className="projCardNav">
      
      {info ? <p className="info">{item.desc}</p> : null}
      <Tooltip title="INFO">
        <div className="projCardIcon" onClick={() => setInfo(!info)}>
          {infoIcon}
        </div>
      </Tooltip>

      <a href={item.gitURL}>
        <Tooltip title="VIEW GITHUB CODE">
          <div className="projCardIcon" onClick={() => openInNewTab(item.gitURL)}>
            {githubIcon}
          </div>
        </Tooltip>
      </a>

      <a href={item.url}>
        <Tooltip title="VISIT PAGE">
        <div className="projCardIcon" onClick={() => openInNewTab(item.url)}>
          {eyeFill}
        </div>
        </Tooltip>
  
      </a>
    </div>
  );
};

export default ProjCardNav;
