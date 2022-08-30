import SGphoto from "./image/sgPhotoImg copy.png";
import Bytor from "./image/bytorDesignsImg.png";
import LSU from "./image/16 LSU 2101 NICHOLAS .pdf-1.jpg";
import gitCert from "./image/Ud_gitCert.jpg";
import hoobank from "./image/hoobankPg.vite.png";

//projects map
export const portfolioData = [
  {
    id: 1,
    title: "hoobank",
    img: hoobank,
    url: "https://animated-tartufo-beef2b.netlify.app/",
    gitURL: "https://github.com/NicBab",
    desc: "mock landing page tutorial using React, tailwind & vite",
    cName: "project-item",
  },
  {
    id: 2,
    title: "Bytor Designs",
    img: Bytor,
    url: "https://optimistic-babbage-eb36e4.netlify.app/",
    gitURL: "https://github.com/NicBab/Bytor_Designs",
    desc: "Lafayette Louisiana local Graphic design artist landing page using React",
    cName: "project-item",
  },
  {
    id: 3,
    title: "SG Photography",
    img: SGphoto,
    url: "https://goofy-wright-304451.netlify.app/",
    gitURL: "https://github.com/NicBab/Scuuba-gooding-photography",
    desc: "Colorado based photographer landing page using react with image carousel component.",
    cName: "project-item",
  },
];

//bio page "certifications"
export const bioData = [
  {
    id: 1,
    title: "Fullstack",
    img: LSU,
    desc: "Fullstack Academy Certification. ...Software coding academy with emphasis on React",
  },
  {
    id: 1,
    title: "Git",
    img: gitCert,
    desc: "Udemy Git course completed",
  },
];
