import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile.js";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/research", label: "Research" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleSectionLink = (e, hash) => {
    if (location.pathname !== "/") return;
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo">
  <span className="nav__logo-mark">
    <img src="/logo/logo.png" alt={`${profile.brand} logo`} className="nav__logo-img" />
  </span>
  <span className="nav__logo-text">{profile.brand}</span>
</NavLink>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
         <a
            href="#contact"
            className="nav__link"
            onClick={(e) => handleSectionLink(e, "contact")}
          >
            Contact
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  );
}
