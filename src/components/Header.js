import React from "react";
import { appColors } from "../styles/appColors";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 50,
        background: appColors.primary,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IoLogoInstagram color="white" size={18} />
        <FaFacebookF color="white" size={18} style={{ marginLeft: 12 }} />
      </div>
    </div>
  );
};

export default Header;
