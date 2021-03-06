import React, { useState } from "react";
import "./ProjCardNav.css";
// import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
import { infoIcon, githubIcon } from "../../icons/iconData";

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
        <div className="i-Icon" onClick={() => setInfo(!info)}>
          {infoIcon}
        </div>
      </Tooltip>
      <a href={item.gitURL}>
        <Tooltip title="VIEW GITHUB CODE">
          <div className="git-Icon" onClick={() => openInNewTab(item.gitURL)}>
          {githubIcon}  
          </div>
        </Tooltip>
      </a>
      <a href={item.url}>
        <button className="visitBtn" onClick={() => openInNewTab(item.url)}>
          VISIT PAGE
        </button>
      </a>
    </div>
  );
};

export default ProjCardNav;
