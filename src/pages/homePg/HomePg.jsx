import React from "react";
import "./HomePg.css"
import { Intro, About, Contact, ProjDisplay, Resume } from "../../components/compIndex";

const HomePg = () => {
  return (
    <div className="homePg">
      <Intro />
      <About />
      <ProjDisplay />
      <Resume />
      <Contact />
    </div>
  );
};

export default HomePg;
