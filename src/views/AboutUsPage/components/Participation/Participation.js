import React from "react";
import Tabs from "components/UI/Tabs";
import SectionHeading from "components/UI/SectionHeading";
import combinedimage from "assets/img/competitions.jpg";
import resimage from "assets/img/research.jpg";
import csrimage from "assets/img/csr2025.jpeg";
import trainimage from "assets/img/training2025.png";

const TABS = [
  {
    key: "competitions",
    label: "Competitions",
    title: "Student Competitions",
    text:
      "We aim to participate in national and international student-level AUV competitions — RoboSub (organised by RoboNation), the Singapore AUV Challenge, and the NIOT Student AUV Challenge.",
    img: combinedimage,
    alt: "Team AUV-IITK at competitions",
  },
  {
    key: "research",
    label: "Research",
    title: "Research Potential",
    text:
      "We advance the field of marine technology by incorporating cutting-edge research and innovative engineering solutions into the design and development of our autonomous underwater vehicles.",
    img: resimage,
    alt: "Research work on the vehicle",
  },
  {
    key: "training",
    label: "Training",
    title: "Training",
    text:
      "Team AUV-IITK trains all of its new recruits across the many fields of robotics. It is because of this training that many past members are pursuing careers in robotics and doing exceptionally well, owing to their strong foundation.",
    img: trainimage,
    alt: "Training session for new recruits",
  },
  {
    key: "community",
    label: "Community",
    title: "Outreach Events",
    text:
      "Beyond competitions, Team AUV-IITK undertakes outreach initiatives aimed at expanding access to STEM education. Through exhibitions, workshops and collaborative sessions with sponsors, we engage and inspire students, promoting innovation and technological learning within the community.",
    img: csrimage,
    alt: "Community outreach event",
  },
];

function Panel({ tab }) {
  return (
    <div className="oc-split">
      <div>
        <h3 className="lm-heading lm-heading--sm">{tab.title}</h3>
        <p className="lm-body" style={{ fontSize: "1.65rem" }}>
          {tab.text}
        </p>
      </div>
      <div className="oc-frame oc-frame--zoom">
        <img src={tab.img} alt={tab.alt} loading="lazy" />
      </div>
    </div>
  );
}

function Participation() {
  return (
    <section className="oc-section">
      <div className="lm-container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Beyond the <span className="lm-grad">pool</span>
            </>
          }
          center
        />
        <Tabs
          tabs={TABS.map((t) => ({
            key: t.key,
            label: t.label,
            content: <Panel tab={t} />,
          }))}
        />
      </div>
    </section>
  );
}

export default Participation;
