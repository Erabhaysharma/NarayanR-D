import React from "react";
import { motion } from "framer-motion";
import { research } from "../data/research.js";
import ResearchCard from "../components/ResearchCard.jsx";
import "./PageGrid.css";

export default function Research() {
  return (
    <main className="section page-top">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Open notes &amp; papers</span>
          <h1 className="section-heading">Research</h1>
          <p className="section-sub">
            Write-ups and papers, each opening as a PDF straight from Drive.
          </p>
        </motion.div>

        <div className="grid grid--research">
          {research.map((r, i) => (
            <ResearchCard key={r.id} item={r} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
