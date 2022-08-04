import React from "react";
import { Intro, About, Contact, Projects } from "../../components/compIndex";

const HomePg = () => {
  return (
    <div className="homePg">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePg;
