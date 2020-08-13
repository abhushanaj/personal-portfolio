import React from "react";

import "./project-preview-card.styles.scss";

const ProjectPreviewCard = ({ changedOrder }) => {
  console.log(changedOrder);
  return (
    <article className="project__card ">
      <div
        className={`project__cover ${changedOrder ? "project__cover--2" : ""}`}
      >
        <img
          src="https://raw.githubusercontent.com/abhu-A-J/Eye-for-an-UI/master/Insure-Landing-Page/design/desktop-preview.jpg"
          alt="Insure Cover Cover"
        />
      </div>
      <div
        className={`project__details ${
          changedOrder ? "project__details--2" : ""
        }`}
      >
        <h3 className="project__title">Fictious Client</h3>
        <p className="project__desc">
          Fictious Client is a collection of over 10 beautiful and elegantly
          designed, responsive landing pages for fictional product based
          companies to learn more in depth about HTML, CSS and
          Responsive-Design.
        </p>

        <ul className="tag__lists">
          <li className="tag">#HTML</li>
          <li className="tag">#CSS</li>
          <li className="tag">#Responsive-Design</li>
        </ul>

        <div className="btn__group">
          <a className="btn btn--primary" href="#!">
            View Demo
          </a>
          <a className="btn btn--secondary" href="#!">
            View Code
          </a>
          <button className="btn btn--secondary">Read More</button>
        </div>
      </div>
    </article>
  );
};

export default ProjectPreviewCard;
