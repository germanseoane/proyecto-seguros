import React from "react";
import "../Screens/FullQuestionsScreen.css";
import obamacareLogo from "../assets/obamacare.jpeg";

const ObamacareWelcome = () => {
  return (
    <div style={{ width: "98%", backgroundColor: "whitesmoke" }}>
      <div className="question-container">
        <div className="obamacare-container">
          <h1>¿Que es Obamacare?</h1>
          <img alt="obamacare" src={obamacareLogo} className="obama-logo" />
        </div>
        <p>
          Obamacare asigna un subsidio a las familias para ayudarles a pagar su
          seguro médico. <br />
          <br />
          El seguro Obamacare es el mismo que el seguro privado, la diferencia
          entre Obama Care y un seguro privado es que si usted califica, se le
          otorga el subsidio para pagar parte del valor del seguro, mientras que
          en el seguro privado lo debe pagar por completo. <br />
          <br />
          Con el plan Obamacare usted no accede a un seguro de salud sino a un
          crédito fiscal del gobierno que subsidia los altos costos de los
          planes médicos privados, pudiendo acceder a los mismos. <br />
          <br />
          Si usted califica, se le otorga dicho subsidio para pagar parte del
          valor del seguro, mientras que en el seguro privado lo debería pagar
          usted por completo. <br />
          <br />
          Los subsidios de este plan ayudan a aquellas personas que no pueden
          acceder a pólizas debido a su situación económica. Para calificar se
          toma en consideración la situación familiar, la edad, el hogar y los
          ingresos de cada cliente. <br />
          <br />
          Contáctenos y le asesoraremos para brindarle la cobertura
          médica/seguro que mejor se adapte a usted y su familia según sus
          necesidades.
        </p>
      </div>
    </div>
  );
};

export default ObamacareWelcome;
