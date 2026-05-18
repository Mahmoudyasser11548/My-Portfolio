"use client";

import { motion } from "framer-motion";
import { revealVariant } from "@/data/variants";
import SectionTag from "@/components/ui/SectionTag";

const techTags = ["React", "Next.js", "TypeScript", "React Native", "Redux", "Tailwind"];

export default function About() {
  return (
    <section id="about" className="section-shell section-screen">
      <SectionTag>01 | About</SectionTag>

      <motion.p
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 700,
          lineHeight: 1.15,
          color: "#fff",
          letterSpacing: "-0.02em",
          marginBottom: "clamp(2rem, 5vw, 5rem)",
          maxWidth: 900,
          textWrap: "balance",
        }}
      >
        I believe in{" "}
        <em style={{ color: "#00ff88", fontStyle: "normal" }}>user-centered design</em>
        {" "}where every pixel serves a purpose and performance is never an afterthought.
      </motion.p>

      <div className="about-grid" style={{ gap: "clamp(2rem, 6vw, 5rem)", alignItems: "start" }}>
        <motion.div
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.25rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 24,
              lineHeight: 1,
            }}
          >
            Hi,
            <br />
            I&apos;m Mahmoud.
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 32 }}>
            {techTags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "#00ff88",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          {[
            "Based in Assiut, Egypt, I'm a Frontend Software Engineer with a passion for building things that both look great and work flawlessly. My work spans web and mobile platforms, with a strong focus on React and React Native ecosystems.",
            "I specialize in crafting high-performance dashboards, admin panels, and user-facing applications. I care deeply about maintainability, clean architecture, and reusable component patterns.",
            "Currently pursuing a Bachelor's in Information Technology at AITU (2022-2026). Proficient in Arabic, English, and intermediately in German.",
          ].map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(232,232,240,0.45)",
                marginBottom: index < 2 ? 20 : 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
