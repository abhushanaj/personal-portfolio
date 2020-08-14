import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
