import React, { useEffect } from "react";
import "./HomeScreen.css";
import obamaHome from "../assets/home-obamacare.png";
import { RiWhatsappFill } from "react-icons/ri";
import "animate.css";
import Footer from "../components/Footer";
import HomeForm from "../components/HomeForm";

const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-home">
      <a
        href="https://wa.me/15613150681"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappFill
          size={42}
          className="whats-icon animate__animated animate__heartBeat"
        />
      </a>
      <div className="background-home"></div>
      <img alt="obama-home" src={obamaHome} className="obama-png" />
      <h1 className="title-home animate__animated animate__slideInDown">
        ¿Por qué contratar Obamacare con DP Seguros Latinos?
      </h1>
      <h3 className="subtitle-home">
        Sabias que para el 2022 los planes de Obama care empiezan desde 0 dólar?
        <br />
        Contactátenos y un agente especializado te ayudará con todo el proceso.
      </h3>
      <div className="formContainer-home">
        <HomeForm />
        <p className="simpletext-home">
          Salieron los nuevos planes Obamacare para el 2022 con muchos más
          beneficios y ayudas, y desde 0 dólar!
          <br /> Garantice su cobertura médica ya!
          <br /> Contactátenos y un agente especializado te ayudará con todo el
          proceso.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
