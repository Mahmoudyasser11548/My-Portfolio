"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { revealVariant } from "@/data/variants";
import SectionTag from "@/components/ui/SectionTag";
import { skills } from "@/data/portfolio";

function SkillPill({ item }: { item: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 42,
        padding: "10px 16px",
        background: hovered ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "#00ff88" : "rgba(0,255,136,0.45)"}`,
        borderRadius: 999,
        fontSize: 14,
        color: hovered ? "#00ff88" : "#e8e8f0",
        fontWeight: 500,
        transition: "all 0.2s ease",
        cursor: "default",
        whiteSpace: "normal",
        overflowWrap: "anywhere",
      }}
    >
      {item}
    </span>
  );
}

export default function Skills() {
  const leftColumns = skills.filter((_, index) => index % 2 === 0);
  const rightColumns = skills.filter((_, index) => index % 2 !== 0);

  return (
    <section
      id="skills"
      className="section-shell section-screen"
      style={{ maxWidth: 1000 }}
    >
      <SectionTag>04 | Skills</SectionTag>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
          gap: "clamp(1.5rem, 3vw, 2rem)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: 28 }}>
          {leftColumns.map((category, index) => (
            <motion.div
              key={category.category}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              style={{ display: "grid", gap: 12 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "#00ff88",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                {category.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {category.items.map((item) => (
                  <SkillPill key={item} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gap: 28 }}>
          {rightColumns.map((category, index) => (
            <motion.div
              key={category.category}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + leftColumns.length}
              style={{ display: "grid", gap: 12 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "#00ff88",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                {category.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {category.items.map((item) => (
                  <SkillPill key={item} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
