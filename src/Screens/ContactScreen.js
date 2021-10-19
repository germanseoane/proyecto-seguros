import React from "react";
import "./ContactScreen.css";
import imgContact from "../assets/contact-img.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactScreen = () => {
  return (
    <>
      <div className="contact-main">
        <h1 className="contact-h1">Contáctenos</h1>
        <img alt="contact" src={imgContact} className="contact-img" />
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactScreen;
