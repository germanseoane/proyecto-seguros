import React from "react";
import "./SideDrawer.css";

const SideDrawer = ({ active, setActive }) => {
  return <div className={active ? "sidedrawer show" : "sidedrawer"}></div>;
};

export default SideDrawer;
