import React from "react";

const CAPABILITIES = [
  "ROS & Control Systems",
  "Computer Vision",
  "PCB Designing",
  "Signal Processing",
  "Design & Analysis",
  "Embedded Systems",
  "Localization & SLAM",
];

function Marquee() {
  return (
    <div className="lm-caps">
      <div className="lm-caps__inner">
        {CAPABILITIES.map((c, i) => (
          <span
            className="lm-cap"
            key={c}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="lm-cap__dot" />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
