import React from "react";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import JoinUs from "components/Sections/JoinUs";
import FadeIn from "views/Animations/FadeIn";

import robosubimg from "assets/img/Competetions/robosub.jpg";
import niotimg from "assets/img/Competetions/niot.jpg";
import sauvcimg from "assets/img/Competetions/sauvc.jpg";

import Event from "./components/Event";

const EVENTS = [
  {
    name: "RoboSub",
    link: "https://robosub.org/",
    location: "Woollett Aquatics Center, Irvine, California, USA",
    organiser: "RoboNation",
    participation: [
      "Looking forward to RoboSub 2026",
      "Participated in RoboSub 2021",
      "Participated in RoboSub 2019",
    ],
    laurels: [
      "3rd position in the Website category, RoboSub 2021",
      "4th and 6th position in the Skills Video category, RoboSub 2021",
      "16th position in the TDR category, RoboSub 2021",
    ],
    description:
      "RoboSub is an international student competition. Student teams from around the world design and build robotic submarines, otherwise known as Autonomous Underwater Vehicles (AUVs). The behaviours demonstrated by these experimental AUVs mimic those of real-world systems currently deployed around the world for underwater exploration, seafloor mapping and sonar localisation, amongst many others.",
    image: robosubimg,
  },
  {
    name: "SAUVC",
    link: "https://sauvc.org/",
    location: "Singapore",
    organiser: "Singapore AUV Challenge",
    participation: ["Participated in SAUVC 2025"],
    laurels: [],
    description:
      "The SAUVC competition challenges participant teams to build an AUV which can perform given tasks — simulations of the tasks operational AUVs have to be able to perform. The competition is held in a swimming pool and each team's AUV has to perform four tasks. The speed and accuracy at which the AUV performs the tasks decide the winner. The tasks cover four widely faced challenges underwater: AUV navigation, visual identification, acoustic localisation and robotic manipulation.",
    image: sauvcimg,
  },
  {
    name: "NIOT SAVe",
    link: "http://www.indiamts.com/activities%20Report/6th_National_Competition_on_Student_Autonomous_underwater_Vehicle_SAVe_2019.pdf",
    location: "Chennai, India",
    organiser: "National Institute of Ocean Technology",
    participation: ["Participated in NIOT SAVe 2019", "Participated in NIOT SAVe 2017"],
    laurels: ["Runner-up, NIOT SAVe 2019", "Runner-up, NIOT SAVe 2017"],
    description:
      "ESSO-National Institute of Ocean Technology (NIOT), under the Ministry of Earth Sciences, organises the National Student Autonomous Underwater Vehicle competition for engineering students to visualise and design an autonomous underwater vehicle. The conceptual basis for the Student Autonomous underwater Vehicle (SAVe) is a highly mobile AUV built on sound engineering principles. The main focus of the competition is to involve students in the new frontier areas of ocean technology and kindle their innovative thinking in this unexplored area of ocean environment and observation.",
    image: niotimg,
  },
];

function EventsPage() {
  return (
    <PageShell title="Events & Competitions">
      <PageHero
        kicker="Events"
        title="Where we compete"
        lead="From Irvine to Singapore to Chennai — the competitions that push our vehicles, and our team, to the limit."
        image={robosubimg}
        meta={EVENTS.map((e) => (
          <a href={`#event-${e.name.toLowerCase().replace(/\s+/g, "-")}`} className="oc-chip" key={e.name}>
            <i className="fa fa-trophy" aria-hidden="true" /> {e.name}
          </a>
        ))}
      />

      {EVENTS.map((e, i) => (
        <FadeIn direction="up" key={e.name}>
          <Event event={e} reverse={i % 2 === 1} />
        </FadeIn>
      ))}

      <JoinUs
        kicker="Next stop"
        title="RoboSub 2026"
        text="Atal is being readied for RoboSub 2026. Follow the build, or reach out if you would like to support the team on the road to Irvine."
      />
    </PageShell>
  );
}

export default EventsPage;
