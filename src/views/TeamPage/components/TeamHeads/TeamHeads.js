import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "components/UI/MemberCard";
import SectionHeading from "components/UI/SectionHeading";
import teamheads from "data/TeamHeads.json";

const advisors = teamheads.teamData.find((s) => s.heading === "Faculty Advisor")?.items ?? [];

/* Intro copy + faculty advisor card at the top of the team page. */
function TeamIntro() {
  return (
    <section className="oc-section">
      <div className="lm-container">
        <div className="oc-split">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  A small network with <span className="lm-grad">big ambitions</span>
                </>
              }
            />
            <p className="lm-lead">
              Over the past years the team has witnessed a close collaboration
              between students from various departments coming together and
              sharing ideas — creating a small yet strong network of people
              eagerly looking for low-cost solutions to large-scale problems.
            </p>
            <p className="lm-body">
              Working long hours and brainstorming complex problems leads to a
              very special bond between the members of the team. It also leads
              to a lot of nicknames and some extremely fun gaming nights.
            </p>
            <Link to="/about-us" className="lm-link-btn">
              Our Story
              <span className="lm-link-btn__arrow">→</span>
            </Link>
          </div>

          <div>
            <span className="lm-eyebrow">Faculty Advisor</span>
            {advisors.map((m) => (
              <MemberCard member={m} key={m.name} wide />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamIntro;
