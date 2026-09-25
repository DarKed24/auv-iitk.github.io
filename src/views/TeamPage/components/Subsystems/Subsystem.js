import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "components/UI/SectionHeading";
import { SUBSYSTEMS } from "views/MembersPage/subsystems";

function Subsystems() {
  return (
    <section className="oc-section">
      <div className="lm-container">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Four <span className="lm-grad">subsystems</span>, one vehicle
            </>
          }
          center
        />
        <div className="oc-grid oc-grid--2">
          {SUBSYSTEMS.map((s) => {
            const Icon = s.icon;
            const body = (
              <>
                <span className="oc-card__icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
                <h3 className="oc-card__title">{s.name}</h3>
                <p className="lm-body">{s.summary}</p>
                {s.linked && (
                  <span className="lm-link-btn" style={{ marginTop: "0.6rem" }}>
                    Meet the team
                    <span className="lm-link-btn__arrow">→</span>
                  </span>
                )}
              </>
            );
            return s.linked ? (
              <Link
                to={`/${s.key}`}
                className="oc-card oc-card--pad oc-card--hover oc-card--link"
                key={s.key}
              >
                {body}
              </Link>
            ) : (
              <article className="oc-card oc-card--pad oc-card--hover" key={s.key}>
                {body}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Subsystems;
