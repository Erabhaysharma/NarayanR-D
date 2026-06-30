import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const gridRef = useRef(null);
  const dotRefs = useRef([]);
  const [glowPos, setGlowPos] = useState(null);
  const [dotDistances, setDotDistances] = useState({});

  const handleDotGridMouseMove = (e) => {
    const gridRect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - gridRect.left;
    const y = e.clientY - gridRect.top;
    setGlowPos({ x, y });

    const distances = {};
    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dotX = r.left + r.width / 2 - gridRect.left;
      const dotY = r.top + r.height / 2 - gridRect.top;
      distances[i] = Math.hypot(x - dotX, y - dotY);
    });
    setDotDistances(distances);
  };

  const handleDotGridMouseLeave = () => {
    setGlowPos(null);
    setDotDistances({});
  };

  return (
    <section className="hero section" id="home">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.span className="eyebrow" variants={item}>
            online · {profile.location}
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            {profile.tagline}
          </motion.h1>

          <motion.p className="hero__subtext" variants={item}>
            {profile.heroSubtext}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <Link to="/products" className="btn btn-primary">
              View products
            </Link>
            <Link to="/research" className="btn btn-ghost">
              Read research
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual glass"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div
            className="hero__visual-grid"
            ref={gridRef}
            onMouseMove={handleDotGridMouseMove}
            onMouseLeave={handleDotGridMouseLeave}
          >
            {Array.from({ length: 9 }).map((_, i) => {
              const dist = dotDistances[i];
              const proximity = dist == null ? 0 : Math.max(0, 1 - dist / 120);
              return (
                <motion.span
                  key={i}
                  ref={(el) => (dotRefs.current[i] = el)}
                  className="hero__dot"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: (i % 3) * 0.3 + Math.floor(i / 3) * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    scale: 1 + proximity * 0.6,
                    filter: `drop-shadow(0 0 ${6 + proximity * 22}px rgba(92, 225, 230, ${0.4 + proximity * 0.6}))`,
                  }}
                />
              );
            })}
            <div
              className="hero__dot-glow"
              style={{
                opacity: glowPos ? 1 : 0,
                left: glowPos?.x ?? 0,
                top: glowPos?.y ?? 0,
              }}
            />
          </div>
          <span className="hero__visual-label">build · research · ship</span>
        </motion.div>
      </div>
    </section>
  );
}