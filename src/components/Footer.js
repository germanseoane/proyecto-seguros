import React from "react";
import { appColors } from "../styles/appColors";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  return (
    <div
      style={{
        height: "fit-content",
        background: appColors.primary,
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 12,
        zIndex: 10,
      }}
    >
      <p
        style={{ marginLeft: 6 }}
      >{`DP Seguros Latinos ©, ${date.getFullYear()}`}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BsFillTelephoneFill color="white" size={18} className="no-show" />
        <p style={{ color: "white", marginLeft: 6 }}>+1 561-315-0681</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineMail color="white" size={18} />
        <a
          href="mailto:dpseguroslatinos@gmail.com"
          style={{
            color: "white",
            marginLeft: 6,
            textDecoration: "none",
          }}
        >
          dpseguroslatinos@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
