import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "assets/img/logos/logo_v1.32.png";

/**
 * An interactive "water surface" strip. Drag the cursor through it to release
 * rising bubbles; click to pop a burst with a ripple. Pure DOM + CSS, every
 * element self-removes when its animation ends, so it stays light.
 */
function BubbleSurface() {
  const ref = useRef(null);
  const last = useRef(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const spawnBubble = (x) => {
    const node = ref.current;
    if (!node) return;
    const b = document.createElement("span");
    b.className = "fb-bubble";
    const size = 6 + Math.random() * 16;
    b.style.left = `${x}px`;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
    b.style.setProperty("--dx", `${Math.random() * 50 - 25}px`);
    b.style.setProperty("--dur", `${2.6 + Math.random() * 2.4}s`);
    node.appendChild(b);
    b.addEventListener("animationend", () => b.remove());
  };

  const handleMove = (e) => {
    if (reduced) return;
    const now = e.timeStamp || Date.now();
    if (now - last.current < 80) return;
    last.current = now;
    const r = ref.current.getBoundingClientRect();
    spawnBubble(e.clientX - r.left);
  };

  const handleClick = (e) => {
    if (reduced) return;
    const node = ref.current;
    const r = node.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    for (let i = 0; i < 9; i += 1) spawnBubble(x + (Math.random() * 40 - 20));
    const ripple = document.createElement("span");
    ripple.className = "fb-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    node.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  return (
    <div
      className="fb-surface"
      ref={ref}
      onMouseMove={handleMove}
      onClick={handleClick}
      aria-hidden="true"
    >
      <span className="fb-hint">psst — run your cursor through the water 🫧</span>
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

  return (
    <footer className="site-footer">
      <BubbleSurface />
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
