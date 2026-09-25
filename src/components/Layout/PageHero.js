import React from "react";

const BUBBLES = [
  { left: "8%", size: 12, delay: 0, dur: 12 },
  { left: "22%", size: 7, delay: 3, dur: 9 },
  { left: "41%", size: 18, delay: 1, dur: 14 },
  { left: "58%", size: 9, delay: 5, dur: 10 },
  { left: "73%", size: 14, delay: 2, dur: 12 },
  { left: "90%", size: 8, delay: 6, dur: 9 },
];

/**
 * Compact hero used at the top of every inner page.
 *
 * Props:
 *   kicker   - small uppercase label above the title
 *   title    - string or node; wrapped in the gradient text style
 *   lead     - short paragraph under the title
 *   image    - optional background image (imported asset)
 *   meta     - optional node rendered as a chip row
 *   actions  - optional node rendered as a button row
 *   align    - "left" (default) | "center"
 */
function PageHero({ kicker, title, lead, image, meta, actions, align = "left", children }) {
  return (
    <header className={`oc-hero ${align === "center" ? "oc-hero--center" : ""}`}>
      {image && (
        <div
          className="oc-hero__img"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}
      <div className="oc-hero__caustics" aria-hidden="true" />
      <div className="oc-hero__vignette" aria-hidden="true" />
      <div className="oc-hero__bubbles" aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="oc-bubble"
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

      <div className="lm-container oc-hero__inner">
        {kicker && <span className="oc-hero__kicker">{kicker}</span>}
        <h1 className="oc-hero__title lm-grad">{title}</h1>
        {lead && <p className="oc-hero__lead">{lead}</p>}
        {meta && <div className="oc-hero__meta">{meta}</div>}
        {actions && <div className="oc-hero__actions">{actions}</div>}
        {children}
      </div>
    </header>
  );
}

export default PageHero;
