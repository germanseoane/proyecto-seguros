import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ active, setActive, setQuestion }) => {
  const history = useHistory();

  return (
    <div className="main-navbar">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={() => history.push("/")}
      />

      <Link to="/" className="nav-link">
        <h3>Sobre Nosotros</h3>
      </Link>
      <Link to="/full" className="nav-link">
        <h3>Preguntas Frecuentes</h3>
      </Link>
      <Link to="/contact" className="nav-link">
        <h3>Contáctenos</h3>
      </Link>
      <GiHamburgerMenu
        size={32}
        onClick={() => setActive(!active)}
        className="hamburger"
      />
    </div>
  );
};

export default Navbar;
