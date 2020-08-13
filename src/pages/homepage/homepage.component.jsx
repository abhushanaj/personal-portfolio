import React from "react";

import Header from "../../components/header/header.component";
import ProjectPreviewCard from "../../components/project-preview-card/project-preview-card.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className="other-content u-container">
        <h2 className="secondary-heading">Projects Done</h2>
        <ProjectPreviewCard />
        <ProjectPreviewCard changedOrder />
      </div>
    </>
  );
};

export default HomePage;
