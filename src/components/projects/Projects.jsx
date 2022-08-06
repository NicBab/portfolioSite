import "./Projects.css";
import { portfolioData } from "../../data";
import { ProjCardNav } from "../compIndex";

// import { Slider } from "../compIndex"
// import blueVector from "../../image/blue_purple_vector.jpg"

const Projects = () => {
  return (
   
    <div className="projPageWrapper">
    {/* <h1 className="pgTitle">...CREATE & INSPIRE</h1> */}
    <div className="projects">
      {portfolioData.map((item, id) => (
        <div className="itemCard" key={id}>
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



