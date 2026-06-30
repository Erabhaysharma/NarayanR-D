import React from "react";
import { motion } from "framer-motion";
import "./ResearchCard.css";

export default function ResearchCard({ item, index }) {
  return (
    <motion.article
      className="rcard glass"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="rcard__cover-wrap">
        <img src={item.cover} alt={item.title} className="rcard__cover" loading="lazy" />
        <span className="rcard__date">{item.date}</span>
      </div>

      <div className="rcard__body">
        <h3 className="rcard__title">{item.title}</h3>
        <p className="rcard__desc">{item.description}</p>

        {item.tags?.length > 0 && (
          <ul className="rcard__tags">
            {item.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <a href={item.pdf} target="_blank" rel="noreferrer" className="btn btn-primary rcard__read">
          Read paper ↗
        </a>
      </div>
    </motion.article>
  );
}
