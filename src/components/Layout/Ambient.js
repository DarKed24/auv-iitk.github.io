import React from "react";

/* Ambient deep-ocean glow that drifts behind the page content. */
function Ambient() {
  return (
    <div className="lm-ambient" aria-hidden="true">
      <span className="lm-blob lm-blob--1" />
      <span className="lm-blob lm-blob--2" />
      <span className="lm-blob lm-blob--3" />
    </div>
  );
}

export default Ambient;
