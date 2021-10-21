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
      <div className="link-wrapper">
        <Link to="/" className="nav-link">
          <h4>Home</h4>
        </Link>

        <Link to="/about" className="nav-link">
          <h4>Sobre nosotros</h4>
        </Link>
        <Link to="/full" className="nav-link">
          <h4>Preguntas Frecuentes</h4>
        </Link>
        <Link to="/contact" className="nav-link">
          <h4>Contáctenos</h4>
        </Link>
      </div>
      <GiHamburgerMenu
        size={32}
        onClick={() => setActive(!active)}
        className="hamburger"
      />
    </div>
  );
};

export default Navbar;
