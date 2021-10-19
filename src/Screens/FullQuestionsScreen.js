import React, { useEffect } from "react";
import "./FullQuestionsScreen.css";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

const FullQuestionsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-screen">
      <div style={{ height: 180 }}></div>
      <div className="main-questions">
        <Questions />
      </div>
      <Footer />
    </div>
  );
};

export default FullQuestionsScreen;
