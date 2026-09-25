import React, { useRef } from "react";
import SectionHeading from "components/UI/SectionHeading";
import { img } from "components/UI/RichText";
import team from "data/LegacyMembers.json";

const ALUMNI = team.teamData.flatMap((section) => section.items);

/* Horizontal scroll-snap rail of past members. */
function LegacyRail() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * node.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="oc-section">
      <div className="lm-container">
        <SectionHeading
          eyebrow="Alumni"
          title={
            <>
              The crew that came <span className="lm-grad">before</span>
            </>
          }
          center
        />
        <div className="oc-rail">
          <div className="oc-rail__track" ref={trackRef}>
            {ALUMNI.map((m) => (
              <div className="oc-rail__item" key={m.name}>
                <article className="oc-alum">
                  <img
                    className="oc-alum__img"
                    src={img(m.image)}
                    alt={m.name}
                    loading="lazy"
                  />
                  <h3 className="oc-alum__name">{m.name.trim()}</h3>
                  <p className="oc-alum__sub">{m.subheading}</p>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      className="oc-member__social"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name.trim()} on LinkedIn`}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  )}
                </article>
              </div>
            ))}
          </div>
          <div className="oc-rail__nav">
            <button
              type="button"
              className="oc-rail__btn"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll past members left"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="oc-rail__btn"
              onClick={() => scrollBy(1)}
              aria-label="Scroll past members right"
            >
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacyRail;
