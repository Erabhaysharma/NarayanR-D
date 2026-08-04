import React from "react";
import { profile } from "../data/profile.js";
import "./Footer.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Research", href: "/research" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Confidentiality", href: "/confidentiality" },
  { label: "IP Policy", href: "/ip-policy" },
];

const socials = [
  {
    label: "Twitter / X",
    href: "https://x.com/narayan_rd_",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/narayan-research-development/about/?viewAsMember=true",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/narayan_research_development/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@NarayanResearchDevelopment",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ── Top glow accent line ── */}
      <div className="footer__accent-line" />

      <div className="container">

        {/* ══════════════════════════════
            ROW 1 — Brand + Nav + Address
        ══════════════════════════════ */}
        <div className="footer__top">

          {/* Col 1 — Brand */}
          <div className="footer__col footer__col--brand">
            <span className="footer__logo">{profile.brand}</span>
            <p className="footer__tagline">{profile.tagline}</p>
            <p className="footer__desc">
              A research-driven product development company helping founders, SMEs,
              and innovators validate ideas, assess feasibility, and build with confidence
              — before investing in development.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Navigate</h4>
            <ul className="footer__nav-list">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Legal</h4>
            <ul className="footer__nav-list">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Socials */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Connect</h4>
            <address className="footer__address">
              <p>Haryana, India</p>
              <a href={`mailto:${profile.contact.email}`} className="footer__email">
                {profile.contact.email}
              </a>
            </address>

            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="footer__social-icon"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            DIVIDER
        ══════════════════════════════ */}
        <div className="footer__divider" />

        {/* ══════════════════════════════
            ROW 2 — IP Rights strip
        ══════════════════════════════ */}
        <div className="footer__ip">
          <p className="footer__ip-text">
            All research methodologies, frameworks, validation processes, reports, documents,
            and intellectual outputs produced by Narayan R&D are proprietary and protected under
            applicable intellectual property laws. Unauthorised reproduction, distribution,
            or commercial use is strictly prohibited.
          </p>
          <div className="footer__ip-badges">
            <span>© Narayan R&D {year}</span>
            <span>All Rights Reserved</span>
            <span>Confidential by Default</span>
          </div>
        </div>

        {/* ══════════════════════════════
            ROW 3 — Bottom bar
        ══════════════════════════════ */}
        <div className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} {profile.brand}. Built in India.
          </span>
          <span className="footer__signal">
            <span className="footer__signal-dot" />
            All systems operational
          </span>
        </div>

      </div>
    </footer>
  );
}