import React from "react";
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
import "./SelectQuestion.css";

const SelectQuestion = ({ question, setQuestion }) => {
  const handleClick = (value) => {
    if (value === "DEFAULT") return;
    setQuestion(value);
  };

  return (
    <>
      <select
        className="second-select"
        onChange={(e) => handleClick(e.target.value)}
      >
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
    </>
  );
};

export default SelectQuestion;
