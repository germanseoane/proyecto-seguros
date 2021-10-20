import React from "react";
import { appColors } from "../styles/appColors";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import "./Navbar.css";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 40,
        background: appColors.primary,
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        zIndex: 250,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <BsFillTelephoneFill color="white" size={18} className="no-show" />
        <p className="no-show" style={{ color: "white", marginLeft: 6 }}>
          +1 561-315-0681
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineMail color="white" size={18} />
        <p style={{ color: "white", marginLeft: 6 }}>
          dpseguroslatinos@gmail.com
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className="no-show"
      >
        <IoLogoInstagram color="white" size={18} className="no-show" />
        <FaFacebookF
          color="white"
          size={18}
          style={{ marginLeft: 12 }}
          className="no-show"
        />
      </div>
    </div>
  );
};

export default Header;
