import React from "react";
import { Link } from "react-router-dom";
import "./BioPg.css";
import { bioData } from "../../data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BioPg = () => {
  return (
    <>
      <div className="bioPgWrapper">
        <div className="certs">
          {bioData.map((item, idx) => (
            <div className="certCard" key={idx}>
              <img src={item.img} alt="" className="certImg" />
              <div className="certTitle">{item.title}</div>
              <div className="certDesc">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="bioDescWrapper">
          <figcaption className="bioDesc">
            Hi all! My name is Nic Babineaux, I am currently located in
            Lafayette, Louisiana. I am a fullstack, front end, ui developer,
            certified powersports technician and musician. Attended and
            graduated MMI mechanical school in Phoenix, Arizona class of 2010.
            Then went on to study Sociology/Social Psychology at South Louisiana
            Community College 2010-2012. Recent graduate of fullstack academy
            and pursuing my career in software development. <br />
            Bored with standard educational practices, I decided to travel the
            country and made lifetime memories along the way. Post travels I
            returned to my mechanical career path. Ended up in Denver, Colorado
            where I made some of the best friends and memories of my life.
            <br />
            Returning to south Louisiana some years later...still in the
            powersports industry, I was on the search for something bigger,
            better, and more rewarding. I got into cryptocurrencies and day
            trading. Furthermore, that led to an extreme interest in web design
            and software development.
            <br />I enrolled in the Fullstack Academy of software and graduated
            in 2021 and never looked back. Actively operating as a freelance
            front end and fullstack developer, creating responsive and
            functional web applications for individual artists and local small
            businesses!
            <div className="contactMeBtnCtn">
            <Link to="/contact">
              <button className="contactMeBtn">
                CONTACT ME
                <ArrowForwardIcon />
              </button>
            </Link>
            </div>
          </figcaption>
        </div>
      </div>
    </>
  );
};

export default BioPg;
