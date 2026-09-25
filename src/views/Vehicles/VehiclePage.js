import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import SectionHeading from "components/UI/SectionHeading";
import Accordion from "components/UI/Accordion";
import RichText, { inline } from "components/UI/RichText";
import JoinUs from "components/Sections/JoinUs";
import FadeIn from "views/Animations/FadeIn";
import { FLEET } from "./fleet";
import "./VehiclePage.css";

const SUBSYSTEM_META = [
  { key: "mechanical", label: "Mechanical", icon: "fa-cogs" },
  { key: "electrical", label: "Electrical", icon: "fa-bolt" },
  { key: "software", label: "Software", icon: "fa-code" },
];

/* Normalises legacy {content, img, imgDesc} items and block-form items. */
function toBlocks(item) {
  if (Array.isArray(item.blocks)) return item.blocks;
  const blocks = [];
  const paras = Array.isArray(item.content) ? item.content : [item.content];
  paras.filter(Boolean).forEach((text) => blocks.push({ type: "p", text }));
  if (item.img) blocks.push({ type: "img", src: item.img, caption: item.imgDesc, size: item.imgSize });
  return blocks;
}

/* Sketchfab embeds are heavy — show a poster and load the viewer on demand. */
function ModelViewer({ sketchfabId, poster, name }) {
  const [loaded, setLoaded] = useState(false);
  if (!sketchfabId) {
    return (
      <div className="oc-frame vp-model">
        <img src={poster} alt={name} />
      </div>
    );
  }
  return (
    <div className="oc-frame vp-model">
      {loaded ? (
        <iframe
          title={`${name} 3D model`}
          src={`https://sketchfab.com/models/${sketchfabId}/embed?autospin=1&autostart=1&preload=1&ui_theme=dark`}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="vp-model__poster"
          onClick={() => setLoaded(true)}
          style={{ backgroundImage: `url(${poster})` }}
          aria-label={`Load interactive 3D model of ${name}`}
        >
          <span className="vp-model__play">
            <i className="fa fa-cube" aria-hidden="true" />
          </span>
          <span className="vp-model__label">View in 3D</span>
          <span className="vp-model__hint">Interactive Sketchfab model · click to load</span>
        </button>
      )}
    </div>
  );
}

/* Sticky pill nav that tracks which subsystem section is in view. */
function SubsystemNav({ available }) {
  const [active, setActive] = useState(available[0]?.key);

  useEffect(() => {
    const els = available
      .map((s) => document.getElementById(`sub-${s.key}`))
      .filter(Boolean);
    if (!els.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id.replace("sub-", ""));
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [available]);

  const go = (key) => (e) => {
    e.preventDefault();
    const el = document.getElementById(`sub-${key}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className="oc-subnav" aria-label="Vehicle subsystems">
      {available.map((s) => (
        <a
          key={s.key}
          href={`#sub-${s.key}`}
          onClick={go(s.key)}
          className={`oc-subnav__link ${active === s.key ? "oc-subnav__link--active" : ""}`}
        >
          <i className={`fa ${s.icon}`} aria-hidden="true" /> {s.label}
        </a>
      ))}
    </nav>
  );
}

function VehiclePage({ vehicle }) {
  const { meta, data } = vehicle;
  const available = SUBSYSTEM_META.filter(
    (s) => (data[s.key] && data[s.key].length) || (data.intro && data.intro[s.key])
  );
  const others = FLEET.filter((v) => v.key !== meta.key && v.listed);

  return (
    <PageShell title={meta.name}>
      <PageHero
        kicker={meta.kicker}
        title={meta.name}
        lead={data.brief}
        image={meta.hero}
        meta={meta.highlights.map((h) => (
          <span className="oc-chip" key={h.label}>
            <span className="oc-chip__label">{h.label}</span> {h.value}
          </span>
        ))}
        actions={
          <>
            <a href="#components" className="lp-btn lp-btn--primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <span>Explore Components</span>
            </a>
            {meta.report && (
              <a
                href={meta.report}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-btn lp-btn--ghost"
              >
                <i className="fa fa-file-text-o" aria-hidden="true" />
                <span>Technical Report</span>
              </a>
            )}
          </>
        }
      />

      {/* 3D model + specifications */}
      <FadeIn direction="up">
        <section className="oc-section">
          <div className="lm-container">
            <div className="vp-overview">
              <div>
                <SectionHeading eyebrow="Up close" title={<>{meta.name} in <span className="lm-grad">3D</span></>} small />
                <ModelViewer sketchfabId={meta.sketchfab} poster={meta.poster} name={meta.name} />
              </div>
              <div>
                <SectionHeading eyebrow="At a glance" title="Specifications" small />
                <dl className="oc-spec">
                  {data.specsTable.map((row) => (
                    <div className="oc-spec__row" key={row.name}>
                      <dt className="oc-spec__label">{row.name}</dt>
                      <dd className="oc-spec__value" style={{ margin: 0 }}>
                        {row.spec.trim()}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Components by subsystem */}
      <section className="oc-section oc-section--flush-top" id="components">
        <div className="lm-container">
          <SectionHeading
            eyebrow="Under the hull"
            title={<>Every <span className="lm-grad">component</span>, explained</>}
            center
          />
          <SubsystemNav available={available} />

          {available.map((s) => {
            const intro = data.intro?.[s.key] || [];
            const items = (data[s.key] || []).map((it) => ({
              id: it.id ?? it.title,
              title: it.title,
              content: <RichText blocks={toBlocks(it)} imgDir={meta.imgDir} />,
            }));
            return (
              <FadeIn direction="up" key={s.key}>
                <div className="vp-sub" id={`sub-${s.key}`}>
                  <div className="vp-sub__head">
                    <span className="oc-card__icon" aria-hidden="true">
                      <i className={`fa ${s.icon}`} />
                    </span>
                    <h3 className="lm-heading lm-heading--sm" style={{ margin: 0 }}>
                      {s.label}
                    </h3>
                  </div>
                  <div className="vp-sub__intro">
                    {intro.map((p, i) => (
                      <p className="lm-lead" key={i}>
                        {inline(p)}
                      </p>
                    ))}
                  </div>
                  {items.length > 0 && <Accordion items={items} />}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Rest of the fleet */}
      {others.length > 0 && (
        <section className="oc-section oc-section--flush-top">
          <div className="lm-container">
            <SectionHeading eyebrow="The fleet" title="Other vehicles" small />
            <div className="oc-grid oc-grid--3">
              {others.map((v) => (
                <Link to={v.path} className="oc-card oc-card--hover oc-card--link vp-fleet" key={v.key}>
                  <div className="vp-fleet__media">
                    <img src={v.meta.poster} alt={v.meta.name} loading="lazy" />
                  </div>
                  <div className="vp-fleet__body">
                    <span className="lm-eyebrow" style={{ marginBottom: "0.4rem" }}>{v.meta.kicker}</span>
                    <h3 className="oc-card__title" style={{ marginBottom: 0 }}>{v.meta.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <JoinUs
        kicker="Build the next one"
        title="Want to work on the next vehicle?"
        text="Every generation of our AUV is designed and built by students. If you want to have a hand in what comes after this one, get in touch."
      />
    </PageShell>
  );
}

export default VehiclePage;
