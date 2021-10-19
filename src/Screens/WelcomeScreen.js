import React from "react";
import homeImage from "../assets/homepage.jpg";
import { FaWhatsapp } from "react-icons/fa";
import "./WelcomeScreen.css";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

const WelcomeScreen = () => {
  const history = useHistory();

  return (
    <div className="main">
      <img alt="home" src={homeImage} className="home-image" />
      <div className="opacity"></div>

      <div className="main-info">
        <h1 className="shrink-two">DP Seguros Latinos</h1>
        <h4>
          Diego Panzardo – Licensed Agent con más de 12 años de experiencia en
          el rubro en toda Florida.
        </h4>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          +1 561-315-0681
          <FaWhatsapp
            color="white"
            size={34}
            style={{
              marginLeft: 6,
              background: "rgb(95, 216, 95)",
              borderRadius: 200,
              padding: 8,
            }}
          />
        </p>
        <p>
          Brindamos seguro Obamacare para toda la comunidad latina desde $ 0
          Dolar.
        </p>
        <button className="info-btn" onClick={() => history.push("/contact")}>
          Quiero asesorarme
        </button>
        <h1>Quienes Somos?</h1>
        <p>
          Somos una empresa familiar, dedicados a educar y ayudar a todas
          aquellas familias que por falta de asesoramiento, dejan de adquirir
          los beneficios a los cuales tienen derecho. <br /> <br />
          Empezamos en este negocio en el ano 2010 cuando la ley de cuidado de
          salud de bajo precio entro en vigencia.
          <br />
          <br /> Desde entonces contamos con profesionales para poder ayudar a
          todas aquellas personas que necesiten un seguro medico bueno y barato,
          damos una atencion personalizada, estando a disposicion de nuestros
          clientes 24/7, hemos trabajo siempre por referidos de nuestros
          clientes.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomeScreen;
