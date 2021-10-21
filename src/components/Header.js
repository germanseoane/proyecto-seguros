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
        <a
          href="mailto:dpseguroslatinos@gmail.com"
          style={{ color: "white", marginLeft: 6, textDecoration: "none" }}
        >
          dpseguroslatinos@gmail.com
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className="no-show"
      >
        <a
          href="https://www.instagram.com/dpseguroslatinos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram color="white" size={18} className="no-show" />
        </a>
        <a
          href="https://www.facebook.com/dpseguroslatinos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            color="white"
            size={18}
            style={{ marginLeft: 12 }}
            className="no-show"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
