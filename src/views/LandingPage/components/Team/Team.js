import React from "react";
import teamphoto from "assets/img/DSC02829.jpg";
import { Link } from "react-router-dom";
import "./Team.css";

function Team() {
  return (
    <section
      className="lm-team"
      style={{ backgroundImage: `url(${teamphoto})` }}
    >
      <div className="lm-team__overlay" />
      <div className="lm-container lm-team__inner">
        <span className="lm-eyebrow lm-eyebrow--center">The People</span>
        <h2 className="lm-heading lm-heading--center">
          A crew that <span className="lm-grad">never sleeps</span>
        </h2>
        <p className="lm-team__text">
          Over the years our team has brought together students from every
          department — sharing ideas and building a small but fierce network of
          people chasing low-cost solutions to large-scale problems. Long nights
          and hard problems forge a bond (and plenty of nicknames) that lasts
          well beyond the lab.
        </p>
        <Link to="/team" className="lp-btn lp-btn--primary">
          <span>Meet the Team</span>
        </Link>
      </div>
    </section>
  );
}

export default Team;
