import React from "react";
import { Link } from "react-router-dom";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import MemberCard from "components/UI/MemberCard";
import SectionHeading from "components/UI/SectionHeading";
import JoinUs from "components/Sections/JoinUs";
import FadeIn from "views/Animations/FadeIn";
import { SUBSYSTEMS, getSubsystem } from "./subsystems";

const GROUPS = [
  { key: "heads", label: "Subsystem Heads", match: /subsystem head/i, wide: true },
  { key: "senior", label: "Senior Members", match: /senior member/i },
  { key: "junior", label: "Junior Members", match: /junior member/i },
];

function groupMembers(items) {
  const used = new Set();
  const groups = GROUPS.map((g) => {
    const members = items.filter((m) => {
      if (used.has(m)) return false;
      const hit = g.match.test(m.subheading || "");
      if (hit) used.add(m);
      return hit;
    });
    return { ...g, members };
  });
  const rest = items.filter((m) => !used.has(m));
  if (rest.length) groups.push({ key: "members", label: "Members", members: rest });
  return groups.filter((g) => g.members.length > 0);
}

function SubsystemPage({ subsystem }) {
  const sub = getSubsystem(subsystem);
  const items = sub.data.teamData.flatMap((s) => s.items);
  const groups = groupMembers(items);
  const others = SUBSYSTEMS.filter((s) => s.key !== sub.key && s.linked);

  return (
    <PageShell title={`${sub.name} Subsystem`}>
      <PageHero
        kicker="Subsystem"
        title={sub.name}
        lead={sub.description}
        image={sub.image}
        meta={sub.tags.map((t) => (
          <span className="oc-chip" key={t}>
            {t}
          </span>
        ))}
      />

      {groups.map((g, gi) => (
        <FadeIn direction="up" key={g.key}>
          <section className={`oc-section ${gi > 0 ? "oc-section--flush-top" : ""}`}>
            <div className="lm-container">
              <SectionHeading eyebrow={`${items.length} people`} title={g.label} small />
              <div
                className={`oc-grid ${
                  g.wide ? "oc-grid--2" : g.members.length < 4 ? "oc-grid--3" : "oc-grid--4"
                }`}
              >
                {g.members.map((m) => (
                  <MemberCard member={m} key={m.name} wide={g.wide} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      ))}

      <section className="oc-section oc-section--flush-top">
        <div className="lm-container">
          <span className="lm-eyebrow">Other subsystems</span>
          <div className="oc-hero__actions" style={{ opacity: 1, animation: "none" }}>
            {others.map((s) => (
              <Link to={`/${s.key}`} className="lp-btn lp-btn--ghost lp-btn--sm" key={s.key}>
                <span>{s.name}</span>
              </Link>
            ))}
            <Link to="/team" className="lp-btn lp-btn--ghost lp-btn--sm">
              <span>Team Overview</span>
            </Link>
          </div>
        </div>
      </section>

      <JoinUs />
    </PageShell>
  );
}

export default SubsystemPage;
