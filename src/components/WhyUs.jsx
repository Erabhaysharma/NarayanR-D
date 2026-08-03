import React from "react";
import { motion } from "framer-motion";
import "./WhyUs.css";

const cards = [
  {
    id: 1,
    label: "Clear go/no-go decisions.",
    back: {
      title: "Know Before You Build",
      body: "Make confident decisions with clear Go, Pivot, or No-Go recommendations backed by comprehensive analysis.",
    },
    color: "var(--cyan)",
  },
  {
    id: 2,
    label: "Evidence-backed research.",
    back: {
      title: "Research That Reduces Risk",
      body: "Every recommendation is supported by market, customer, business, and technical research — not assumptions.",
    },
    color: "var(--violet)",
  },
  {
    id: 3,
    label: "Built for startups,\ninventors, and SMEs.",
    back: {
      title: "Built for Innovators",
      body: "Whether you're a startup, inventor, or growing SME — our process adapts to your stage and vision.",
    },
    color: "#7bffb8",
  },
  {
    id: 4,
    label: "Validation plus\nprototype thinking\nin one place.",
    back: {
      title: "From Validation to Prototype",
      body: "Validate your idea and transform it into a tangible proof of concept with one integrated partner.",
    },
    color: "#ffb86b",
  },
  {
    id: 5,
    label: "Less wasted time,\nless wasted\ncapital.",
    back: {
      title: "Invest Smarter",
      body: "Avoid costly mistakes by validating ideas before committing significant time, resources, and capital.",
    },
    color: "#ff9f7b",
  },
];

export default function WhyUs() {
  return (
    <section className="section whyus" id="why">
      <div className="container">

        {/* Header */}
        <motion.div
          className="whyus__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Why NR&amp;D</span>
          <h2 className="whyus__heading">Why You Should Choose NR&amp;D</h2>
          <p className="whyus__sub">
            We combine market intelligence, engineering expertise, and strategic research to help
            you make confident product decisions before investing significant time and money.
          </p>
        </motion.div>

        {/* Two-column body */}
        <div className="whyus__body">

          {/* LEFT — stacked overlapping cards */}
          <div className="whyus__left">
            <div className="whyus__cards-stage">
              {cards.map((card, i) => (
                <motion.div
                  key={card.id}
                  className={`wcard wcard--${card.id}`}
                  style={{ "--accent": card.color }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                >
                  <div className="wcard__inner">
                    {/* Front */}
                    <div className="wcard__face wcard__front">
                      <div className="wcard__icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
                          <circle cx="11" cy="11" r="3.5" fill="currentColor" opacity="0.7"/>
                        </svg>
                      </div>
                      <p className="wcard__label">{card.label}</p>
                    </div>
                    {/* Back */}
                    <div className="wcard__face wcard__back">
                      <h4 className="wcard__back-title">{card.back.title}</h4>
                      <p className="wcard__back-body">{card.back.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="whyus__actions"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://wa.me/918571816976?text=Hi%2C%20I%27d%20like%20to%20validate%20my%20idea"
                target="_blank" rel="noreferrer"
                className="btn btn-ghost whyus__btn-secondary"
              >
                Validate My Idea
              </a>
              <a
                href="https://wa.me/918571816976?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20NR%26D"
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
              >
                Talk to NR&amp;D
              </a>
            </motion.div>
          </div>

          {/* RIGHT — blob + image */}
          <motion.div
            className="whyus__right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="whyus__img-wrap">
              <img
                src="/why-team.jpg"
                alt="NR&D team at work"
                className="whyus__img"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}