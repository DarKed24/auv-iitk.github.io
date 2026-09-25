import React, { useEffect } from "react";

import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import ScrollProgress from "components/Layout/ScrollProgress";
import Ambient from "components/Layout/Ambient";
import JoinUs from "components/Sections/JoinUs";
import FadeIn from "views/Animations/FadeIn.js";

import AboutUs from "./components/AboutUs/AboutUs.js";
import Team from "./components/Team/Team.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Vehicles from "./components/Vehicles/Vehicles.js";
import Achievements from "./components/Achievements/Achievements";
import Marquee from "./components/Marquee/Marquee.js";
import "./LandingModern.css";

function LandingPage() {
  useEffect(() => {
    document.title = "Team AUV-IITK · Autonomous Underwater Vehicles, IIT Kanpur";
    return () => {
      document.title = "Team AUV-IITK";
    };
  }, []);

  return (
    <div className="ocean-page landing-modern">
      <ScrollProgress showDepth />
      <LandingPageHeader />
      <ExamplesNavbar />
      <Ambient />

      <main className="oc-main">
        <Marquee />

        <FadeIn direction="up">
          <AboutUs />
        </FadeIn>

        <section id="fleet">
          <FadeIn direction="up">
            <Vehicles />
          </FadeIn>
        </section>

        <FadeIn direction="up">
          <Achievements />
        </FadeIn>

        <FadeIn direction="up">
          <Team />
        </FadeIn>

        <FadeIn direction="up">
          <Sponsors />
        </FadeIn>

        <JoinUs />
      </main>
    </div>
  );
}

export default LandingPage;
