import React from 'react'
import { Link } from "react-router-dom"
import "./Logo.css"
import logo_type_tree from "../../../image/logo_type_tree.png"

const Logo = () => {
  return (
    <div className="topLogo">
        <Link to="/contact">
        <img src={logo_type_tree} alt="" className="logoImg"/>
        </Link>
    </div>
  )
}

export default Logo