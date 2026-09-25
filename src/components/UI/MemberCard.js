import React from "react";
import { img } from "./RichText";

/* Only render a social link when the data actually points somewhere. */
const isReal = (url) =>
  typeof url === "string" &&
  url.trim() !== "" &&
  !/^https?:\/\/(www\.)?(facebook|linkedin|instagram)\.com\/?$/.test(url.trim());

function socialsFor(m) {
  const list = [];
  if (isReal(m.facebook)) {
    const insta = /instagram\.com/.test(m.facebook);
    list.push({
      href: m.facebook,
      icon: insta ? "fa-instagram" : "fa-facebook",
      label: insta ? "Instagram" : "Facebook",
    });
  }
  if (isReal(m.linkedin)) {
    list.push({ href: m.linkedin, icon: "fa-linkedin", label: "LinkedIn" });
  }
  if (typeof m.mailid === "string" && m.mailid.trim() !== "") {
    list.push({ href: `mailto:${m.mailid.trim()}`, icon: "fa-envelope", label: "Email" });
  }
  return list;
}

/**
 * Team member card. `member` follows the shape used in src/data/*.json:
 * { name, subheading, image, Vertical?, facebook?, linkedin?, mailid? }
 */
function MemberCard({ member, wide = false }) {
  const socials = socialsFor(member);
  return (
    <article className={`oc-member ${wide ? "oc-member--wide" : ""}`}>
      <div className="oc-member__media">
        <img src={img(member.image)} alt={member.name} loading="lazy" />
      </div>
      <div className="oc-member__body">
        <h3 className="oc-member__name">{member.name}</h3>
        <p className="oc-member__role">{member.subheading}</p>
        {member.Vertical && <span className="oc-member__tag">{member.Vertical}</span>}
        {socials.length > 0 && (
          <div className="oc-member__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="oc-member__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${s.label}`}
                title={s.label}
              >
                <i className={`fa ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default MemberCard;
