import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import AppToast from "./AppToast";
import { SpinnerCircular } from "spinners-react";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const showResult = (message) => {
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setMessage(null);
    }, 2000);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("El campo nombre es requerido"),
          email: Yup.string()
            .email("Debe ser un email valido")
            .required("El campo email es requerido"),
          phone: Yup.string()
            .min(4, "Tiene que ser un telefono valido")
            .required("El campo telefono es requerido"),
        })}
        onSubmit={async (templateParams) => {
          setLoading(true);
          try {
            await emailjs.send(
              "service_7iwjh68",
              "template_s0sg6mf",
              { templateParams },
              "user_GbvAXVVMgGe1Sa4r8U6bO"
            );
            showResult(
              "Gracias por su consulta, lo contactaremos al a brevedad"
            );
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
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Nombre *"
                className="contact-input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="errors">{touched.name && errors.name}</p>
              <input
                placeholder="Email *"
                className="contact-input mid"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <p className="errors">{touched.email && errors.email}</p>
              <input
                placeholder="Telefono *"
                className="contact-input last"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="errors">{touched.phone && errors.phone}</p>
              <textarea
                placeholder="Mensaje (maximo 150 caracteres)"
                className="contact-input message-area"
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={150}
              />
              <button className="contact-button" type="submit">
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
    </div>
  );
};

export default ContactForm;
