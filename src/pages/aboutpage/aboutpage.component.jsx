import React from "react";

import AboutMeCard from "../../components/about-me-card/about-me-card.component";
import AboutMeDescription from "../../components/about-me-description/about-me-description.component";
import AboutMeSkills from "../../components/about-me-skills/about-me-skills.component";

import "./aboutpage.styles.scss";

const AboutPage = () => {
  return (
    <>
      <div className="about-section u-container">
        <div className="about__left">
          <AboutMeCard />
        </div>
        <div className="about__right">
          <AboutMeDescription />
          <AboutMeSkills />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
