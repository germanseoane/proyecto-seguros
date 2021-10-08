import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import drawerImage from "../assets/drawer-logo.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { appColors } from "../styles/appColors";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const SideDrawer = ({ active, setActive }) => {
  return (
    <div className={active ? "sidedrawer show" : "sidedrawer"}>
      <div className="drawer-header">
        <img alt="logo" src={drawerImage} className="image" />
      </div>
      <div className="item">
        Sobre Nosotros
        <IoIosArrowForward
          size={22}
          color={appColors.primary}
          style={{ marginTop: 2 }}
        />
      </div>
      <div className="item">
        Preguntas Frecuentes{" "}
        <IoIosArrowForward
          size={22}
          color={appColors.primary}
          style={{ marginTop: 2 }}
        />
      </div>
      <div className="item">
        Contactenos{" "}
        <IoIosArrowForward
          size={22}
          color={appColors.primary}
          style={{ marginTop: 2 }}
        />
      </div>
      <div className="drawer-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <BsFillTelephoneFill color="white" size={18} />
          <p style={{ color: "white", marginLeft: 6 }}>+1 561-315-0681</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineMail color="white" size={18} />
          <p style={{ color: "white", marginLeft: 6 }}>
            info@dpseguroslatinos.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
