import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import {
  OBAMACARE,
  INSCRIPTION,
  QUALIFY,
  SERVICES,
  BENEFITS,
  COST,
  WHEN,
  WORK,
} from "../utils/constants";

const Navbar = ({ active, setActive, setQuestion }) => {
  const history = useHistory();

  const handleClick = (value) => {
    if (value === "DEFAULT") return;
    history.push("/questions");
    setQuestion(value);
  };

  return (
    <div className="main-navbar">
      <img src={logo} alt="logo" className="logo" />

      <select className="select" onChange={(e) => handleClick(e.target.value)}>
        <option value={"DEFAULT"}>Preguntas frecuentes</option>
        <option value={OBAMACARE}>Que es Obamacare?</option>

        <option value={INSCRIPTION}>Cual es el periodo de inscripcion?</option>

        <option value={QUALIFY}>Que requisitos necesito para calificar?</option>

        <option value={SERVICES}>
          Qué servicios y coberturas brinda el seguro médico Obama care?
        </option>
        <option value={BENEFITS}>
          Qué beneficios tiene el plan de seguros Obama Care?
        </option>
        <option value={COST}>
          Qué costo tiene el plan de seguro médico Obama Care?
        </option>
        <option value={WHEN}>
          A partir de cuándo puedo empezar a usar mi cobertura de salud?
        </option>
        <option value={WORK}>
          Qué compañías de seguros trabajan con Obamacare en Florida?
        </option>
      </select>
      <Link to="/" className="nav-link">
        <h3>Sobre Nosotros</h3>
      </Link>

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
