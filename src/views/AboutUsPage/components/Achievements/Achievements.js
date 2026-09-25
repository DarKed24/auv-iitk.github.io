import React from "react";
import SectionHeading from "components/UI/SectionHeading";
import niotwin from "assets/img/niotwinner.png";
import desbot from "assets/img/atal_design.png";
import atwork from "assets/img/newreplaced.jpg";

const PILLARS = [
  {
    img: atwork,
    title: "Undergraduate Roboticists",
    text: "Selected after a comprehensive recruitment and sharing a love for robotics, we build low-cost, robust AUV systems from the ground up.",
  },
  {
    img: desbot,
    title: "Ingenious Design & Creativity",
    text: "The design process behind our latest vehicle, Atal, has been appreciated at the international level.",
  },
  {
    img: niotwin,
    title: "National Competition Winners",
    text: "Twice runners-up (2017 & 2019) at NIOT SAVe, organised by the National Institute of Ocean Technology, Chennai.",
  },
];

function Pillars() {
  return (
    <section className="oc-section">
      <div className="lm-container">
        <SectionHeading
          eyebrow="What defines us"
          title={
            <>
              Built on three <span className="lm-grad">pillars</span>
            </>
          }
          center
        />
        <div className="oc-grid oc-grid--3">
          {PILLARS.map((p) => (
            <article className="oc-card oc-card--hover" key={p.title} style={{ overflow: "hidden" }}>
              <div className="oc-frame" style={{ borderRadius: 0, border: 0, boxShadow: "none", aspectRatio: "16 / 10" }}>
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div style={{ padding: "2.4rem" }}>
                <h3 className="oc-card__title">{p.title}</h3>
                <p className="lm-body">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
