import React from "react";
import { motion } from "framer-motion";
import "./ProductCard.css";

const typeMeta = {
  app: { label: "Download APK", icon: "⬇" },
  website: { label: "Visit website", icon: "↗" },
  model: { label: "View on GitHub", icon: "⌥" },
};

export default function ProductCard({ product, index, onReadGuide }) {
  const meta = typeMeta[product.type] || typeMeta.website;

  return (
    <motion.article
      className="pcard glass"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pcard__cover-wrap">
        <img src={product.cover} alt={product.title} className="pcard__cover" loading="lazy" />
        <span className="pcard__type">{product.type}</span>
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{product.title}</h3>
        <p className="pcard__tagline">{product.tagline}</p>

        {product.tags?.length > 0 && (
          <ul className="pcard__tags">
            {product.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="pcard__actions">
          
           <a href={product.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            {meta.icon} {meta.label}
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onReadGuide(product)}
          >
            About
          </button>
        </div>
      </div>
    </motion.article>
  );
}