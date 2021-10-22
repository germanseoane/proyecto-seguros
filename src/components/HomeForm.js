import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import AppToast from "./AppToast";
import { SpinnerCircular } from "spinners-react";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "./HomeForm.css";

const HomeForm = () => {
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState();
  const history = useHistory();

  const showResult = (message) => {
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setMessage(null);
      history.push("/about");
    }, 2000);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("El campo nombre es requerido"),
        email: Yup.string()
          .email("Debe ser un email valido")
          .required("El campo email es requerido"),
      })}
      onSubmit={async (templateParams) => {
        setLoading(true);
        try {
          templateParams.phone = phone;
          await emailjs.send(
            "service_7iwjh68",
            "template_s0sg6mf",
            { templateParams },
            "user_GbvAXVVMgGe1Sa4r8U6bO"
          );
          showResult("Gracias!, lo contactaremos al a brevedad");
          setLoading(false);
        } catch (err) {
          showResult("Error enviando formulario, intente mas tarde");
          console.log(err);
          setLoading(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <>
          <form className="simpleform-container" onSubmit={handleSubmit}>
            <input
              placeholder="Nombre*"
              className="simple-input first"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="errors">{touched.name && errors.name}</p>
            <input
              placeholder="Email*"
              className="simple-input"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="errors">{touched.email && errors.email}</p>
            <PhoneInput
              value={phone}
              onChange={(e) => setPhone(e)}
              country="us"
              onlyCountries={[
                "ca",
                "us",
                "mx",
                "cu",
                "gt",
                "hn",
                "jm",
                "sv",
                "pr",
                "cr",
                "pa",
                "ve",
                "co",
                "do",
              ]}
              inputStyle={{
                border: "none",
                borderRadius: 0,
                width: "100%",
                height: 44,
                paddingLeft: 48,
                fontSize: 18,
              }}
              buttonStyle={{
                border: "none",
                background: "whitesmoke",
                borderRadius: 0,
                paddingRight: 2,
              }}
            />
            <button className="simple-btn" type="submit">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Enviar
                <SpinnerCircular
                  enabled={loading}
                  size={22}
                  color="white"
                  style={{ marginLeft: 10 }}
                />
              </div>
            </button>
          </form>
          {show && <AppToast title={message} />}
        </>
      )}
    </Formik>
  );
};

export default HomeForm;
