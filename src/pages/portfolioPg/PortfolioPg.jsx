import React from "react";
import "./PortfolioPg.css";
import { Projects } from "../../components/compIndex";
import { portfolioData } from "../../data";

const PortfolioPg = () => {
  return (
    <div className="portfolioPg">
      {portfolioData.map((item, id) => (
        <Projects item={item} key={id} />
      ))}
    </div>
  );
};

export default PortfolioPg;
