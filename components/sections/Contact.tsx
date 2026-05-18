"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { revealVariant } from "@/data/variants";
import SectionTag from "@/components/ui/SectionTag";
import { meta } from "@/data/portfolio";

const contactLinks = [
  {
    label: "mahmoudyasser11548@gmail.com",
    href: `mailto:${meta.email}`,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "github.com/Mahmoudyasser11548",
    href: meta.github,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "linkedin.com/in/mahmoud-yasser-dev",
    href: meta.linkedin,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function ContactCard({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 24px",
        minHeight: 56,
        maxWidth: "100%",
        border: `1px solid ${hovered ? "#00ff88" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 999,
        textDecoration: "none",
        color: hovered ? "#00ff88" : "#e8e8f0",
        fontSize: 14,
        fontWeight: 500,
        background: hovered ? "rgba(0,255,136,0.05)" : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "all 0.25s",
        overflowWrap: "anywhere",
      }}
    >
      <span style={{ flexShrink: 0 }}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell section-screen"
      style={{ textAlign: "center" }}
    >
      <SectionTag center>05 | Contact</SectionTag>

      <motion.h2
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          margin: "0 0 1.5rem",
          textWrap: "balance",
        }}
      >
        Let&apos;s build
        <br />
        something <span style={{ color: "#00ff88" }}>great.</span>
      </motion.h2>

      <motion.p
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        style={{
          fontSize: "clamp(0.98rem, 1.3vw, 1rem)",
          color: "rgba(232,232,240,0.58)",
          margin: "0 0 clamp(2rem, 5vw, 3.75rem)",
        }}
      >
        Available for freelance, contracts, and full-time roles.
      </motion.p>

      <motion.div
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {contactLinks.map((link) => (
          <ContactCard key={link.label} {...link} />
        ))}
      </motion.div>
    </section>
  );
}
