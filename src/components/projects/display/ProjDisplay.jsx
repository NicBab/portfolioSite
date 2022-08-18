import "./ProjDisplay.css";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import { portfolioData } from "../../../data";
import { ProjDisNav } from "../../compIndex";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjDisplay = () => {
  return (
    <div className="displayWrapper">
      <div className="displayContainer">
        <ImageList variant="masonry" cols={3} gap={8}>
          {portfolioData.map((item, id) => (
            <ProjDisNav item={item} key={id} />
          ))}
        </ImageList>
      </div>
      <div className="viewPortfoBtnCtn">
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

export default ProjDisplay;
