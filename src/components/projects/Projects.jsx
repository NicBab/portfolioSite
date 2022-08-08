import "./Projects.css";
import { Link } from "react-router-dom";
import { portfolioData } from "../../data";
import { ProjCardNav } from "../compIndex";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Projects = () => {
  return (
    <div className="projPageWrapper">
      <div className="projects">
        {portfolioData.map((item, id) => (
          <div className="itemCard" key={id}>
            <img className="itemImg" src={item.img} alt="" />
            <div className="itemTitle">{item.title}</div>
            <ProjCardNav item={item} />
          </div>
        ))}
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

export default Projects;
