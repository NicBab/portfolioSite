import { useState } from "react";
import "./Plus.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { plusData } from "../../icons/iconData";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";

const Plus = () => {
  const [plus, setPlus] = useState(false);
  const showPlus = () => setPlus(!plus);

  return (
    <>
      <IconContext.Provider value={{ color: "#22b685" }}>
        <div className="followPlus">
          <Link to="#" className="plus-sign">
            <AddIcon sx={{ fontSize: "30px" }} onClick={showPlus} />
          </Link>
        </div>
        <nav className={plus ? "plus-menu active" : "plus-menu"}>
          <ul className="plus-menu-items" onClick={showPlus}>
            <li className="plus-toggle">
              <Link to="#" className="closeIcon">
                <CancelIcon />
              </Link>
            </li>
            {plusData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.url}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Plus;
