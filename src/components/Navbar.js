import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ active, setActive }) => {
  return (
    <div className="main-navbar">
      <img src={logo} alt="logo" className="logo" />
      <Link to="/" className="nav-link">
        <h3>Sobre Nosotros</h3>
      </Link>

      <select className="select">
        <option>Que es Obamacare?</option>

        <option>Pregunta 2</option>

        <option>Pregunta 3</option>

        <option>Pregunta 4</option>
      </select>
      <Link to="/" className="nav-link">
        <h3>CONTACTENOS</h3>
      </Link>
      <GiHamburgerMenu
        size={24}
        onClick={() => setActive(!active)}
        className="hamburger"
      />
    </div>
  );
};

export default Navbar;
