import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile.js";
import "./VisionMission.css";

const cards = [profile.vision, profile.mission];

export default function VisionMission() {
  return (
    <section className="section" id="vision">
      <div className="container">
        <span className="eyebrow">Why this exists</span>
        <h2 className="section-heading">Vision &amp; Mission</h2>
        <p className="section-sub">
          Two short statements that decide what gets built and published here.
        </p>

        <div className="vm-grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="vm-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="vm-card__tag">{i === 0 ? "look" : "do"}</span>
              <h3 className="vm-card__title">{c.title}</h3>
              <p className="vm-card__body">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
