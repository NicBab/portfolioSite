import React from 'react'
import { Link } from "react-router-dom"
import "./Logo.css"
import gears_Img from "../../../image/gears_Img.png"


const Logo = () => {
  return (
    <div className="topLogo">
        <Link to="/contact">
        <img src={gears_Img} alt="" className="logoImg"/>
        </Link>
    </div>
  )
}

export default Logo