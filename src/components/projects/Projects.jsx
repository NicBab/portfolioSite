import "./Projects.css";
import { portfolioData } from "../../data";
import { ProjCardNav } from "../compIndex";


const Projects = () => {
  return (
    <div className="projPageWrapper">

      <div className="projects">
        {portfolioData.map((item, id) => (
          <div className="itemCard" key={id}>
            <img className="itemImg" src={item.img} alt="" />
            <div className="itemTitle">{item.title}</div>
            <div>
              <ProjCardNav item={item}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
