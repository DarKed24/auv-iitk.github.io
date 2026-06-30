import React from "react";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <section className="lm-cta">
      {/* animated tide at the top edge of the CTA */}
      <div className="lm-cta__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <defs>
            <path
              id="ctaWave"
              d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,120 C1680,60 1920,180 2160,120 C2400,60 2640,180 2880,120 L2880,0 L0,0 Z"
            />
          </defs>
          <use href="#ctaWave" className="lm-cta__wave lm-cta__wave--1" y="0" />
          <use href="#ctaWave" className="lm-cta__wave lm-cta__wave--2" y="10" />
        </svg>
      </div>

      <div className="lm-cta__inner">
        <span className="lm-cta__kicker">Join the crew</span>
        <h2 className="lm-cta__title">Ready to dive in?</h2>
        <p className="lm-cta__text">
          We are always looking for curious minds who want to push the limits of
          underwater robotics. Reach out and become part of the descent.
        </p>
        <div className="lm-cta__actions">
          <Link to="/contact-us" className="lp-btn lp-btn--primary">
            <span>Get in Touch</span>
          </Link>
          <a
            href="https://www.instagram.com/auviitk/"
            target="_blank"
            rel="noreferrer"
            className="lp-btn lp-btn--ghost"
          >
            <span>Follow our Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
