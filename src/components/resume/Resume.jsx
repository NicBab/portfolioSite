import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import resumePNG from "../../image/Nic_Bab_resume.png";

const Resume = () => {
  return (
    <div className="res-pg-ctn">
      <div className="res">
        <div className="page-left">
          <div className="aside-ctn">
            <aside className="aside-icons">
              <h3 className="res-h3">SKILLS</h3>
            </aside>
          </div>
        </div>

        <div className="page-center">
          <div className="res-proj-ctn">
            <h3 className="res-h3">PROJECTS</h3>
          </div>
          <div className="res-ed-ctn">
            <h3 className="res-h3">EDUCATION</h3>
          </div>
          <div className="res-exp-ctn">
            <h3 className="res-h3">EXPERIENCE</h3>
          </div>
        </div>

        <div className="view-pdf-btn-ctn">
          <Link to="pdf">
            <button className="viewPdfBtn">
              VIEW PDF <ArrowForwardIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
