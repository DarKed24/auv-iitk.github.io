import React, { useState } from "react";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import FadeIn from "views/Animations/FadeIn";
import heroImg from "assets/img/backgrounds/sea-header-2.jpg";
import "./ContactUsPage.css";

const CONTACT_EMAIL = "auv_snt@iitk.ac.in";
const PHONE = "+91 98071 99316";
const ADDRESS = "AUV Room, Hall of Residence 2, Indian Institute of Technology Kanpur, Uttar Pradesh, India – 208016";
const MAP_QUERY = "Hall of Residence 2, IIT Kanpur";

const SOCIALS = [
  { href: "https://github.com/AUV-IITK", icon: "fa-github", label: "GitHub" },
  { href: "https://www.linkedin.com/company/auv-iitk/", icon: "fa-linkedin", label: "LinkedIn" },
  { href: "https://www.instagram.com/auviitk/", icon: "fa-instagram", label: "Instagram" },
  { href: "https://www.facebook.com/auviitk", icon: "fa-facebook", label: "Facebook" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "We need an email to reply to.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "That email address doesn't look right.";
  if (values.message.trim().length < 10) errors.message = "Add a few more words so we know how to help.";
  return errors;
}

function ContactUsPage() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend — hand the message to the visitor's mail client.
    const subject = encodeURIComponent(`Website enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <PageShell title="Contact Us">
      <PageHero
        kicker="Contact"
        title="Let's talk"
        lead="Sponsorship, collaboration, recruitment or just curiosity about what lives in the AUV room — drop us a line and we will get back to you."
        image={heroImg}
        meta={
          <>
            <a href={`mailto:${CONTACT_EMAIL}`} className="oc-chip">
              <i className="fa fa-envelope" aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
            <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="oc-chip">
              <i className="fa fa-phone" aria-hidden="true" /> {PHONE}
            </a>
          </>
        }
      />

      <section className="oc-section">
        <div className="lm-container">
          <div className="contact-grid">
            <FadeIn direction="up">
              <div className="oc-card oc-card--pad">
                <span className="lm-eyebrow">Send a message</span>
                <h2 className="lm-heading lm-heading--sm">Share feedback or ask a question</h2>

                <form className="oc-form" onSubmit={onSubmit} noValidate>
                  <div className="oc-form__row">
                    <div className={`oc-field ${errors.name ? "oc-field--error" : ""}`}>
                      <label className="oc-field__label" htmlFor="contact-name">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="oc-input"
                        placeholder="Your name"
                        autoComplete="name"
                        value={values.name}
                        onChange={onChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                      />
                      {errors.name && (
                        <span className="oc-field__error" id="contact-name-error">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className={`oc-field ${errors.email ? "oc-field--error" : ""}`}>
                      <label className="oc-field__label" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="oc-input"
                        placeholder="you@example.com"
                        autoComplete="email"
                        value={values.email}
                        onChange={onChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                      />
                      {errors.email && (
                        <span className="oc-field__error" id="contact-email-error">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`oc-field ${errors.message ? "oc-field--error" : ""}`}>
                    <label className="oc-field__label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="oc-input"
                      rows="5"
                      placeholder="Tell us what's on your mind…"
                      value={values.message}
                      onChange={onChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && (
                      <span className="oc-field__error" id="contact-message-error">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="contact-form__foot">
                    <button type="submit" className="lp-btn lp-btn--primary">
                      <span>Send Message</span>
                      <i className="fa fa-paper-plane" aria-hidden="true" />
                    </button>
                    <p
                      className={`oc-form__note ${status === "sent" ? "oc-form__note--ok" : ""}`}
                      role="status"
                    >
                      {status === "sent"
                        ? "Your mail app should open with the message ready to send."
                        : "Opens your mail app — no data is stored on this site."}
                    </p>
                  </div>
                </form>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={120}>
              <div className="contact-side">
                <div className="oc-card oc-card--pad">
                  <span className="lm-eyebrow">Reach us</span>
                  <ul className="contact-list">
                    <li>
                      <span className="oc-card__icon contact-list__icon">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>
                      <div>
                        <span className="contact-list__label">Email</span>
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                      </div>
                    </li>
                    <li>
                      <span className="oc-card__icon contact-list__icon">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </span>
                      <div>
                        <span className="contact-list__label">Phone</span>
                        <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a>
                      </div>
                    </li>
                    <li>
                      <span className="oc-card__icon contact-list__icon">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>
                      <div>
                        <span className="contact-list__label">Address</span>
                        <span className="contact-list__value">{ADDRESS}</span>
                      </div>
                    </li>
                  </ul>
                  <div className="contact-socials">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="oc-member__social"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                      >
                        <i className={`fa ${s.icon}`} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="oc-frame contact-map">
                  <iframe
                    title="Map — AUV Room, Hall of Residence 2, IIT Kanpur"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ContactUsPage;
