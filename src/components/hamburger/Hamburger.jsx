import React, { useState } from "react";
import "./Hamburger.css";
import { iconData } from "../../icons/iconData";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  return (
    <div className="burgerNav">
      <IconContext.Provider value={{ color: "#22b685" }}>
        <div className="nav">
          <Link to="#" className="burger" >
            <MenuOutlinedIcon sx={{ fontSize: "35px" }} onClick={showMenu} />
          </Link>
          <nav className={menu ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showMenu}>
              <li className="nav-toggle">
                <Link to="#" className="closeIcon">
                  <CancelIcon />
                </Link>
              </li>
              {iconData.map((item, idx) => {
                return (
                  <li key={idx} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </div>
  );
};
export default Hamburger;
