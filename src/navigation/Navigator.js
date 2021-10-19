import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BackDrop from "../components/BackDrop";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import ContactScreen from "../Screens/ContactScreen";
import ErrorScreen from "../Screens/ErrorScreen";
import FullQuestionsScreen from "../Screens/FullQuestionsScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";

const Navigator = () => {
  const [active, setActive] = useState(false);
  const [question, setQuestion] = useState("OBAMACARE");
  return (
    <Router>
      <Header />
      <Navbar active={active} setActive={setActive} setQuestion={setQuestion} />
      <SideDrawer active={active} setActive={setActive} />
      <BackDrop active={active} setActive={setActive} />
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/full" component={FullQuestionsScreen} />
        <Route exact path="/contact" component={ContactScreen} />
        <Route path="*" component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

export default Navigator;
