import React from "react";

import ProjectOverview from "../../components/project-overview/project-preview.component";

import "./projects-page.styles.scss";

const ProjectsPage = () => {
  return (
    <div className="projectpage u-container">
      <h2 className="secondary-heading" id="projects">
        Projects Done
      </h2>
      <ProjectOverview />
    </div>
  );
};

export default ProjectsPage;
