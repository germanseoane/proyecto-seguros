import React from "react";
import "./Questions.css";
import obamacareLogo from "../assets/obamacare.jpeg";
import InsuranceLogos from "./InsuranceLogos";
import { useHistory } from "react-router-dom";

const Questions = () => {
  const history = useHistory();

  return (
    <div>
      <div className="question-container">
        <div className="obamacare-container">
          <h1>¿Qué es Obamacare?</h1>
          <img alt="obamacare" src={obamacareLogo} className="obama-logo" />
        </div>
        <p>
          Obamacare asigna un subsidio a las familias para ayudarles a pagar su
          seguro médico. Es un gran beneficio al cual se tiene derecho por ley.
          <br />
          <br />
          Con el plan Obamacare usted no accede a un seguro de salud sino a un
          crédito fiscal del gobierno que subsidia los altos costos de los
          planes médicos privados, pudiendo acceder a los mismos.
          <br />
          <br />
          Si usted califica, se le otorga dicho subsidio para pagar parte del
          valor del seguro, mientras que en el seguro privado lo debería pagar
          usted por completo. <br />
          <br />
          Los subsidios de este plan ayudan a aquellas personas que no pueden
          acceder a pólizas debido a su situación económica. <br />
          <br />
          Para calificar se toma en consideración la situación familiar, la edad
          y el hogar, entre otros.
          <br />
          <br />
          Bien trabajado y con buena asesoría, los planes de gobierno de
          Obamacare, son de los mejores beneficios que tenemos como ciudadanos
          dentro de Estados Unidos. <br />
          <br /> Contáctenos y le asesoraremos para brindarle la cobertura
          médica que mejor se adapte a usted y su familia según sus necesidades.
        </p>
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Contáctenos
        </button>
      </div>
      <div className="question-container">
        <h1>¿Cuál es el período de inscripción?</h1>
        <p>
          El período de inscripción para el seguro Obamacare 2022 (Obamacare
          Open Enrollment) comienza el 1° de noviembre y finaliza el 15 de
          diciembre del 2021. <br />
          <br />
          De todas maneras, hay muchos casos, en los cuales usted se puede
          afiliar en cualquier mes del año.
          <br />
          <br />
          Si usted no pudo afiliarse en el período de inscripción abierta, no
          dude en contactarse con nosotros para poder ayudarlo a afiliarse.
        </p>
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Contáctenos
        </button>
      </div>
      <div className="question-container">
        <h1>¿Qué requisitos necesito para calificar?</h1>
        <p>
          - Tener un estatus migratorio legal en Estados Unidos (Permiso de
          trabajo, residencia, ciudadanía).
          <br />
          <br /> - No tener cobertura médica a través de su empleador.
          <br />
        </p>
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Calificar Ahora
        </button>
      </div>
      <div className="question-container">
        <h1>¿Qué servicios y coberturas brinda el seguro médico Obamacare?</h1>
        <p>
          Obamacare ofrece protección médica a todos los ciudadanos del país.
          Mediante sus diferentes tipos de pólizas nos ayuda a estar protegidos
          financieramente de los siguientes gastos: <br />
          <br />
          <br />
          - Servicios médicos de emergencia <br />
          <br />
          - Consultas de especialistas <br />
          <br />
          - Consultas de médicos primarios <br /> <br />
          - Análisis de laboratorio
          <br />
          <br /> - Terapias de rehabilitación
          <br /> <br />
          - Cuidados preventivos <br />
          <br />
          - Medicamentos recetados por el doctor <br />
          <br />
          - Ingresos hospitalarios <br />
          <br />- Permite la atención psicológica y cuidados preventivos
        </p>
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Contáctenos
        </button>
      </div>
      <div className="question-container">
        <h1>¿Qué beneficios tiene el plan de seguros Obamacare?</h1>
        <p>
          - Permite a los adultos jóvenes continuar en los planes de sus padres
          hasta los 26 años.
          <br />
          <br />
          - Permite ver a su doctor primario desde 0 dólar la visita.
          <br />
          <br />
          - Permite ver a su especialista desde 5 dólares la visita. <br />
          <br />
          - Permite tener un deducible de 0 dólar.
          <br />
          <br />- Evita que las empresas aseguradoras le nieguen la cobertura o
          le cobren más según su estado de salud, lo descalifiquen si está
          enfermo o si comete algún error honesto en su solicitud. <br />
          <br />
          - Elude la discriminación de género. <br />
          <br />
          - Impide que las compañías aseguradoras impongan incrementos
          injustificados en las cuotas.
          <br /> <br />
          - Extiende la cobertura a decenas de millones de personas mediante el
          subsidio de costos de seguros médicos a través del Mercado de Seguros
          Médicos (healthcare.gov y los mercados de seguros estatales). <br />
          <br />- Asegura que todos los planes cubran los beneficios mínimos con
          límites en los costos y ofrece diez beneficios esenciales.
        </p>
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Contáctenos
        </button>
      </div>
      <div className="question-container">
        <h1>¿Qué costo tiene el plan de seguro médico Obamacare?</h1>
        <p>
          Los precios de un seguro médico de Obamacare están entre los 0 USD y
          los 45 USD mensuales. <br />
          <br />
          Las prestaciones de servicios de alta calidad rondan los 20 dólares
          mensuales en un plan Silver. <br />
          <br />
          Por supuesto, esto varía según cada caso: mientras mayor sea el
          ingreso familiar, menor será el subsidio del gobierno en el seguro
          médico Obamacare. <br />
          <br />
          Si sus ingresos anuales califican podría tener un seguro médico sin
          costo.
          <br />
        </p>
        <button className="question-button">Contáctenos</button>
      </div>
      <div
        className="question-container"
        onClick={() => history.push("/contact")}
      >
        <h1>¿A partir de cuándo puedo empezar a usar mi cobertura de salud?</h1>
        <p>
          Si aplica para un seguro de salud Obamacare en el período de
          inscripción abierta, usted contará con cobertura a partir del 1 de
          enero.
          <br />
          <br />
          De lo contrario, empezaría el primer día del mes siguiente de que haya
          hecho su solicitud.
          <br />
        </p>
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Contáctenos
        </button>
      </div>
      <div className="question-container last">
        <InsuranceLogos />
        <button
          className="question-button"
          onClick={() => history.push("/contact")}
        >
          Contáctenos
        </button>
      </div>
    </div>
  );
};

export default Questions;
