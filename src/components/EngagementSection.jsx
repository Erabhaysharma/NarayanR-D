import React, { useState } from "react";
import { motion } from "framer-motion";
import "./EngagementSection.css";

const engagements = [
  {
    id: 1,
    title: "Individual Services",
    desc: "Need only market research, feasibility analysis, a prototype, or a business model? Select any service independently.",
    delivery: "Typical Delivery: 7–14 business days*",
    color: "var(--cyan)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Complete Innovation Program",
    desc: "From idea validation to commercialisation, we manage the complete innovation lifecycle through one structured engagement.",
    delivery: "Typical Delivery: 2–6 weeks*",
    color: "var(--violet)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l2.5 6.5H22l-6 4.5 2.5 6.5L12 16l-6.5 4.5L8 14 2 9.5h7.5L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Tailored Enterprise Engagements",
    desc: "Custom research, product strategy, and engineering programs for organisations with complex innovation needs.",
    delivery: "Timeline: Based on project scope",
    color: "#ffb86b",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 13v2M9 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const SERVICE_OPTIONS = [
  "Idea Validation",
  "Market Research & Opportunity Analysis",
  "Customer Discovery",
  "Business Feasibility Analysis",
  "Technical Feasibility Assessment",
  "Risk & Viability Assessment",
  "Minimal Prototype Build",
  "Complete Innovation Program",
  "Tailored Enterprise Engagement",
  "Not sure yet — need guidance",
];

const MAIL_TO = "abhaysharma75547@gmail.com";

function buildMailto(form) {
  const subject = encodeURIComponent(`NR&D Service Inquiry — ${form.service || "General"}`);
  const body = encodeURIComponent(
    `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service Interested In: ${form.service}
${form.idea ? `\nIdea / Description:\n${form.idea}` : ""}`
  );
  return `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
}

export default function EngagementSection() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", idea: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    window.location.href = buildMailto(form);
    setSubmitted(true);
  };

  return (
    <section className="section engagement" id="engagement">
      <div className="container">

        {/* Header */}
        <motion.div
          className="engagement__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="engagement__heading">
            Choose the Engagement That Fits Your Innovation
          </h2>
          <p className="engagement__sub">
            Whether you need a single research service or complete end-to-end product development,
            NR&D adapts to your goals. Every engagement is confidential, research-driven, and
            focused on delivering measurable outcomes.
          </p>
        </motion.div>

        {/* Two-column body */}
        <div className="engagement__body">

          {/* LEFT — engagement types */}
          <motion.div
            className="engagement__left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="engagement__list">
              {engagements.map((eng, i) => (
                <motion.div
                  key={eng.id}
                  className="eng-item"
                  style={{ "--accent": eng.color }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="eng-item__icon-col">
                    <div className="eng-item__icon">
                      {eng.icon}
                    </div>
                    {i < engagements.length - 1 && (
                      <div className="eng-item__connector" />
                    )}
                  </div>

                  <div className="eng-item__content">
                    <h3 className="eng-item__title">{eng.title}</h3>
                    <p className="eng-item__desc">{eng.desc}</p>
                    <span className="eng-item__delivery">{eng.delivery}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTAs */}
            <motion.div
              className="engagement__ctas"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#our-services"
                className="engagement__link-btn"
              >
                Know More
              </a>
              <a
                href="https://wa.me/918571816976?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Discovery%20Call"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Book Discovery Call
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — inquiry form */}
          <motion.div
            className="engagement__right"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="enq-form glass">
              <div className="enq-form__header">
                <span className="eyebrow">Start Here</span>
                <h3 className="enq-form__title">Tell Us About Your Idea</h3>
                <p className="enq-form__sub">
                  Fill in your details and we'll get back within 24 hours with a proposal.
                </p>
              </div>

              {submitted ? (
                <div className="enq-form__success">
                  <div className="enq-form__success-icon">✓</div>
                  <h4>Your mail client is opening…</h4>
                  <p>
                    If it didn't open automatically, email us directly at{" "}
                    <a href={`mailto:${MAIL_TO}`}>{MAIL_TO}</a>
                  </p>
                </div>
              ) : (
                <form className="enq-form__fields" onSubmit={handleSubmit} noValidate>

                  <div className="enq-form__row">
                    <label className="enq-field">
                      <span>Full Name <em>*</em></span>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        placeholder="Your full name"
                        className={errors.name ? "enq-field__input--error" : ""}
                      />
                      {errors.name && <span className="enq-field__error">{errors.name}</span>}
                    </label>

                    <label className="enq-field">
                      <span>Phone Number <em>*</em></span>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+91 XXXXX XXXXX"
                        className={errors.phone ? "enq-field__input--error" : ""}
                      />
                      {errors.phone && <span className="enq-field__error">{errors.phone}</span>}
                    </label>
                  </div>

                  <label className="enq-field">
                    <span>Email Address <em>*</em></span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="you@example.com"
                      className={errors.email ? "enq-field__input--error" : ""}
                    />
                    {errors.email && <span className="enq-field__error">{errors.email}</span>}
                  </label>

                  <label className="enq-field">
                    <span>Service Interested In <em>*</em></span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handle}
                      className={errors.service ? "enq-field__input--error" : ""}
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <span className="enq-field__error">{errors.service}</span>}
                  </label>

                  <label className="enq-field">
                    <span>
                      Brief Description of Your Idea{" "}
                      <span className="enq-field__optional">(optional)</span>
                    </span>
                    <textarea
                      name="idea"
                      value={form.idea}
                      onChange={handle}
                      rows={4}
                      placeholder="In a few lines — what's the problem you're solving and who is it for?"
                    />
                  </label>

                  <button type="submit" className="btn btn-primary enq-form__submit">
                    Send Inquiry →
                  </button>

                  <p className="enq-form__note">
                    By submitting you agree to be contacted by NR&D.
                    All information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}