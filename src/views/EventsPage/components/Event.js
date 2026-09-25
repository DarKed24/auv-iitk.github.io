import React from "react";
import "./Event.css";

function InfoList({ icon, title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="ev-info">
      <h4 className="ev-info__title">
        <i className={`fa ${icon}`} aria-hidden="true" /> {title}
      </h4>
      <ul className="ev-info__list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Event({ event, reverse = false }) {
  const id = `event-${event.name.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section className="oc-section ev" id={id}>
      <div className="lm-container">
        <div className={`oc-split oc-split--even ${reverse ? "oc-split--rev" : ""}`}>
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="oc-frame oc-frame--zoom ev__media"
            aria-label={`${event.name} website`}
          >
            <img src={event.image} alt={event.name} loading="lazy" />
            <span className="oc-badge oc-frame__badge">{event.organiser}</span>
          </a>

          <div>
            <span className="lm-eyebrow">Competition</span>
            <h2 className="lm-heading">
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="ev__title">
                {event.name}
                <i className="fa fa-external-link ev__ext" aria-hidden="true" />
              </a>
            </h2>
            <span className="oc-chip ev__loc">
              <i className="fa fa-map-marker" aria-hidden="true" /> {event.location}
            </span>

            <div className="ev__lists">
              <InfoList icon="fa-flag" title="Our participation" items={event.participation} />
              <InfoList icon="fa-trophy" title="Laurels" items={event.laurels} />
            </div>
          </div>
        </div>

        <p className="lm-body ev__desc">{event.description}</p>
      </div>
    </section>
  );
}

export default Event;
