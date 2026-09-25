import React from "react";
import SectionHeading from "components/UI/SectionHeading";

const MILESTONES = [
  {
    year: "2014",
    title: "The team is born",
    text: "A handful of enthusiastic engineers at IIT Kanpur set out to build a robot that can think for itself underwater.",
  },
  {
    year: "2016",
    title: "Varun takes to the water",
    text: "Our first AUV — a modular platform for underwater inspection and data collection with up to four hours of continuous operation.",
  },
  {
    year: "2017",
    title: "Runners-up at NIOT-SAVe",
    text: "First podium finish at the National Institute of Ocean Technology's Student AUV challenge in Chennai.",
  },
  {
    year: "2018",
    title: "IEEE OES publication",
    text: "A paper on the design and development of our open-frame AUV, Anahita, is presented at the IEEE OES Symposium.",
  },
  {
    year: "2019",
    title: "Anahita goes international",
    text: "Anahita competes at RoboSub 2019 in San Diego and finishes first runner-up at NIOT-SAVe 2019.",
  },
  {
    year: "2021",
    title: "RoboSub 2021 (online)",
    text: "3rd in Website, 4th and 6th in Skills Video and 16th in the Technical Design Report category.",
  },
  {
    year: "2025",
    title: "Singapore AUV Challenge",
    text: "The team travels to Singapore to compete at SAUVC 2025.",
  },
  {
    year: "2026",
    title: "Atal, bound for RoboSub",
    text: "Our third-generation vehicle with a single aluminium hull, eight thrusters and a ROS 2 stack prepares for RoboSub 2026.",
  },
];

function Journey() {
  return (
    <section className="oc-section">
      <div className="lm-container">
        <SectionHeading
          eyebrow="Our journey"
          title={
            <>
              A decade of <span className="lm-grad">descent</span>
            </>
          }
          center
        />
        <ol className="oc-timeline" style={{ listStyle: "none" }}>
          {MILESTONES.map((m) => (
            <li className="oc-timeline__item" key={m.year + m.title}>
              <span className="oc-timeline__dot" aria-hidden="true" />
              <span className="oc-timeline__year">{m.year}</span>
              <h3 className="oc-timeline__title">{m.title}</h3>
              <p className="lm-body oc-timeline__text">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
