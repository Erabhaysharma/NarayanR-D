import React from "react";
import { motion } from "framer-motion";
import "./AboutFounder.css";

const skills = [
  "LLMs & Agentic AI", "RAG Pipelines", "React Native / Expo",
  "FastAPI", "Supabase", "MediaPipe / Computer Vision",
  "MLOps", "Docker", "Python", "Full-Stack Development",
];

const milestones = [
  {
    year: "2022",
    title: "Started B.Tech in AI & ML",
    desc: "Enrolled at Kurukshetra University, pursuing Artificial Intelligence and Machine Learning engineering.",
  },
  {
    year: "2023",
    title: "First Production App",
    desc: "Built and shipped Medha — a full-stack AI diary companion with RAG memory, Razorpay payments, and Supabase backend.",
  },
  {
    year: "2024",
    title: "Founded Narayan R&D",
    desc: "Established NR&D as a research-driven product development company focused on idea validation and applied AI.",
  },
  {
    year: "2025",
    title: "Building Ojas",
    desc: "Developing Ojas — a computer-vision fitness gaming app using MediaPipe pose detection and a coin economy.",
  },
  {
    year: "2026",
    title: "Final Year & Full-Time NR&D",
    desc: "Completing B.Tech while running NR&D's validation and R&D services for founders, SMEs, and innovators.",
  },
];

const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0 },
};

export default function AboutFounder() {
  return (
    <div className="afounder">

      {/* ══════════════════════════════
          Hero — photo + bio
      ══════════════════════════════ */}
      <motion.section
        className="afounder__hero glass"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="afounder__hero-accent" />

        <div className="afounder__photo-wrap">
          <img src="/founder.jpg" alt="Abhay Kumar Sharma" className="afounder__photo" />
          <div className="afounder__photo-ring" />
        </div>

        <div className="afounder__bio">
          <span className="eyebrow">Founder &amp; Director</span>
          <h2 className="afounder__name">Abhay Kumar Sharma</h2>
          <p className="afounder__role">
            AI &amp; ML Engineer · Full-Stack Developer · Product Builder
          </p>
          <p className="afounder__about">
            Final-year B.Tech student in AI &amp; ML at Kurukshetra University and founder of
            Narayan R&amp;D. Abhay builds production-grade AI applications independently —
            spanning agentic systems, RAG pipelines, computer vision, and mobile apps —
            and has shipped multiple end-to-end products as a solo developer.
          </p>
          <p className="afounder__about">
            He founded NR&D to bridge the gap between research and real products — giving
            founders and businesses a structured, evidence-based process to validate ideas
            before committing development resources.
          </p>

          <div className="afounder__contact-row">
           <a 
              href="https://github.com/Erabhaysharma"
              target="_blank" rel="noreferrer"
              className="btn btn-ghost afounder__link-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-sharma-4b4816253/"
              target="_blank" rel="noreferrer"
              className="btn btn-ghost afounder__link-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/918571816976"
              target="_blank" rel="noreferrer"
              className="btn btn-primary afounder__link-btn"
            >
              Contact Directly
            </a>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════
          Skills
      ══════════════════════════════ */}
      <motion.section
        className="afounder__section"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
      >
        <motion.span className="eyebrow" variants={fadeItem}>Technical Stack</motion.span>
        <div className="afounder__skills">
          {skills.map((s) => (
            <motion.span key={s} className="afounder__skill-chip" variants={fadeItem}>
              {s}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* ══════════════════════════════
          Timeline
      ══════════════════════════════ */}
      <motion.section
        className="afounder__section"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
      >
        <motion.span className="eyebrow" variants={fadeItem}>Journey</motion.span>

        <div className="afounder__timeline">
          {milestones.map((m, i) => (
            <motion.div key={i} className="afounder__milestone" variants={fadeItem}>
              <div className="afounder__milestone-left">
                <span className="afounder__milestone-year">{m.year}</span>
                <div className="afounder__milestone-line" />
              </div>
              <div className="afounder__milestone-card glass">
                <h4 className="afounder__milestone-title">{m.title}</h4>
                <p className="afounder__milestone-desc">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}