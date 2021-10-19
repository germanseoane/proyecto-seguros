import React from "react";
import "./FullQuestionsScreen.css";
import { useHistory } from "react-router-dom";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

const FullQuestionsScreen = () => {
  const history = useHistory();

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
