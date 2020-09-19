import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import PageLoader from "./components/loader/loader.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

const AboutPage = lazy(() => import("./pages/aboutpage/aboutpage.component"));

const ExperiencePage = lazy(() =>
  import("./pages/experience-page/experience-page.component")
);

const ProjectsPage = lazy(() =>
  import("./pages/projects-page/projects-page.component")
);

const ContactPage = lazy(() =>
  import("./pages/contact-page/contact-page.component")
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/experience" component={ExperiencePage} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
