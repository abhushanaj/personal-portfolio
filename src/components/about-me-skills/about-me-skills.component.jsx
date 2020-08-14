import React from "react";

import TagLists from "../taglists/taglists.component";

import "./about-me-skills.styles.scss";

const skillsSet = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Sass",
  "Styled-Components",
  "TypeScript",
  "Webpack",
  "Babel",
  "Git",
  "Github",
  "npm",
];

const AboutMeSkills = () => {
  return (
    <>
      <h4 className="about-title">My Skillset</h4>
      <div className="skills-grid">
        <TagLists tagLists={skillsSet} />
      </div>
    </>
  );
};

export default AboutMeSkills;
