import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OurServices.css";

const services = [
  {
    id: 1,
    title: "Idea Validation",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
        <path d="M8 13.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "var(--cyan)",
    what: "We evaluate whether your idea solves a meaningful problem, addresses a real market need, and has the potential to become a successful product or business.",
    analyzeTitle: "What We Analyze",
    analyze: [
      "Problem–Solution Fit",
      "Value Proposition Assessment",
      "Initial Market Demand",
      "Target Customer Identification",
      "Existing Alternatives",
      "Innovation & Uniqueness Analysis",
      "Early Opportunity Assessment",
      "Initial Business Potential",
    ],
    deliverables: [
      "Problem Validation Report",
      "Opportunity Assessment",
      "Competitor Snapshot",
      "Go / Pivot / No-Go Recommendation",
      "Executive Summary",
      "Next-Step Roadmap",
    ],
    ctas: [
      { label: "Validate My Idea", primary: true },
      { label: "See Sample Report", primary: false },
    ],
  },
  {
    id: 2,
    title: "Market Research",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
        <path d="M8 17l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "var(--violet)",
    what: "We research the market to understand demand, competition, customer segments, industry trends, and business opportunities.",
    analyzeTitle: "What We Analyze",
    analyze: [
      "Market Size (TAM / SAM / SOM)",
      "Industry Growth Trends",
      "Customer Segmentation",
      "Competitor Benchmarking",
      "Pricing Analysis",
      "Demand Forecast",
      "Geographic Opportunities",
      "Market Entry Barriers",
      "SWOT Analysis",
    ],
    deliverables: [
      "Comprehensive Market Research Report",
      "Competitor Landscape",
      "Customer Persona Summary",
      "Opportunity Matrix",
      "Market Gap Analysis",
      "Strategic Recommendations",
    ],
    ctas: [
      { label: "Start Market Research", primary: true },
      { label: "View Sample Report", primary: false },
    ],
  },
  {
    id: 3,
    title: "Customer Discovery",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
        <circle cx="13" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7.5 19c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    color: "#7bffb8",
    what: "Understand your customers through structured research and validate whether your solution addresses their real needs.",
    analyzeTitle: "What We Analyze",
    analyze: [
      "Customer Interviews",
      "Pain Points",
      "Jobs-to-be-Done",
      "Buying Behavior",
      "Decision-Making Process",
      "User Journey",
      "Customer Expectations",
      "Product-Market Fit Indicators",
    ],
    deliverables: [
      "Customer Research Report",
      "User Personas",
      "Pain Point Analysis",
      "Feature Prioritization",
      "Product Validation Insights",
      "Customer Journey Map",
    ],
    ctas: [
      { label: "Start Customer Discovery", primary: true },
      { label: "Download Sample", primary: false },
    ],
  },
  {
    id: 4,
    title: "Business & Technical Feasibility",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
        <rect x="8" y="9" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="14" y="12" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 9l2-2.5 2 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#ffb86b",
    what: "We evaluate whether your idea is commercially sustainable and technically buildable — covering both business viability and engineering feasibility in one integrated report.",
    analyzeTitle: "What We Analyze",
    analyze: [
      "Revenue Model & Cost Structure",
      "Profitability Potential",
      "Business Model Canvas",
      "Scalability & Financial Risks",
      "Technology Stack Selection",
      "System Architecture & Infrastructure",
      "AI/ML Feasibility (if applicable)",
      "Development Complexity & Timeline",
      "Security Considerations",
    ],
    deliverables: [
      "Business Feasibility Report",
      "Revenue Strategy & Cost Estimation",
      "Business Model Canvas",
      "Technology Blueprint",
      "Recommended Tech Stack",
      "Architecture Diagram",
      "Development Roadmap",
      "Technical Risk Report",
    ],
    ctas: [
      { label: "Run Feasibility Analysis", primary: true },
      { label: "See Sample", primary: false },
    ],
  },
  {
    id: 5,
    title: "Risk Assessment",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
        <path d="M13 8v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="16.5" r="1.2" fill="currentColor"/>
      </svg>
    ),
    color: "#ff9f7b",
    what: "We identify potential risks that could impact your product's success and provide strategies to reduce them before development begins.",
    analyzeTitle: "What We Analyze",
    analyze: [
      "Market & Customer Adoption Risks",
      "Technical Risks",
      "Financial & Operational Risks",
      "Legal & Compliance Risks",
      "Intellectual Property Considerations",
      "Competitive Risks",
      "Product Execution Risks",
      "Scaling Risks",
    ],
    deliverables: [
      "Risk Assessment Report",
      "Risk Matrix",
      "Priority Risk Analysis",
      "Mitigation Strategies",
      "Contingency Recommendations",
      "Overall Viability Score",
    ],
    ctas: [
      { label: "Assess My Risks", primary: true },
      { label: "View Risk Matrix Sample", primary: false },
    ],
  },
  {
    id: 6,
    title: "Minimal Prototype Build",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
        <rect x="8" y="8" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10.5 13h5M13 10.5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    color: "var(--cyan)",
    what: "For ideas that pass validation, we build a lean prototype to test the concept, show it to users, or prepare for investor conversations.",
    analyzeTitle: "What This Includes",
    analyze: [
      "Scope Definition & Feature Trimming",
      "Basic UI/UX or Hardware Concept Layout",
      "Prototype Build Plan",
      "Small Working Prototype or Demo Version",
      "Feedback-Ready Version for Users or Investors",
    ],
    deliverables: [
      "SaaS & App Ideas",
      "Internal Tools",
      "Simple Hardware Concepts",
      "Proof-of-Concept Demos",
    ],
    deliverablesTitle: "Best For",
    ctas: [
      { label: "Plan My Prototype", primary: true },
      { label: "Get Prototype Estimate", primary: false },
    ],
  },
];

