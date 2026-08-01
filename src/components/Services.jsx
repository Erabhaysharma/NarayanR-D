import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";

const stages = [
  {
    id: 1,
    tag: "Stage 1",
    title: "Discovery Call",
    duration: "Free · 30 min",
    goal: "Understand the idea at a high level and set expectations.",
    points: [
      "Client shares raw idea — problem, solution, target customer",
      "NR&D asks clarifying questions (who, what, why, how)",
      "We explain the validation process, timelines, and pricing",
      "Both parties decide if they want to proceed",
    ],
    output: "Email summary + proposal with package recommendation",
    quote: "We listen. You share your idea. We map the path forward.",
    sample: null,
    cta: "Book Discovery Call",
    ctaHref: "https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Discovery%20Call",
    color: "var(--cyan)",
  },
  {
    id: 2,
    tag: "Stage 2",
    title: "Preliminary Screening",
    duration: "1–2 days · Paid",
    goal: "Quick sanity check before deep research.",
    points: [
      "Market gut check — existing demand & obvious competitors",
      "Technical sanity check — can this be built with current tech?",
      "Financial ballpark — rough build cost & revenue range",
      "Initial GO / NO-GO recommendation",
    ],
    output: "3–5 page screening report with preliminary score",
    scoring: ["Problem clarity", "Market existence", "Technical feasibility", "Resource fit", "Financial viability"],
    quote: "Fast sanity check. We tell you early if the idea has legs.",
    sample: "/samples/preliminary-screening-sample.pdf",
    color: "var(--violet)",
  },
  {
    id: 3,
    tag: "Stage 3",
    title: "Deep Validation & Feasibility",
    duration: "7–14 days · Paid",
    goal: "Comprehensive, evidence-backed validation across all dimensions.",
    points: [
      "Market research — TAM/SAM/SOM, competitor teardown, customer surveys",
      "Technical feasibility — tech stack, architecture, vendor quotes, timeline",
      "Business model — revenue model, unit economics, 3-year projections",
      "Risk assessment — legal, regulatory, IP, operational risks",
    ],
    output: "Full validation report with scored dimensions and evidence",
    sample: "/samples/deep-validation-sample.pdf",
    color: "#ff9f7b",
  },
  {
    id: 4,
    tag: "Stage 4",
    title: "Prototype Planning & MVP Roadmap",
    duration: "3–5 days · Paid",
    goal: "If GO, plan the prototype/MVP with cost and timeline.",
    points: [
      "Define MVP scope — features, user stories, success metrics",
      "Architecture diagram + tech stack recommendation",
      "Vendor quotes — dev agencies, hardware, manufacturing",
      "Timeline (Gantt chart) + budget breakdown + grant support",
    ],
    output: "MVP spec document + budget + timeline + grant proposal draft",
    quote: "Ready to build? We give you the blueprint, costs, and timeline.",
    sample: "/samples/mvp-roadmap-sample.pdf",
    color: "#7bffb8",
  },
  {
    id: 5,
    tag: "Stage 5",
    title: "Investor-Ready Pack",
    duration: "2–3 days · Paid",
    goal: "Package everything for fundraising or internal approval.",
    points: [
      "Pitch deck — 10–15 slides",
      "Investment memo — problem, solution, market, competition, ask",
      "Financial model — 3-year P&L, cash flow, cap table",
      "Competitor teardown + validation evidence appendix",
    ],
    output: "Fundraising-ready deck + memo + financial model",
    sample: "/samples/investor-pack-sample.pdf",
    color: "#ffb86b",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="section services" id="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Our Process </span>
          <h2 className="section-heading">From Raw Idea to Investor-Ready in 14 Days</h2>
          <p className="section-sub">
            We validate your idea before you spend lakhs on development. Clear GO/NO-GO
            decision backed by research, scoring, and a prototype roadmap.
          </p>
          <div className="services__hero-actions">
            
             <a href="https://wa.me/918571816976?text=Hi%2C%20I%27d%20like%20to%20validate%20my%20idea"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Validate My Idea
            </a>
            
             <a
            href="#contact"
            className="nav__link"
            onClick={(e) => handleSectionLink(e, "contact")}
          >
              Book Discovery Call
            </a>
          </div>
        </motion.div>

        {/* Pipeline flow */}
        <div className="services__pipeline">
          {stages.map((s, i) => (
            <React.Fragment key={s.id}>
              <motion.div
                className={`scard glass ${active === s.id ? "scard--open" : ""}`}
                style={{ "--accent": s.color }}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="scard__accent" />

                <div className="scard__top">
                  <span className="scard__tag" style={{ color: s.color, borderColor: s.color }}>
                    {s.tag}
                  </span>
                  <span className="scard__duration">{s.duration}</span>
                </div>

                <h3 className="scard__title">{s.title}</h3>
                <p className="scard__goal">{s.goal}</p>

                <button
                  className="scard__expand"
                  onClick={() => setActive(active === s.id ? null : s.id)}
                >
                  {active === s.id ? "Show less ↑" : "What's included ↓"}
                </button>

                {active === s.id && (
                  <motion.div
                    className="scard__detail"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ul className="scard__points">
                      {s.points.map((p, pi) => (
                        <li key={pi}>{p}</li>
                      ))}
                    </ul>

                    {s.scoring && (
                      <div className="scard__scoring">
                        <span className="scard__scoring-label">Scoring dimensions (1–5 each)</span>
                        <div className="scard__scoring-pills">
                          {s.scoring.map((sc) => (
                            <span key={sc}>{sc}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="scard__output">
                      <strong>Output:</strong> {s.output}
                    </p>

                    {s.quote && <p className="scard__quote">"{s.quote}"</p>}
                  </motion.div>
                )}

                <div className="scard__actions">
                 {s.sample ? (
                    
                    <a  href={s.sample}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost scard__btn"
                    >
                      ↓ Sample work
                    </a>
                  ) : (
                    <a
                      href={s.ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary scard__btn"
                    >
                      {s.cta}
                    </a>
                  )}
                </div>
              </motion.div>

              {i < stages.length - 1 && (
                <motion.div
                  className="services__arrow"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="services__note">
  <strong>Start Here:</strong> Every project begins with a
  <strong> (FREE 30-minute Discovery Call.)</strong>

   <p>Understand the idea at a high level and set expectations.</p>
</div>
    </section>
  );
}