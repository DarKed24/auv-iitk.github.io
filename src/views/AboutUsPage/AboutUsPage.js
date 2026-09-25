import React from "react";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import JoinUs from "components/Sections/JoinUs";
import FadeIn from "views/Animations/FadeIn";
import heroImg from "assets/img/backgrounds/hdunderwater.jpg";

import AboutUs from "views/LandingPage/components/AboutUs/AboutUs";
import Participation from "./components/Participation/Participation";
import Journey from "./components/Journey/Journey";
import Pillars from "./components/Achievements/Achievements";

function AboutUsPage() {
  return (
    <PageShell title="About Us">
      <PageHero
        kicker="About Us"
        title="A dive into the unfathomable"
        lead="Team AUV-IITK is a student-run research group at IIT Kanpur that designs, builds and deploys autonomous underwater vehicles — from the first weld to the final mission run."
        image={heroImg}
        meta={
          <>
            <span className="oc-chip"><i className="fa fa-calendar" aria-hidden="true" /> Est. 2014</span>
            <span className="oc-chip"><i className="fa fa-users" aria-hidden="true" /> 25+ members</span>
            <span className="oc-chip"><i className="fa fa-ship" aria-hidden="true" /> 3 vehicles built</span>
          </>
        }
      />

      <FadeIn direction="up">
        <AboutUs showStoryLink={false} />
      </FadeIn>

      <FadeIn direction="up">
        <Participation />
      </FadeIn>

      <FadeIn direction="up">
        <Journey />
      </FadeIn>

      <FadeIn direction="up">
        <Pillars />
      </FadeIn>

      <JoinUs />
    </PageShell>
  );
}

export default AboutUsPage;
