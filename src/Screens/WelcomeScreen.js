import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "./WelcomeScreen.css";
import welcomeImage from "../assets/homepage.jpg";
import obamaLogo from "../assets/Obamacare-Logo.png";
import { useHistory } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import "animate.css";

const WelcomeScreen = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="main-welcome">
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
        <h1 className="absolute-welcome animate__animated animate__slideInDown">
          DP Seguros Latinos
        </h1>
        <h3 className="absolute-h3  ">
          Diego Panzardo – Licensed Agent con más de 12 años de experiencia en
          el rubro en toda Florida.
        </h3>
        <img alt="welcome" src={welcomeImage} className="welcome-img" />
        <div className="goodies-container">
          <div className="welcome-info">
            <h3>Quienes Somos</h3>
            <p>
              Somos una empresa familiar, dedicados a educar y ayudar a todas
              aquellas familias que por falta de asesoramiento, dejan de
              adquirir los beneficios a los cuales tienen derecho.
              <br />
              <br /> Empezamos en este negocio en el año 2010 cuando la ley de
              cuidado de salud de bajo precio entro en vigencia, desde entonces
              contamos con profesionales para poder ayudar a todas aquellas
              personas que necesiten un seguro medico bueno y barato.
              <br />
              <br /> Damos una atencion personalizada, estando a disposicion de
              nuestros clientes 24/7, hemos trabajo siempre por referidos de
              nuestros clientes.
            </p>
            <button
              className="goodies-btn"
              onClick={() => history.push("/contact")}
            >
              Contáctanos
            </button>
          </div>
          <div className="welcome-info">
            <h3>Preguntas Frecuentes</h3>
            <p>
              Busca en nuestro completo listado de preguntas frecuentes, para
              evacuar cualquier duda que te surja.
              <br />
              <br />
              Desde, que es el Obamacare, cuales son los requisitos para
              calificar, que servicios y cobertura brinda el seguro medico, que
              costo tiene, etc.
              <br />
              <br />
              Tambien puedes contactarnos y en ese caso nos comunicaremos
              rapidamente contigo.
              <br />
              <br />
              Estamos a las ordenes por cualquier tipo de duda o consulta que
              tengas, estamos para asesorarte.
            </p>
            <button
              className="goodies-btn"
              onClick={() => history.push("/full")}
            >
              Saber más
            </button>
          </div>
        </div>
        <img alt="obama-logo" src={obamaLogo} className="obama-logo" />
      </div>
      <Footer />
    </>
  );
};

export default WelcomeScreen;
