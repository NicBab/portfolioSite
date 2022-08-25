import React from "react";
import "./HomePg.css"
import { Intro, About, Contact, ProjDisplay } from "../../components/compIndex";

const HomePg = () => {
  return (
    <div className="homePg">
      <Intro />
      <About />
      <ProjDisplay />
      
      <Contact />
    </div>
  );
};

export default HomePg;
