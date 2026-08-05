import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutCompany from "../components/AboutCompany.jsx";
import AboutFounder from "../components/AboutFounder.jsx";
import "./About.css";

export default function About() {
  const [active, setActive] = useState("company");

  return (
    <main className="about-page">
      <div className="container">

        {/* ── Page header ── */}
        <motion.div
          className="about-page__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Who we are</span>
          <h1 className="about-page__heading">About NR&amp;D</h1>
          <p className="about-page__sub">
            A research-driven product development company helping innovators
            build with confidence — before investing in development.
          </p>

          {/* ── Toggle chips ── */}
          <div className="about-toggle">
            <button
              className={`about-toggle__chip ${active === "company" ? "about-toggle__chip--active" : ""}`}
              onClick={() => setActive("company")}
            >
              <span className="about-toggle__dot" />
              About the Company
            </button>
            <button
              className={`about-toggle__chip ${active === "founder" ? "about-toggle__chip--active" : ""}`}
              onClick={() => setActive("founder")}
            >
              <span className="about-toggle__dot" />
              About the Founder
            </button>
          </div>
        </motion.div>

        {/* ── Panel switcher ── */}
        <AnimatePresence mode="wait">
          {active === "company" ? (
            <motion.div
              key="company"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <AboutCompany />
            </motion.div>
          ) : (
            <motion.div
              key="founder"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <AboutFounder />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}