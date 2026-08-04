import React from "react";
import { motion } from "framer-motion";
import "./WhoItsFor.css";

const clients = [
  {
    id: 1,
    label: "Solo Founder",
    image: "https://media.istockphoto.com/id/2214308542/photo/focused-female-entrepreneur-working-on-a-laptop-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=-7mLB0GlF7F9pCppKIY28b4Nfpf6l_xXQMcpyt6TPfo=",
    desc: "First-time or serial founder with a product idea who needs validation before investing.",
  },
  {
    id: 2,
    label: "Corporate Innovation and R&D Teams",
    image: "https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ycG9yYXRlJTIwSW5ub3ZhdGlvbiUyMGFuZCUyMFIlMjZEJTIwVGVhbXN8ZW58MHx8MHx8fDA%3D",
    desc: "Internal teams exploring new product lines, spinouts, or innovation initiatives.",
  },
  {
    id: 3,
    label: "University Researchers, Student Innovators, and Spinouts",
    image: "https://media.istockphoto.com/id/1348130867/photo/happy-teacher-with-group-of-students-in-a-robotics-class-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=IqPoaLDdasTzqpr3tM9JSkFqCMJwu9kNySCA28hjVso=",
    desc: "Academics and students commercialising research or building a startup around their work.",
  },
  {
    id: 4,
    label: "Deeptech, AI, IoT, and Hardware Startups",
    image: "https://media.istockphoto.com/id/1220827152/photo/computing-technologies-collage-with-businessman-and-glowing-electronic-circuit-board-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dq9lUS1Wg7QAOacRppZ1I54UhOc_2tDBhwlaRREPXgw=",
    desc: "Technical founders building complex products who need market and feasibility grounding.",
  },
  {
    id: 5,
    label: "Manufacturing SMEs and Industrial Businesses",
    image: "https://media.istockphoto.com/id/2014506561/photo/wide-angle-view-of-a-factory-two-male-and-female-engineers-asian-and-european-inspecting.jpg?s=1024x1024&w=is&k=20&c=nHWJwrXDcQBM06xW8VgP-lrUrautGvx-lVKmfq54bmc=",
    desc: "Established businesses launching new products or digitising existing operations.",
  },
  {
    id: 6,
    label: "Incubators, Accelerators, and Technology Business Incubators",
    image: "https://media.istockphoto.com/id/1090076200/photo/two-nice-and-cheerful-guys-sit-in-front-one-another-and-shake-hands-they-smile-young-blonde.webp?a=1&b=1&s=612x612&w=0&k=20&c=jUdlDuo49VvS8SvQs_WLUHCSC9qmOXWwHJ8K8pcqO2w=",
    desc: "Organisations supporting a portfolio of startups who need structured validation for their cohort.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="whofor" id="who-its-for">

      {/* ── Hero banner ── */}
      <div className="whofor__hero">
        <div className="whofor__hero-bg" />
        <div className="whofor__hero-overlay" />
        <motion.div
          className="whofor__hero-content"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="whofor__hero-heading">Who This Service Is For</h2>
          <p className="whofor__hero-sub">
            Whether you're a first-time founder, an established business, or an independent
            inventor, this service helps you make informed decisions before investing in development.
          </p>
        </motion.div>
      </div>

      {/* ── 3 × 2 image grid ── */}
      <div className="whofor__grid">
        {clients.map((c, i) => (
          <motion.div
            key={c.id}
            className="wclient"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* background image */}
            <div
              className="wclient__bg"
              style={{ backgroundImage: `url(${c.image})` }}
            />

            {/* gradient scrim */}
            <div className="wclient__scrim" />

            {/* hover detail */}
            <div className="wclient__hover-detail">
              <p>{c.desc}</p>
            </div>

            {/* label always visible at bottom */}
            <div className="wclient__label">
              <span>{c.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}