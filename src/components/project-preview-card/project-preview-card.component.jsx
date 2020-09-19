import React from "react";

import TagLists from "../taglists/taglists.component";

import { PrimaryButton, SecondaryTagButton } from "../ button/button.component";

import "./project-preview-card.styles.scss";

const ProjectPreviewCard = (props) => {
  const {
    projectTitle,
    projectDescription,
    viewDemoLink,
    viewCodeLink,
    changedOrder,
    coverImg,
    tagLists,
  } = props;

  return (
    <article className="project__card ">
      <div
        className={`project__cover ${changedOrder ? "project__cover--2" : ""}`}
      >
        <img src={coverImg} alt="Insure Cover Cover" />
      </div>
      <div
        className={`project__details ${
          changedOrder ? "project__details--2" : ""
        }`}
      >
        <h3 className="project__title">{projectTitle}</h3>
        <p className="project__desc">{projectDescription}</p>

        <TagLists tagLists={tagLists} />

        <div className="btn__group">
          <PrimaryButton url={viewDemoLink}>View Demo</PrimaryButton>
          <SecondaryTagButton url={viewCodeLink}>View Code</SecondaryTagButton>
        </div>
      </div>
    </article>
  );
};

export default ProjectPreviewCard;
