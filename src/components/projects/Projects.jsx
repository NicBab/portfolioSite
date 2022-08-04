import "./Projects.css";
import { portfolioData } from "../../data";
import { ProjCardNav } from "../compIndex";

const Projects = () => {
  return (
    <div className="projPageWrapper">
      <h1 className="pgTitle">...CREATE & INSPIRE</h1>
      <div className="projects">
        {portfolioData.map((item, idx) => (
          <div className="itemCard" key={idx}>
            <img className="itemImg" src={item.img} alt="" />
            <div className="itemTitle">{item.title}</div>
            <div>
              <ProjCardNav item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
