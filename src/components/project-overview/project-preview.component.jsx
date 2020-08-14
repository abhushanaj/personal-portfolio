import React from "react";

import ProjectPreviewCard from "../project-preview-card/project-preview-card.component";

import projectList from "./project-lists";
import "./project-preview.styles.scss";

const ProjectOverview = () => {
  console.log(projectList);
  return (
    <>
      {projectList.map((project, index) => {
        if (index % 2 === 0) {
          return <ProjectPreviewCard {...project} />;
        } else {
          return <ProjectPreviewCard changedOrder {...project} />;
        }
      })}
    </>
  );
};

export default ProjectOverview;
