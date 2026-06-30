import React from "react";
import solidworks from "assets/img/sponsors/solidworks.png";
import mathworks from "assets/img/sponsors/mathworks.png";
import altium from "assets/img/sponsors/altium.png";
import ansys from "assets/img/sponsors/ansys.jpg";
import dord from "assets/img/sponsors/dord-iitk.png";
import sparton from "assets/img/sponsors/sparton.png";
import xsens from "assets/img/sponsors/xsens.png";
import ids from "assets/img/sponsors/ids.png";
import "./Sponsors.css";

const ROW_A = [
  { src: altium, alt: "Altium" },
  { src: xsens, alt: "Xsens" },
  { src: ids, alt: "IDS" },
  { src: ansys, alt: "Ansys" },
];
const ROW_B = [
  { src: sparton, alt: "Sparton" },
  { src: mathworks, alt: "MathWorks" },
  { src: solidworks, alt: "SolidWorks" },
  { src: dord, alt: "DoRD IIT Kanpur" },
];

function MarqueeRow({ logos, reverse }) {
  const items = [...logos, ...logos, ...logos];
  return (
    <div className={`lm-logos__row ${reverse ? "lm-logos__row--rev" : ""}`}>
      <div className="lm-logos__track">
        {items.map((l, i) => (
          <div className="lm-logos__tile" key={i}>
            <img src={l.src} alt={l.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Sponsors() {
  return (
    <section className="lm-sponsors">
      <div className="lm-container">
        <span className="lm-eyebrow lm-eyebrow--center">Backed by the best</span>
        <h2 className="lm-heading lm-heading--center">
          Our <span className="lm-grad">sponsors</span>
        </h2>
      </div>
      <div className="lm-logos">
        <MarqueeRow logos={ROW_A} />
        <MarqueeRow logos={ROW_B} reverse />
      </div>
    </section>
  );
}

export default Sponsors;
