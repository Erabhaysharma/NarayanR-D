import React from "react";
import { profile } from "../data/profile.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-text">{profile.brand}</span>
          <p className="footer__tagline">{profile.tagline}</p>
        </div>

        <div className="footer__links">
          {profile.social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} {profile.brand}. All rights reserved.</span>
        <span className="footer__signal">signal: stable</span>
      </div>
    </footer>
  );
}
