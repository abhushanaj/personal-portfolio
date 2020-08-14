import React from "react";

import Header from "../../components/header/header.component";
import ProjectOverview from "../../components/project-overview/project-preview.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className="other-content u-container">
        <h2 className="secondary-heading" id="projects">
          Projects Done
        </h2>
        <ProjectOverview />
      </div>
    </>
  );
};

export default HomePage;
