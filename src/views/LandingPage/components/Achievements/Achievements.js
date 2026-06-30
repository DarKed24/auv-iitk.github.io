import React from "react";
import paper from "../../../../assets/img/Achievements/mech-paper.jpg";
import robosub from "../../../../assets/img/Achievements/robosub2021.jpeg";
import niot from "../../../../assets/img/Achievements/niot.png";
import "./Achievements.css";
import { Link } from "react-router-dom";

const MILESTONES = [
  {
    year: "2021",
    img: robosub,
    title: "RoboSub 2021",
    desc:
      "3rd in Website, 4th & 6th in Skills Video, and 16th in TDR at the international RoboSub competition.",
    link: "/events",
  },
  {
    year: "2017 & 2019",
    img: niot,
    title: "NIOT-SAVe Runners-Up",
    desc:
      "Twice runners-up at the NIOT SAVe challenge, organised by the National Institute of Ocean Technology, Chennai.",
    link: "/events",
  },
  {
    year: "2018",
    img: paper,
    title: "IEEE OES Publication",
    desc:
      "Published a paper at the IEEE OES Symposium 2018 on the design and development of our open-frame AUV, Anahita.",
    link: "/events",
  },
];

function Achievements() {
  return (
    <section className="lm-achv">
      <div className="lm-container">
        <span className="lm-eyebrow lm-eyebrow--center">Milestones</span>
        <h2 className="lm-heading lm-heading--center">
          What we have <span className="lm-grad">achieved</span>
        </h2>

        <div className="lm-achv__grid">
          {MILESTONES.map((m) => (
            <Link to={m.link} className="lm-achv__card" key={m.title}>
              <div className="lm-achv__media">
                <img src={m.img} alt={m.title} />
                <span className="lm-achv__year">{m.year}</span>
              </div>
              <div className="lm-achv__body">
                <h3 className="lm-achv__title">{m.title}</h3>
                <p className="lm-body">{m.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
