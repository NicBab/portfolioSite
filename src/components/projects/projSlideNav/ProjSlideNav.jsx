import React, { useState } from "react";
import "./ProjSlideNav.css";
import { Tooltip } from "@mui/material";
import { infoIcon, githubIcon, searchGlass } from "../../../icons/iconData";
import styled from "styled-components";

const ImgSlideIcons = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 5px;

`;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fdfd;
  position: relative;
  border-radius: 5px;

  &:hover ${ImgSlideIcons} {
    opacity: 1;
  }
`;


const Img = styled.img`
  height: 75%;
  width: 100%;
  z-index: 2;
  border-radius: 5px;
  
`;

const SlideIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.2s ease;
  color: black;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const ProjSlideNav = ({ item }) => {
  const [info, setInfo] = useState(false);

  const openInNewTab = (url, gitURL) => {
    const newWindow = window.open(url, gitURL, "_blank", "noreferrer");
    if (newWindow) newWindow.open = null;
  };

  return (
    <Container>
      <Img src={item.img}/>
      <ImgSlideIcons>
        {info ? <span className="slideImgInfo">{item.desc}</span> : null}
        <Tooltip title="INFO">
          <SlideIcon onClick={() => setInfo(!info)}>{infoIcon}</SlideIcon>
        </Tooltip>

        <a href={item.gitURL}>
          <Tooltip title="VIEW GITHUB CODE">
            <SlideIcon onClick={() => openInNewTab(item.gitURL)}>
              {githubIcon}
            </SlideIcon>
          </Tooltip>
        </a>

        <a href={item.url}>
          <Tooltip title="VIEW PAGE">
            <SlideIcon onClick={() => openInNewTab(item.url)}>
              {searchGlass}
            </SlideIcon>
          </Tooltip>
        </a>
      </ImgSlideIcons>
    </Container>
  );
};

export default ProjSlideNav;
