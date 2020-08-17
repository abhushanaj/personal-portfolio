import React, { useEffect } from "react";

import { SecondaryTagButton } from "../../components/ button/button.component";

import projectDetails from "./projectDetails";

import "./project-details-page.styles.scss";

const ProjectDetailsPage = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { projectName } = match.params;
  const data = projectDetails[projectName];

  const {
    title,
    description,
    projectLink,
    projectBackground,
    projectStaticPreview,
  } = data;

  return (
    <div className="project__information u-container">
      <div className="project-page">
        <div className="project-page__left">
          <h1 className="project__name">{title}</h1>
          <p className="project__desc">{description}</p>
          <SecondaryTagButton url={projectLink}>
            View Project
          </SecondaryTagButton>
        </div>
        <div className="project-page__right">
          <h2 className="project__background">Project Background</h2>
          <p className="project__reason">{projectBackground}</p>
          <h2 className="static__preview">Static Preview</h2>
          <div
            className="preview__collage"
            style={{
              backgroundImage: `url(${projectStaticPreview})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
