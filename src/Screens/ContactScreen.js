import React from "react";
import "./ContactScreen.css";
import imgContact from "../assets/contact-img.jpg";
import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
  return (
    <div className="contact-main">
      <h2 style={{ marginTop: 180 }}>Contáctenos</h2>
      <div className="form-container">
        <ContactForm />
        <img alt="contact" src={imgContact} className="contact-img" />
      </div>
    </div>
  );
};

export default ContactScreen;
