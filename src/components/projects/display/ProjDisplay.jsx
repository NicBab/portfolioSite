import "./ProjDisplay.css";
import ImageList from "@mui/material/ImageList";
import { portfolioData } from "../../../data";

import { ProjDisNav } from "../../compIndex";

const ProjDisplay = () => {
  return (
    <div className="displayWrapper">
      <div className="displayContainer">
        <ImageList variant="masonry" cols={3} gap={8}>
          {portfolioData.map((item, id) => (
            <ProjDisNav item={item} key={id}/>
          ))}
        </ImageList>
      </div>
     
      
    </div>
  );
};

export default ProjDisplay;
