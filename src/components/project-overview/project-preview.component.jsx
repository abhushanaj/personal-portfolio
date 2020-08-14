import React from "react";

import ProjectPreviewCard from "../project-preview-card/project-preview-card.component";

import projectList from "./project-lists";
import "./project-preview.styles.scss";

const ProjectOverview = () => {
  return (
    <>
      {projectList.map((project, index) => {
        if (index % 2 === 0) {
          return <ProjectPreviewCard key={index} {...project} />;
        } else {
          return <ProjectPreviewCard key={index} changedOrder {...project} />;
        }
      })}
    </>
  );
};

export default ProjectOverview;
