import SGphoto from "./image/sgPhotoImg copy.png"
import Bytor from "./image/bytorDesignsImg.png"
import LSU from "./image/16 LSU 2101 NICHOLAS .pdf-1.jpg"

//projects map
export const portfolioData = [
    {
        id: 1,
        title: "SG Photography",
        img: SGphoto,
        url: "https://goofy-wright-304451.netlify.app/",
        gitURL: "https://github.com/NicBab/Scuuba-gooding-photography",
        desc: "Colorado based photographer landing page using react with image carousel component.",
        cName: "project-item"
    },
    {
        id: 2,
        title: "Bytor Designs",
        img: Bytor,
        url: "https://optimistic-babbage-eb36e4.netlify.app/",
        gitURL: "https://github.com/NicBab/Bytor_Designs",
        desc: "Lafayette Louisiana local Graphic design artist landing page using react",
        cName: "project-item"
    }
];


//bio page "certifications"
export const bioData = [
    {
        id: 1,
        title: "Fullstack",
        img: LSU,
        desc: "fullstack Certification from fullstack academy...html, css, with emphasis on react"
    }
]