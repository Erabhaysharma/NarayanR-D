import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductDocModal.css";

const typeMeta = {
  app: { label: "Download APK", icon: "⬇" },
  website: { label: "Visit website", icon: "↗" },
  model: { label: "View on GitHub", icon: "⌥" },
};

function renderDoc(doc) {
  return doc
    .trim()
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("## ")) {
        return <h3 key={i}>{line.replace("## ", "")}</h3>;
      }
      if (line.startsWith("- ")) {
        return <li key={i}>{line.replace("- ", "")}</li>;
      }
      if (line.trim() === "") return null;
      return <p key={i}>{line}</p>;
    });
}

export default function ProductDocModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  const meta = product ? typeMeta[product.type] || typeMeta.website : null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="doc-modal__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="doc-modal glass glass-strong"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.title} guide`}
          >
            <button className="doc-modal__close" onClick={onClose} aria-label="Close guide">
              ✕
            </button>

            <div className="doc-modal__cover-wrap">
              <img src={product.cover} alt={product.title} className="doc-modal__cover" />
              <span className="doc-modal__type">{product.type}</span>
            </div>

            <div className="doc-modal__body">
              <h2 className="doc-modal__title">{product.title}</h2>
              <p className="doc-modal__tagline">{product.tagline}</p>

              {product.tags?.length > 0 && (
                <ul className="doc-modal__tags">
                  {product.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}

              <div className="doc-modal__doc">{renderDoc(product.doc)}</div>

              
                <a href={product.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary doc-modal__action"
              >
                {meta.icon} {meta.label}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}