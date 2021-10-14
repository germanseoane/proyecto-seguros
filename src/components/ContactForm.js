import React from "react";

const ContactForm = () => {
  return (
    <div>
      <input placeholder="Nombre" className="contact-input" />
      <input placeholder="Email" className="contact-input mid" />
      <input placeholder="Telefono" className="contact-input last" />
      <textarea placeholder="Mensaje" className="contact-input message-area" />
      <button className="contact-button">Enviar</button>
    </div>
  );
};

export default ContactForm;
