import React, { useState } from "react";
import "./Projects.css";
import { portfolioData } from "../../data";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";


const Projects = () => {

  const openInNewTab = (url, gitURL) => {
    const newWindow = window.open(url, gitURL, "_blank");
    if (newWindow) newWindow.open = null;
  };


  return (
    <>
      <h1 className="title">PROJECTS</h1>
      <div className="projects">
        {portfolioData.map((item, idx) => (
          <div className="itemCard" key={idx}>
            <img className="itemImg" src={item.img} alt="" />
            <div className="itemTitle">{item.title}</div>
            <div className="itemDesc">{item.desc}</div>
            <div className="visitLinks">
              <a href={item.url} key={idx}>
                <button
                  className="visitBtn"
                  onClick={() => openInNewTab(item.url)}
                >
                  VISIT PAGE
                </button>
              </a>
              <a href={item.gitURL}>
                <Tooltip title="VIEW GITHUB CODE">
                <GitHubIcon sx={{fontSize: "30px"}}
                  className="gitIcon"
                  onClick={() => openInNewTab(item.gitURL)}
                />
                </Tooltip>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
