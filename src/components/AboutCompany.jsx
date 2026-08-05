import React from "react";
import { motion } from "framer-motion";
import "./AboutCompany.css";

const overview = [
  { label: "Company Name",      value: "Narayan Research & Development (NR&D)" },
  { label: "Legal Structure",   value: "Private Limited Company (India)" },
  { label: "Headquarters",      value: "Sonipat, Haryana, India" },
  { label: "Nature of Business",value: "Innovation Validation and Product R&D Services" },
];

const differentiators = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
        <path d="M6 10.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Evidence-Based Validation",
    body: "All key claims are backed by data and cited sources — not gut feeling.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
        <path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Transparent Pricing",
    body: "Fixed-fee packages with clear scope and timelines — no surprises.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
        <path d="M6 10h8M10 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Clear Go / No-Go Decisions",
    body: "Definitive recommendations instead of vague opinions and ambiguous reports.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
        <rect x="6" y="7" width="3" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="11" y="9" width="3" height="4" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    title: "End-to-End Support",
    body: "From idea to prototype to investor readiness — one integrated partner.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
        <path d="M7 13l3-6 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.8 11.5h4.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Indian Scheme Alignment",
    body: "Structured for PRAYAS, SISFS, and TIDE grants — proof-of-concept to commercialisation.",
  },
];

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
};

export default function AboutCompany() {
  return (
    <div className="acompany">

      {/* ══════════════════════════════
          SECTION 1 — Overview table
      ══════════════════════════════ */}
      <motion.section
        className="acompany__section"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.div className="acompany__section-label" variants={fadeItem}>
          <span className="eyebrow">Company Overview</span>
        </motion.div>

        <div className="acompany__overview-grid">
          {overview.map((row) => (
            <motion.div key={row.label} className="acompany__overview-row glass" variants={fadeItem}>
              <span className="acompany__overview-label">{row.label}</span>
              <span className="acompany__overview-value">{row.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ══════════════════════════════
          SECTION 2 — Core value prop
      ══════════════════════════════ */}
      <motion.section
        className="acompany__section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
      >
        <span className="eyebrow">Core Value Proposition</span>
        <div className="acompany__value-card glass">
          <div className="acompany__value-accent" />
          <p className="acompany__value-text">
            NR&D helps <strong>entrepreneurs, inventors, startups, students, SMEs, and businesses</strong>{" "}
            transform raw ideas into investment-ready products. We determine whether an idea is
            commercially viable <em>before</em> clients spend significant money on development.
          </p>
        </div>
      </motion.section>

      {/* ══════════════════════════════
          SECTION 3 — Differentiators
      ══════════════════════════════ */}
      <motion.section
        className="acompany__section"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } } }}
      >
        <motion.span className="eyebrow" variants={fadeItem}>Key Differentiators</motion.span>

        <div className="acompany__diff-grid">
          {differentiators.map((d, i) => (
            <motion.div key={i} className="acompany__diff-card glass" variants={fadeItem}>
              <div className="acompany__diff-icon">{d.icon}</div>
              <div className="acompany__diff-text">
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ══════════════════════════════
          SECTION 4 — CTA strip
      ══════════════════════════════ */}
      <motion.section
        className="acompany__cta-strip glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.5 }}
      >
        <div className="acompany__cta-strip-accent" />
        <div className="acompany__cta-content">
          <h3>Ready to validate your idea?</h3>
          <p>Book a free 30-minute discovery call and we'll map the path forward.</p>
        </div>
        <div className="acompany__cta-actions">
          <a
            href="https://wa.me/918571816976?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Discovery%20Call"
            target="_blank" rel="noreferrer"
            className="btn btn-primary"
          >
            Book Discovery Call
          </a>
          <a href="/services" className="btn btn-ghost">
            View Services
          </a>
        </div>
      </motion.section>

    </div>
  );
}