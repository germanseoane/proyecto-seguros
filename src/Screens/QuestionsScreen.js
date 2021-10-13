import React from "react";
import "./QuestionsScreen.css";
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
import mainImage from "../assets/questions.jpg";
import SelectQuestion from "../components/SelectQuestion";
import InsuranceLogos from "../components/InsuranceLogos";

const QuestionsScreen = ({ question, setQuestion }) => {
  return (
    <div className="main">
      <img src={mainImage} alt="qImage" className="main-image" />
      <div className="question-opacity"></div>
      <div className="select-question">
        <SelectQuestion question={question} setQuestion={setQuestion} />
      </div>
      <div className="question-info">
        {question === OBAMACARE && (
          <>
            <h1>Que es Obamacare?</h1>
            <p className="long-text">
              Obamacare asigna un subsidio a las familias para ayudarles a pagar
              su seguro médico. <br />
              <br />
              El seguro Obamacare es el mismo que el seguro privado, la
              diferencia entre Obama Care y un seguro privado es que si usted
              califica, se le otorga el subsidio para pagar parte del valor del
              seguro, mientras que en el seguro privado lo debe pagar por
              completo. <br />
              <br />
              Con el plan Obamacare usted no accede a un seguro de salud sino a
              un crédito fiscal del gobierno que subsidia los altos costos de
              los planes médicos privados, pudiendo acceder a los mismos. <br />
              <br />
              Si usted califica, se le otorga dicho subsidio para pagar parte
              del valor del seguro, mientras que en el seguro privado lo debería
              pagar usted por completo. <br />
              <br />
              Los subsidios de este plan ayudan a aquellas personas que no
              pueden acceder a pólizas debido a su situación económica. Para
              calificar se toma en consideración la situación familiar, la edad,
              el hogar y los ingresos de cada cliente. <br />
              <br />
              Contáctenos y le asesoraremos para brindarle la cobertura
              médica/seguro que mejor se adapte a usted y su familia según sus
              necesidades.
            </p>
          </>
        )}
        {question === INSCRIPTION && (
          <>
            <h1>Cual es el periodo de inscripcion?</h1>
            <p className="long-text">
              El período de inscripción para el seguro Obama care 2022
              (Obamacare Open Enrollment) comienza el 1° de noviembre y finaliza
              el 15 de diciembre. Fuera de esos dos meses usted solo puede
              obtener una aseguranza médica con carácter excepcional. <br />
              <br />
              Tiene que haber perdido cobertura por su trabajo o por Medicaid o
              haber cambiado de estatus migratorio.
            </p>
          </>
        )}
        {question === QUALIFY && (
          <>
            <h1>Que requisitos necesito para calificar?</h1>
            <p className="long-text">
              _Tener un estatus migratorio legal en Estados Unidos (Permiso de
              _trabajo, residencia, ciudadanía)
              <br />
              <br /> _No contar con ingresos anuales superiores a $ 51.520
              <br />
              <br /> _No tener cobertura médica a través de su empleador
              <br />
              <br /> _No estar en prisión
              <br />
              <br />
              _Aplicar durante el periodo de inscripción para Obamacare 2022 (1°
              de Noviembre al 15 de diciembre)
            </p>
          </>
        )}
        {question === SERVICES && (
          <>
            <h1>
              Qué servicios y coberturas brinda el seguro médico Obama care?
            </h1>
            <p className="long-text">
              Obamacare ofrece protección médica a todos los ciudadanos del
              país. Mediante sus diferentes tipos de pólizas nos ayuda a estar
              protegidos financieramente de los siguientes gastos: <br />
              <br />
              <br />
              _Servicios médicos de emergencia <br />
              <br />
              _Consultas de especialistas <br />
              <br />
              _Análisis de laboratorio Terapias de rehabilitación Cuidados
              preventivos <br />
              <br />
              _Medicamentos recetados por el doctor <br />
              <br />
              _Ingresos hospitalarios Permite la atención psicológica y cuidados
              preventivos
            </p>
          </>
        )}
        {question === BENEFITS && (
          <>
            <h1>Qué beneficios tiene el plan de seguros Obama Care?</h1>
            <p className="long-text">
              Permite a los adultos jóvenes continuar en los planes de sus
              padres hasta los 26 años.
              <br />
              <br />
              Evita que las empresas aseguradoras le nieguen la cobertura o le
              cobren más según su estado de salud, lo descalifiquen si está
              enfermo o si comete algún error honesto en su solicitud. <br />
              <br />
              Elude la discriminación de género. <br />
              <br />
              Impide que las compañías aseguradoras impongan incrementos
              injustificados en las cuotas.
              <br /> <br />
              Elimina los límites de vida y los límites anuales de cobertura en
              dólares. <br />
              <br />
              Viabiliza una rápida apelación a las decisiones de las compañías
              aseguradoras.
              <br />
              <br />
              Extiende la cobertura a decenas de millones de personas mediante
              el subsidio de costos de seguros médicos a través del Mercado de
              Seguros Médicos (HealthCare.Gov y los mercados de seguros
              estatales). <br />
              <br />
              Extiende Medicaid a millones de ciudadanos en los Estados Unidos
              que así lo precisan y los mejora a los adultos mayores. <br />
              <br />
              Proporciona exenciones en impuestos a los negocios pequeños por
              ofrecer seguro médico a sus empleados. <br />
              <br />
              Requiere a los negocios grandes que aseguren a sus empleados,
              incluso aquellos con condiciones preexistentes. Facilita la
              asequibilidad a CHIP para los niños. <br />
              <br />
              Asegura que todos los planes cubran los beneficios mínimos con
              límites en los costos y ofrece diez beneficios esenciales.
            </p>
          </>
        )}
        {question === COST && (
          <>
            <h1>Qué costo tiene el plan de seguro médico Obama Care?</h1>
            <p className="long-text">
              Los precios de un seguro médico de Obamacare están entre los 0 USD
              y los 75 USD. <br />
              <br />
              Las prestaciones de servicios de alta calidad rondan los 30
              dólares mensuales en un plan Silver. <br />
              <br />
              Por supuesto, esto varía según cada caso: mientras mayor sea el
              ingreso familiar, menor será el subsidio del gobierno en el seguro
              médico Obamacare. <br />
              <br />
              <br />
              Si sus ingresos anuales califican podría tener un seguro médico
              sin costo. Con un plan tipo bronce, se beneficia de servicios de
              salud sin pagar ni un centavo. <br />
              <br />
              Eso sí, recuerde que su deducible de hospital será alto. No
              obstante, siempre recomendamos aplicar para Obamacare en español.
              <br />
              <br />
              Si ya cuenta con la documentación necesaria visite nuestra agencia
              en 7216 SW 8th St Ste 5 Miami Fl 33144. De esta manera podrá
              comenzar el proceso de solicitud. <br />
              <br />
              También puede comunicarse con nosotros a través del 786-910-9487
              donde uno de nuestros agentes le atenderá con gusto. <br />
              <br />
              El servicio de Obamacare 2022 en Florida es libre de costo.
            </p>
          </>
        )}
        {question === WHEN && (
          <>
            <h1>
              A partir de cuándo puedo empezar a usar mi cobertura de salud?
            </h1>
            <p className="long-text">
              Si aplica para un seguro de salud Obamacare en el período de
              inscripción abierta, usted contará con cobertura a partir del 1 de
              enero. <br />
              <br />
              En cambio, si ha ocurrido un cambio en su vida, y califica para
              una Inscripción Especial su cobertura estará vigente el día 1 del
              mes siguiente. <br />
              <br />
              Solo a partir de esta fecha, usted podrá contar con los beneficios
              de su cobertura médica.
            </p>
          </>
        )}
        {question === WORK && <InsuranceLogos />}

        <button className="info-btn">Contactenos ahora</button>
      </div>
    </div>
  );
};

export default QuestionsScreen;
