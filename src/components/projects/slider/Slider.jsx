import { Link } from "react-router-dom";
import "./Slider.css";
import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import { portfolioData } from "../../../data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProjSlideNav } from "../../compIndex";

const Slider = () => {
  return (
    <div className="sliderWrapper">
      <div className="sliderCon">
        <ImageList variant="masonry" cols={3} gap={8}>
          {portfolioData.map((item) => (
            <ProjSlideNav item={item} />
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
  );
};

export default Slider;
