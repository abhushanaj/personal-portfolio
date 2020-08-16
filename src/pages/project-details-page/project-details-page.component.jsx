import React from "react";

import ProjectPageCover from "../../components/project-page-cover/project-page-cover.component";
import { SecondaryTagButton } from "../../components/ button/button.component";

import "./project-details-page.styles.scss";

const ProjectDetailsPage = ({ match }) => {
  const { projectName } = match.params;
  console.log(projectName);
  return (
    <div className="project__information u-container">
      <ProjectPageCover />
      <div className="project-page">
        <div className="project-page__left">
          <h1 className="project__name">Fictious Client</h1>
          <p className="project__desc">
            Fictious Client is a collection of over 10 beautiful and elegantly
            designed, responsive landing pages for fictional product based
            companies to learn more in depth about HTML, CSS and
            Responsive-Design
          </p>
          <SecondaryTagButton url="https://github.com/abhu-A-J">
            View Project
          </SecondaryTagButton>
        </div>
        <div className="project-page__right">
          <h2 className="project__background">Project Background</h2>
          <p className="project__reason">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illum
            cum modi beatae itaque praesentium. Id asperiores magnam dolor
            necessitatibus laborum fugiat quos inventore minus doloremque error
            itaque tenetur consectetur dolores ipsum nihil ad, placeat
            laudantium distinctio unde nam, consequatur harum. Quam at fuga
            sapiente tempore magnam ratione, ab aperiam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolorum corporis minima, est
            consequuntur ab quasi exercitationem? A error ratione voluptates?
          </p>
          <h2 className="static__preview">Static Preview</h2>
          <div className="preview__collage">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
