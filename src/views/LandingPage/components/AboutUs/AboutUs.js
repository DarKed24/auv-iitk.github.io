import React, { useEffect, useRef, useState } from "react";
import atalpic from "assets/img/atal/atal2026.jpeg";
import { Link } from "react-router-dom";
import "./AboutUs.css";

/* Counts up to `end` once the element scrolls into view. */
function CountUp({ end, suffix = "", duration = 1700 }) {
  const [value, setValue] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * end));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [end, duration]);

  return (
    <span className="lm-counter" ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  { end: 2014, suffix: "", label: "Founded" },
  { end: 25, suffix: "+", label: "Members" },
  { end: 3, suffix: "", label: "Vehicles Built" },
  { end: 800, suffix: "+", label: "Night Outs" },
];

/* Pointer-tracked 3D tilt for the feature image. */
function TiltCard({ children }) {
  const ref = useRef();
  const onMove = (e) => {
    const node = ref.current;
    const r = node.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    node.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${
      -y * 10
    }deg) scale(1.02)`;
  };
  const reset = () => {
    ref.current.style.transform =
      "perspective(900px) rotateY(0) rotateX(0) scale(1)";
  };
  return (
    <div className="lm-tilt" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </div>
  );
}

function AboutUs() {
  return (
    <section className="lm-about">
      <div className="lm-container">
        <div className="lm-about__grid">
          <div className="lm-about__text">
            <span className="lm-eyebrow">Who we are</span>
            <h2 className="lm-heading">
              Engineering the <span className="lm-grad">deep unknown</span>
            </h2>
            <p className="lm-lead">
              We are a team of undergraduate students researching marine
              robotics at IIT Kanpur. Born in 2014 from the idea of a few
              enthusiastic engineers, we have grown into a family of 25+ members
              bound by relentless curiosity.
            </p>
            <p className="lm-body">
              We have designed and built three autonomous underwater vehicles —
              Varun, Anahita and Atal — capable of navigating unknown
              environments, performing acoustic localization, and identifying
              objects through computer vision.
            </p>
            <Link to="/about-us" className="lm-link-btn">
              Our Full Story
              <span className="lm-link-btn__arrow">→</span>
            </Link>
          </div>

          <TiltCard>
            <div className="lm-about__media">
              <img src={atalpic} alt="Atal AUV" />
              <span className="lm-about__badge">Atal · Gen 3</span>
            </div>
          </TiltCard>
        </div>

        <div className="lm-statband">
          {STATS.map((s) => (
            <div className="lm-statband__item" key={s.label}>
              <CountUp end={s.end} suffix={s.suffix} />
              <span className="lm-statband__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
