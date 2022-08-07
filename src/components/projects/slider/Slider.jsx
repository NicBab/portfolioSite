import React from 'react'
import { Link } from "react-router-dom"
import "./Slider.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { portfolioData } from '../../../data';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  return (
 <div className="sliderWrapper">
    <div className="sliderFrame">
      <ImageList variant="masonry" cols={3} gap={8}>
    {portfolioData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
</div>

<div className="viewPortfoBtnCon">
<Link to="/portfolio">
  <button className="viewPortfoBtn">
    VIEW PORTFOLIO
    <ArrowForwardIcon />
  </button>
</Link>
</div>
</div>
  )
}

export default Slider