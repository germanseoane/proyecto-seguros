import React from "react";
import "./HomeForm.css";

const HomeForm = () => {
  return (
    <div className="simpleform-container">
      <input placeholder="Nombre*" className="simple-input" />
      <input placeholder="Email*" className="simple-input" />
      <input placeholder="Telefono*" className="simple-input simple-last" />
      <button className="simple-btn">Enviar</button>
    </div>
  );
};

export default HomeForm;
