import "./Confidentiality.css";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaFileSignature,
  FaFingerprint,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Confidential Engagement",
    text: "Every conversation begins with complete confidentiality and trust.",
  },
  {
    icon: <FaUserShield />,
    title: "Private Project Handling",
    text: "Your documents, discussions and research remain completely private.",
  },
  {
    icon: <FaLock />,
    title: "Secure Information",
    text: "Enterprise-level security practices protect every file and communication.",
  },
  {
    icon: <FaFileSignature />,
    title: "NR&D Available",
    text: "We happily sign NR&Ds before discussing your product or technology.",
  },
  {
    icon: <FaFingerprint />,
    title: "100% IP Ownership",
    text: "Every idea, design and innovation remains legally owned by you.",
  },
];

export default function Confidentiality() {
  return (
    <section className="confidentiality">

      {/* ================= Banner ================= */}

      <div className="conf-banner">

        <img
          src="/public/confidentiality.jpg"
          alt="Confidentiality"
        />

        <div className="conf-overlay"></div>

        <div className="container">

          <div className="conf-content">

            <span className="eyebrow">
              SECURITY & CONFIDENTIALITY
            </span>

            <h3 className="section-heading">
              Your Idea Stays <br />
              Completely Confidential
            </h3>

            <p className="section-sub">
              Every discussion, research document, prototype and business
              strategy is handled with complete confidentiality. We protect
              your intellectual property throughout the entire innovation
              journey.
            </p>

          </div>

        </div>

      </div>

      {/* ================= Cards ================= */}

      <div className="container">

        <div className="conf-grid">

          {features.map((item, index) => (
            <div
              className={`glass glass-strong conf-card card-${index + 1}`}
              key={index}
            >

              <div className="icon-circle">

                {item.icon}

              </div>

              <div className="card-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

        <div className="conf-contact">

          <p>

            Have questions about protecting your innovation?

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Contact us here
            </a>

          </p>

        </div>

      </div>

    </section>
  );
}