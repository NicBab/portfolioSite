import React from "react";
import "./Portfolio.css";
import { portfolioData } from "../../data";

const Portfolio = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="projects">
      {portfolioData.map((item, idx) => (
        <div className="itemCard">
          <img className="itemImg" src={item.img} alt="" />
          <div className="itemTitle">{item.title}</div>
          <div className="itemDesc">{item.desc}</div>
            <a href={item.url} key={idx}>
              <button
                className="visitBtn"
                onClick={() => openInNewTab(item.url)}
              >
                VISIT PAGE
              </button>
            </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

// <div className="projects">
//   {portfolioData.map((item, idx) => (
//     <div className="itemCard">
//       <img className="itemImg" src={item.img} alt="" />
//       <a href={item.url} key={idx}>
//         <div
//           className="itemTitle"
//           onClick={() => {
//             openInNewTab(item.url);
//           }}
//         >
//           {item.title}
//         </div>
//         <div className="itemDesc">{item.desc}</div>
//         <button className="visitBtn">VISIT</button>
//       </a>
//     </div>
//   ))}
// </div>
