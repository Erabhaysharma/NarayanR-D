import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up — opens the user's email client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Get in touch</span>
            <h2 className="section-heading">Let's talk</h2>
            <p className="section-sub">
              Open to collaborations, freelance builds, and conversations about AI products or research.
            </p>

            <div className="contact-links">
              <a href={`mailto:${profile.contact.email}`} className="contact-link">
                {profile.contact.email}
              </a>
              {profile.social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="contact-link">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <label className="contact-field">
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </label>
            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="What are you building?"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              {sent ? "Opening your email app…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
