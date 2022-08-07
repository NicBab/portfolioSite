import React from "react";
import "./HomePg.css"
import { Intro, About, Contact, Slider } from "../../components/compIndex";

const HomePg = () => {
  return (
    <div className="homePg">
      <Intro />
      <About />
      <Slider />
      <Contact />
    </div>
  );
};

export default HomePg;
