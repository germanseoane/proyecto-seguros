import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          phone: Yup.string().min(4).required(),
        })}
        onSubmit={async (templateParams) => {
          try {
            await emailjs.send(
              "service_7iwjh68",
              "template_s0sg6mf",
              { templateParams },
              "user_GbvAXVVMgGe1Sa4r8U6bO"
            );
            console.log("success!");
          } catch (err) {
            console.log(err);
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
                placeholder="Nombre"
                className="contact-input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                placeholder="Email"
                className="contact-input mid"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                placeholder="Telefono"
                className="contact-input last"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <textarea
                placeholder="Mensaje"
                className="contact-input message-area"
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button className="contact-button" type="submit">
                Enviar
              </button>
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