export default function OurServices() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="section oursvcs" id="our-services">
      <div className="container">

        {/* Header */}
        <motion.div
          className="oursvcs__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Our Services</span>
          <h2 className="oursvcs__heading">Everything Your Idea Needs</h2>
          <p className="oursvcs__sub">
            A complete suite of research, strategy, engineering, and commercialisation services
            designed to reduce uncertainty and accelerate innovation.
          </p>
        </motion.div>

        {/* 3-column card grid */}
        <div className="oursvcs__grid">
          {services.map((svc, i) => {
            const isOpen = openId === svc.id;
            return (
              <motion.div
                key={svc.id}
                className={`oscard glass ${isOpen ? "oscard--open" : ""}`}
                style={{ "--accent": svc.color }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                layout
              >
                {/* Accent bar */}
                <div className="oscard__bar" />

                {/* Header row — always visible */}
                <button
                  className="oscard__trigger"
                  onClick={() => toggle(svc.id)}
                  aria-expanded={isOpen}
                >
                  <div className="oscard__icon" style={{ color: svc.color }}>
                    {svc.icon}
                  </div>
                  <span className="oscard__num">0{svc.id}</span>
                  <span className="oscard__title">{svc.title}</span>
                  <motion.span
                    className="oscard__arrow"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ↓
                  </motion.span>
                </button>

                {/* Expanded body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="oscard__body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="oscard__body-inner">
                        {/* What it is */}
                        <div className="oscard__block">
                          <h4 className="oscard__block-title">What it is</h4>
                          <p className="oscard__what">{svc.what}</p>
                        </div>

                        <div className="oscard__two-col">
                          {/* Analyze */}
                          <div className="oscard__block">
                            <h4 className="oscard__block-title">{svc.analyzeTitle}</h4>
                            <ul className="oscard__list">
                              {svc.analyze.map((a, ai) => (
                                <li key={ai}>{a}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
                          <div className="oscard__block">
                            <h4 className="oscard__block-title">
                              {svc.deliverablesTitle || "Deliverables"}
                            </h4>
                            <ul className="oscard__list oscard__list--deliverables">
                              {svc.deliverables.map((d, di) => (
                                <li key={di}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Card CTAs */}
                        <div className="oscard__ctas">
                         {svc.ctas.map((cta) => (
  <a
    key={cta.label}
    href={`https://wa.me/919999999999?text=${encodeURIComponent(
      "Hi, I'm interested in: " + cta.label
    )}`}
    target="_blank"
    rel="noreferrer"
    className={`btn ${
      cta.primary ? "btn-primary" : "btn-ghost"
    } oscard__cta-btn`}
  >
    {cta.label}
  </a>
))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Section-level CTAs */}
       <motion.div
  className="oursvcs__footer-ctas"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <a
    href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
    target="_blank"
    rel="noreferrer"
    className="oursvcs__link-btn"
  >
    Know More About
  </a>

  <a
    href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20get%20started%20with%20your%20services"
    target="_blank"
    rel="noreferrer"
    className="btn btn-primary oursvcs__main-cta"
  >
    Get Services
  </a>
</motion.div>

      </div>
    </section>
  );
}