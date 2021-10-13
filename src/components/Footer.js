import React from "react";
import { appColors } from "../styles/appColors";

const Footer = () => {
  const date = new Date();
  return (
    <div
      style={{
        height: "6vh",
        background: appColors.primary,
        color: "white",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        style={{ marginLeft: 18 }}
      >{`DP Seguros Latinos ©, ${date.getFullYear()}`}</p>
    </div>
  );
};

export default Footer;
