import React, { useEffect } from "react";
import "./ContactScreen.css";
import imgContact from "../assets/contact-img.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "animate.css";

const ContactScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contact-main">
        <h1 className="contact-h1 animate__animated animate__slideInDown">
          Contáctenos
        </h1>
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
