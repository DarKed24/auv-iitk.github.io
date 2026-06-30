import React, { useRef } from "react";

import "./LPHeader.scss";

const scrollToSelector = (sel) => {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const diveDown = () => {
  // Scroll exactly past the hero (its own height) rather than by viewport
  // height — on mobile the browser chrome makes innerHeight < the hero, which
  // left the hero partially visible after the scroll.
  const hero = document.querySelector(".lp-hero");
  const target = hero ? hero.offsetHeight - 1 : window.innerHeight;
  window.scrollTo({ top: target, behavior: "smooth" });
};

// Pre-computed bubble field — varied size / position / speed for an organic rise.
const BUBBLES = [
  { left: "5%", size: 14, delay: 0, dur: 11 },
  { left: "12%", size: 8, delay: 4, dur: 9 },
  { left: "20%", size: 22, delay: 2, dur: 14 },
  { left: "28%", size: 10, delay: 6, dur: 10 },
  { left: "36%", size: 16, delay: 1, dur: 13 },
  { left: "44%", size: 7, delay: 5, dur: 8 },
  { left: "52%", size: 26, delay: 3, dur: 16 },
  { left: "60%", size: 11, delay: 7, dur: 11 },
  { left: "67%", size: 18, delay: 2, dur: 12 },
  { left: "74%", size: 9, delay: 6, dur: 9 },
  { left: "81%", size: 20, delay: 0, dur: 15 },
  { left: "88%", size: 12, delay: 4, dur: 10 },
  { left: "94%", size: 8, delay: 8, dur: 13 },
];

function LandingPageHeader() {
  const title = "AUV-IITK";
  const heroRef = useRef(null);

  // Mouse parallax — feed pointer position into CSS custom properties.
  const handleMove = (e) => {
    const node = heroRef.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    node.style.setProperty("--mx", x.toFixed(3));
    node.style.setProperty("--my", y.toFixed(3));
  };

  const handleLeave = () => {
    const node = heroRef.current;
    if (!node) return;
    node.style.setProperty("--mx", "0");
    node.style.setProperty("--my", "0");
  };

  return (
    <header
      className="lp-hero"
      ref={heroRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Layered ocean backdrop */}
      <div className="lp-hero__bg" />
      <div className="lp-hero__caustics" />
      <div className="lp-hero__glow" />
      <div className="lp-hero__vignette" />

      {/* Rising bubbles */}
      <div className="lp-hero__bubbles" aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="lp-bubble"
            style={{
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Foreground content (parallax-reactive) */}
      <div className="lp-hero__content">
        <span className="lp-hero__kicker">Indian Institute of Technology Kanpur</span>

        <h1 className="lp-hero__title" aria-label={`Team ${title}`}>
          <span className="lp-hero__title-pre">TEAM</span>
          <span className="lp-hero__title-main">
            {title.split("").map((ch, i) => (
              <span
                key={i}
                className="lp-hero__char"
                style={{ animationDelay: `${0.4 + i * 0.05}s` }}
              >
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <p className="lp-hero__tagline">A dive into the unfathomable</p>

        <div className="lp-hero__actions">
          <button className="lp-btn lp-btn--primary" onClick={diveDown}>
            <span>Dive In</span>
          </button>
          <button
            className="lp-btn lp-btn--ghost"
            onClick={() => scrollToSelector("#fleet")}
          >
            <span>Explore the Fleet</span>
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className="lp-hero__scroll"
        onClick={diveDown}
        aria-label="Scroll down"
      >
        <span className="lp-hero__mouse">
          <span className="lp-hero__wheel" />
        </span>
        <span className="lp-hero__scroll-text">Begin the descent</span>
      </button>

      {/* Animated multi-layer tide — path spans two wavelengths (0..2880)
          so a -1440px shift loops seamlessly with no mid-screen gap. */}
      <div className="lp-hero__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <defs>
            <path
              id="wavePath"
              d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 C1680,140 1920,20 2160,80 C2400,140 2640,20 2880,80 L2880,200 L0,200 Z"
            />
          </defs>
          <use href="#wavePath" className="lp-wave lp-wave--1" y="0" />
          <use href="#wavePath" className="lp-wave lp-wave--2" y="8" />
          <use href="#wavePath" className="lp-wave lp-wave--3" y="16" />
          <use href="#wavePath" className="lp-wave lp-wave--4" y="26" />
        </svg>
      </div>
    </header>
  );
}

export default LandingPageHeader;
