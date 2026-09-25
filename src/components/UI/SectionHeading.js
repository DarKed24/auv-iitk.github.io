import React from "react";

/**
 * Eyebrow + heading pair. `title` may contain a node; wrap the word you want
 * highlighted in <span className="lm-grad">.
 */
function SectionHeading({ eyebrow, title, center = false, small = false, id }) {
  const cls = ["lm-heading", center && "lm-heading--center", small && "lm-heading--sm"]
    .filter(Boolean)
    .join(" ");
  return (
    <>
      {eyebrow && (
        <span className={`lm-eyebrow ${center ? "lm-eyebrow--center" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={cls} id={id}>
        {title}
      </h2>
    </>
  );
}

export default SectionHeading;
