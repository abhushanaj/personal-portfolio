import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";

import Footer from "./components/footer/footer.component";

import "./App.scss";

const AboutPage = lazy(() => import("./pages/aboutpage/aboutpage.component"));
const ProjectDetailsPage = lazy(() =>
  import("./pages/project-details-page/project-details-page.component")
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/details/:projectName" component={ProjectDetailsPage} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
