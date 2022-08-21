import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import resumePNG from "../../image/Nic_Bab_resume.png";

const Resume = () => {
  return (
    <div className="res-pg-ctn">
      <div className="res">
        <div className="res-left">
          <div className="aside-skills-ctn">
            <aside className="aside-icons">
              <h3 className="res-h3">SKILLS</h3>
            </aside>
          </div>
          <aside className="aside-int-ctn">
            <h3 className="res-h3">INTERESTS</h3>
            </aside>
        </div>

        <div className="res-center">
          
          <div className="res-proj-ctn">
            <h3 className="res-h3">PROJECTS</h3>
            <ul className="proj-ul">
              BLOG APP
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>

            <ul className="proj-ul">
              E-Commerce APP
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>

          </div>
          <div className="res-ed-ctn">
            <h3 className="res-h3">EDUCATION</h3>
            <ul className="proj-ul">
             Fullstack Academy
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>
            <ul className="proj-ul">
              South Louisiana Community College
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>
            <ul className="proj-ul">
              Universal Technical Institute
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>
           
          </div>
          <div className="res-exp-ctn">
            <h3 className="res-h3">EXPERIENCE</h3>
            <ul className="proj-ul">
              Freelance Developer
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>
            <ul className="proj-ul">
              Powersports Technician
              <li>
                hello
              </li>
              <li>
                hello
              </li>
            </ul>
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
