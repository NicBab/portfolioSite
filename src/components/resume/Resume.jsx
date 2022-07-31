import React from 'react'
import "./Resume.css"
import resumePNG from "../../image/Nic_Bab_resume.png"

const Resume = () => {
  return (
    <>
    <div className="resumePage">
    <img src={resumePNG} alt="resumePic" className="resPNG "/>
    </div>
    </>
  )
}

export default Resume