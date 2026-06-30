import React, { useEffect, useRef } from "react";

import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

// core components
import AboutUs from "./components/AboutUs/AboutUs.js";
import Team from "./components/Team/Team.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Vehicles from "./components/Vehicles/Vehicles.js";
import Achievements from "./components/Achievements/Achievements";
import Marquee from "./components/Marquee/Marquee.js";
import JoinUs from "./components/JoinUs/JoinUs.js";
import "./LandingPage.css";
import "./LandingModern.css";
import FadeIn from "views/Animations/FadeIn.js";

/* Fixed gradient progress bar + thematic "depth" readout driven by scroll. */
function ScrollProgress() {
  const barRef = useRef(null);
  const depthRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
        if (depthRef.current) {
          depthRef.current.textContent = `${Math.round(p * 1000)}m`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="lm-progress" aria-hidden="true">
        <span ref={barRef} className="lm-progress__bar" />
      </div>
      <div className="lm-depth" aria-hidden="true">
        <span className="lm-depth__icon">🌊</span>
        <span ref={depthRef} className="lm-depth__value">
          0m
        </span>
        <span className="lm-depth__label">depth</span>
      </div>
    </>
  );
}

function LandingPage() {
  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("profile-page");
    window.scrollTo(0, 0);
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  }, []);

  return (
    <div className="mobile-responsive landing-modern">
      <ScrollProgress />
      <LandingPageHeader />
      <ExamplesNavbar page="landing-page" />

      {/* Ambient deep-ocean glow that drifts behind the content */}
      <div className="lm-ambient" aria-hidden="true">
        <span className="lm-blob lm-blob--1" />
        <span className="lm-blob lm-blob--2" />
        <span className="lm-blob lm-blob--3" />
      </div>

      <main className="main">
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
