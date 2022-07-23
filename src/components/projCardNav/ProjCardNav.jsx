import React, { useState } from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";


const ProjCardNav = ({item}) => {
    const [info, setInfo] = useState(false);

  const openInNewTab = (url, gitURL) => {
    const newWindow = window.open(url, gitURL, "_blank");
    if (newWindow) newWindow.open = null;
  };

  return (
    <div className="cardNav">
              <a href={item.url} >
                <button
                  className="visitBtn"
                  onClick={() => openInNewTab(item.url)}
                >
                  VISIT PAGE
                </button>
              </a>

              <a href={item.gitURL}>
                <Tooltip title="VIEW GITHUB CODE">
                  <GitHubIcon
                    sx={{ fontSize: "30px" }}
                    className="gitIcon"
                    onClick={() => openInNewTab(item.gitURL)}
                  />
                </Tooltip>
              </a>

              
                {info ? <p className="info">{item.desc}</p> : null}
                <Tooltip title="INFO">
                  <InfoIcon
                    sx={{ fontSize: "34px" }}
                    className="i-Icon"
                    onClick={() => setInfo(!info)}
                  />
                </Tooltip>
            </div>
  )
}

export default ProjCardNav