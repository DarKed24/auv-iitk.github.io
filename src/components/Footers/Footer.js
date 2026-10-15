import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "assets/img/logos/logo_v1.32.png";

// Passive bubble field that drifts up through the whole footer.
const AMBIENT = [
  { left: "4%", size: 10, delay: 0, dur: 13 },
  { left: "11%", size: 6, delay: 5, dur: 10 },
  { left: "19%", size: 16, delay: 2, dur: 16 },
  { left: "27%", size: 8, delay: 7, dur: 11 },
  { left: "35%", size: 12, delay: 1, dur: 14 },
  { left: "44%", size: 6, delay: 9, dur: 9 },
  { left: "52%", size: 18, delay: 4, dur: 17 },
  { left: "60%", size: 9, delay: 6, dur: 12 },
  { left: "68%", size: 13, delay: 3, dur: 13 },
  { left: "76%", size: 7, delay: 8, dur: 10 },
  { left: "84%", size: 15, delay: 1, dur: 15 },
  { left: "91%", size: 9, delay: 5, dur: 11 },
  { left: "97%", size: 6, delay: 10, dur: 9 },
];

/**
 * Turns the whole footer into water: ambient bubbles rise continuously, and
 * on hover-capable devices moving the cursor releases extra bubbles from the
 * pointer while a click pops a burst with a ripple. Spawned elements remove
 * themselves when their animation ends, so the DOM stays small.
 */
function useBubbleField(ref) {
  const last = useRef(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const spawnBubble = (x, y) => {
    const node = ref.current;
    if (!node) return;
    const b = document.createElement("span");
    b.className = "fb-bubble";
    const size = 6 + Math.random() * 16;
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
    b.style.setProperty("--dx", `${Math.random() * 60 - 30}px`);
    b.style.setProperty("--rise", `${y + size + 20}px`);
    b.style.setProperty("--dur", `${2.4 + (y / 160) + Math.random() * 1.6}s`);
    node.appendChild(b);
    b.addEventListener("animationend", () => b.remove());
  };

  const onMouseMove = (e) => {
    if (reduced || !ref.current) return;
    const now = e.timeStamp || Date.now();
    if (now - last.current < 90) return;
    last.current = now;
    const r = ref.current.getBoundingClientRect();
    spawnBubble(e.clientX - r.left, e.clientY - r.top);
  };

  const onClick = (e) => {
    if (reduced || !ref.current) return;
    const node = ref.current;
    const r = node.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    for (let i = 0; i < 9; i += 1) spawnBubble(x + (Math.random() * 40 - 20), y);
    const ripple = document.createElement("span");
    ripple.className = "fb-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    node.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  return { onMouseMove, onClick };
}

function BubbleLayer({ layerRef }) {
  return (
    <div className="fb-layer" ref={layerRef} aria-hidden="true">
      {AMBIENT.map((b, i) => (
        <span
          key={i}
          className="fb-ambient"
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

const EXPLORE = [
  { to: "/landing-page", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
];

const VEHICLES = [
  { to: "/vehicles/atal", label: "Atal" },
  { to: "/vehicles/anahita", label: "Anahita" },
  { to: "/vehicles/varun", label: "Varun" },
];

const SOCIALS = [
  { href: "https://github.com/AUV-IITK", icon: "fa-github", title: "GitHub" },
  {
    href: "https://www.facebook.com/auviitk",
    icon: "fa-facebook-square",
    title: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/auv-iitk/",
    icon: "fa-linkedin-square",
    title: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/auviitk/",
    icon: "fa-instagram",
    title: "Instagram",
  },
  { href: "mailto:iitkauv@gmail.com", icon: "fa-envelope", title: "Email" },
];

function Footer() {
  const year = new Date().getFullYear();
  const layerRef = useRef(null);
  const field = useBubbleField(layerRef);

  return (
    <footer className="site-footer" onMouseMove={field.onMouseMove} onClick={field.onClick}>
      <BubbleLayer layerRef={layerRef} />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img src={logo} className="site-footer__logo" alt="AUV-IITK" />
            <div className="site-footer__name">Team AUV-IITK</div>
            <p className="site-footer__tagline">
              A dive into the unfathomable — designing and building autonomous
              underwater vehicles at IIT Kanpur.
            </p>
            <div className="site-footer__address">
              <i className="fa fa-map-marker" />
              AUV Room, Hall-2, IIT Kanpur, Uttar Pradesh&nbsp;-&nbsp;208016,
              India
            </div>
          </div>

          <nav className="site-footer__col">
            <h4 className="site-footer__heading">Explore</h4>
            {EXPLORE.map((l) => (
              <Link key={l.label} to={l.to} className="site-footer__link">
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className="site-footer__col">
            <h4 className="site-footer__heading">Vehicles</h4>
            {VEHICLES.map((l) => (
              <Link key={l.label} to={l.to} className="site-footer__link">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Connect</h4>
            <a href="mailto:iitkauv@gmail.com" className="site-footer__link">
              iitkauv@gmail.com
            </a>
            <div className="site-footer__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="site-footer__social"
                  title={s.title}
                  aria-label={s.title}
                >
                  <i className={`fa ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} Team AUV-IITK · All rights reserved.</span>
          <span className="site-footer__bottom-right">
            Indian Institute of Technology Kanpur
          </span>
          <span className="fb-hint">run your cursor through the water 🫧</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
