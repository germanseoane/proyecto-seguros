import React from "react";
import "./SideDrawer.css";
import drawerImage from "../assets/drawer-logo.jpg";
import { appColors } from "../styles/appColors";
import { BsFillTelephoneFill, BsQuestionCircle } from "react-icons/bs";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useHistory } from "react-router";

const SideDrawer = ({ active, setActive }) => {
  const history = useHistory();

  const handleClick = (value) => {
    setActive(false);
    history.push(value);
  };

  return (
    <div className={active ? "sidedrawer show" : "sidedrawer"}>
      <div className="drawer-header" onClick={() => handleClick("/")}>
        <img alt="logo" src={drawerImage} className="image" />
      </div>
      <div className="item" onClick={() => handleClick("/")}>
        <div className="title-container">
          <AiOutlineHome
            size={20}
            color={appColors.primary}
            style={{ marginRight: "8px" }}
          />
          Home
        </div>
      </div>
      <div className="item" onClick={() => handleClick("/full")}>
        <div className="title-container">
          <BsQuestionCircle
            size={20}
            color={appColors.primary}
            style={{ marginRight: "8px" }}
          />
          Preguntas Frecuentes
        </div>
      </div>
      <div className="item" onClick={() => handleClick("/contact")}>
        <div className="title-container">
          <IoChatbubblesOutline
            size={20}
            color={appColors.primary}
            style={{ marginRight: "8px" }}
          />
          Contáctenos
        </div>
      </div>
      <div className="item" onClick={() => handleClick("/about")}>
        <div className="title-container">
          <FiUser
            size={20}
            color={appColors.primary}
            style={{ marginRight: "8px" }}
          />
          Sobre Nosotros
        </div>
      </div>
      <div className="drawer-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <BsFillTelephoneFill color="white" size={18} />
          <p style={{ color: "white", marginLeft: 6 }}>+1 561-315-0681</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineMail color="white" size={18} />
          <p style={{ color: "white", marginLeft: 6, fontSize: 14 }}>
            info@dpseguroslatinos.com
          </p>
        </div>
      </div>
      <div className="end"></div>
    </div>
  );
};

export default SideDrawer;
