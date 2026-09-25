import React from "react";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import JoinUs from "components/Sections/JoinUs";
import FadeIn from "views/Animations/FadeIn";
import teamphoto from "assets/img/DSC02829.jpg";

import TeamIntro from "./components/TeamHeads/TeamHeads";
import Subsystems from "./components/Subsystems/Subsystem";
import LegacyRail from "./components/LegacyCarousel/LegacyCarousel";
import TeamVideo from "./components/TeamVideo/TeamVideo";

function TeamPage() {
  return (
    <PageShell title="Team">
      <PageHero
        kicker="The People"
        title="Meet the crew"
        lead="Students from every department of IIT Kanpur, bound by long nights, hard problems and a shared obsession with making a robot think for itself underwater."
        image={teamphoto}
        actions={
          <>
            <a href="#subsystems" className="lp-btn lp-btn--primary">
              <span>Explore Subsystems</span>
            </a>
            <a href="#alumni" className="lp-btn lp-btn--ghost">
              <span>Past Members</span>
            </a>
          </>
        }
      />

      <FadeIn direction="up">
        <TeamIntro />
      </FadeIn>

      <section id="subsystems">
        <FadeIn direction="up">
          <Subsystems />
        </FadeIn>
      </section>

      <section id="alumni">
        <FadeIn direction="up">
          <LegacyRail />
        </FadeIn>
      </section>

      <FadeIn direction="up">
        <TeamVideo />
      </FadeIn>

      <JoinUs
        kicker="Recruitment"
        title="Want a seat on the crew?"
        text="We recruit across mechanical, electrical, software and business every year. If you would rather build a submarine than read about one, we should talk."
      />
    </PageShell>
  );
}

export default TeamPage;
