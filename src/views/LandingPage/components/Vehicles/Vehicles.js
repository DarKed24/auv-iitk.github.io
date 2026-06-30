import React, { useRef } from "react";
import atal from "assets/img/atal.png";
import varun from "assets/img/varun/varun-underwater.jpg";
import anahita from "assets/img/anahita/anahita-underwater.png";
import { Link } from "react-router-dom";
import "./Vehicles.css";

const FLEET = [
  {
    idx: "01",
    name: "Atal",
    tag: "3rd Generation · RoboSub 2026",
    img: atal,
    link: "/vehicles/atal",
    desc:
      "Our third-generation AUV with a robust, leak-proof aluminium hull. Packed with IMU, DVL and cameras, Atal performs torpedo shooting, object manipulation, and localization in unknown underwater environments — backed by improved battery life and safety systems.",
  },
  {
    idx: "02",
    name: "Anahita",
    tag: "2nd Generation · RoboSub 2019",
    img: anahita,
    link: "/vehicles/anahita",
    desc:
      "A leap forward in modularity, robustness and ease of manufacturing. Anahita was engineered for complex, space-constrained tasks without compromising maneuverability — first runner-up at NIOT-SAVe 2019.",
  },
  {
    idx: "03",
    name: "Varun",
    tag: "1st Generation · NIOT-SAVe 2016",
    img: varun,
    link: "/vehicles/varun",
    desc:
      "The vehicle that started it all. A modular staging platform for underwater inspection and data collection, with up to four hours of continuous operation — first runner-up at NIOT-SAVe 2016.",
  },
];

/* Pointer-tracked 3D tilt frame for each vehicle image. */
function TiltFrame({ children }) {
  const ref = useRef();
  const onMove = (e) => {
    const node = ref.current;
    const r = node.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    node.style.transform = `perspective(1000px) rotateY(${x * 9}deg) rotateX(${
      -y * 9
    }deg)`;
  };
  const reset = () => {
    ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  };
  return (
    <div className="lm-vehicle__tilt" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </div>
  );
}

function Vehicles() {
  return (
    <section className="lm-fleet">
      <div className="lm-container">
        <span className="lm-eyebrow lm-eyebrow--center">The Fleet</span>
        <h2 className="lm-heading lm-heading--center">
          Three generations of <span className="lm-grad">autonomy</span>
        </h2>

        <div className="lm-fleet__list">
          {FLEET.map((v) => (
            <article className="lm-vehicle" key={v.name}>
              <div className="lm-vehicle__media">
                <span className="lm-vehicle__index">{v.idx}</span>
                <Link to={v.link}>
                  <TiltFrame>
                    <div className="lm-vehicle__frame">
                      <img src={v.img} alt={v.name} />
                    </div>
                  </TiltFrame>
                </Link>
              </div>
              <div className="lm-vehicle__info">
                <span className="lm-vehicle__tag">{v.tag}</span>
                <h3 className="lm-vehicle__name lm-grad">{v.name}</h3>
                <p className="lm-body">{v.desc}</p>
                <Link to={v.link} className="lm-link-btn">
                  Read More
                  <span className="lm-link-btn__arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vehicles;
