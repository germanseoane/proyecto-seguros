import React from "react";
import homeImage from "../assets/homepage.jpg";

import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  return (
    <div className="main">
      <img alt="home" src={homeImage} className="home-image" />
      <div className="opacity"></div>
      <div className="main-info">
        <h1 style={{ fontSize: 52, marginTop: 20 }}>DP Seguros Latinos</h1>
        <h4>
          Diego Panzardo – Licensed Agent con más de X años de experiencia en el
          rubro en toda Florida.
        </h4>
        <p>+1 561-315-0681 logo whatsapp</p>
        <p>
          Brindamos seguro Obamacare para toda la comunidad latina desde $ 0
          Dolar.
        </p>
        <button className="info-btn">Quiero asesorarme</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
