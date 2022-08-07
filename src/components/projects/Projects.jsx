import "./Projects.css";
// import { portfolioData } from "../../data";
import { ProjCardNav } from "../compIndex";

const Projects = ({ item }) => {
  return (
    <div className="projPageWrapper">
      <div className="projects">
        <div className="itemCard" key={item.id}>
          <img className="itemImg" src={item.img} alt="" />
          <div className="itemTitle">{item.title}</div>
          <ProjCardNav item={item} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
