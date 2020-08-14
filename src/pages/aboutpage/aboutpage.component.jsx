import React from "react";

import AboutMeCard from "../../components/about-me-card/about-me-card.component";

import "./aboutpage.styles.scss";

const AboutPage = () => {
  return (
    <>
      <div className="about-section u-container">
        <div className="about__left">
          <AboutMeCard />
        </div>
        <div className="about__right">
          <h4 className="about-title">About Me</h4>
          <p className="about-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            beatae id perspiciatis culpa nostrum ex nihil quibusdam assumenda
            aut incidunt?
          </p>
          <p className="about-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            beatae id perspiciatis culpa nostrum ex nihil quibusdam assumenda
            aut incidunt?
          </p>
          <p className="about-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            beatae id perspiciatis culpa nostrum ex nihil quibusdam assumenda
            aut incidunt?
          </p>
          <p className="about-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            beatae id perspiciatis culpa nostrum ex nihil quibusdam assumenda
            aut incidunt?
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
