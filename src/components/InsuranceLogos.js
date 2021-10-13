import React from "react";
import ambetter from "../assets/ambetter.jpg";
import oscar from "../assets/oscar.jpg";
import floridaBlue from "../assets/florida-blue.jpg";
import brightHealth from "../assets/bright.jpg";
import molina from "../assets/molina.jpg";

const InsuranceLogos = () => {
  return (
    <>
      <h1>Qué compañías de seguros trabajan con Obamacare en Florida?</h1>
      DP Seguros Latinos trabaja con las mejores compañías que aplican al plan
      Obama Care: <br />
      <br />
      <div className="question-logo">
        <h4> Ambetter </h4>
        <img src={ambetter} alt="ambetter" className="insurance-image" />
      </div>
      <div className="question-logo">
        <h4> Oscar </h4>
        <img src={oscar} alt="oscar" className="insurance-image" />
      </div>
      <div className="question-logo">
        <h4> Florida Blue </h4>
        <img src={floridaBlue} alt="florida" className="insurance-image" />
      </div>
      <div className="question-logo">
        <h4> Bright Health </h4>
        <img src={brightHealth} alt="bright" className="insurance-image" />
      </div>
      <div className="question-logo">
        <h4> Molina Health Care </h4>
        <img src={molina} alt="molina" className="insurance-image" />
      </div>
      <div className="question-logo">
        <h4> Aetna </h4>
      </div>
      <div className="question-logo">
        <h4> Cigna </h4>
      </div>
    </>
  );
};

export default InsuranceLogos;
