"use client";

import { motion } from "framer-motion";
import { revealVariant } from "@/data/variants";
import SectionTag from "@/components/ui/SectionTag";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell section-screen"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(10,10,18,0.6) 30%, rgba(10,10,18,0.6) 70%, transparent)",
      }}
    >
      <SectionTag>03 | Experience</SectionTag>

      <div style={{ position: "relative", paddingLeft: 40 }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            bottom: 8,
            width: 1,
            background: "rgba(255,255,255,0.07)",
          }}
        />

        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.duration}`}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            style={{
              position: "relative",
              paddingBottom: index < experience.length - 1 ? 60 : 0,
              paddingLeft: 40,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -44,
                top: 8,
                width: 9,
                height: 9,
                background: "#00ff88",
                borderRadius: "50%",
                boxShadow: "0 0 12px #00ff88",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 12,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                {item.company}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#00ff88",
                  background: "rgba(0,255,136,0.08)",
                  padding: "4px 10px",
                  letterSpacing: "0.1em",
                }}
              >
                {item.duration}
              </span>
            </div>

            <div
              style={{
                fontSize: 14,
                color: "rgba(232,232,240,0.45)",
                marginBottom: 20,
                letterSpacing: "0.03em",
              }}
            >
              {item.role}
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {item.achievements.map((achievement, achievementIndex) => (
                <li
                  key={achievementIndex}
                  style={{
                    fontSize: 15,
                    color: "rgba(232,232,240,0.45)",
                    lineHeight: 1.6,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#00ff88",
                      flexShrink: 0,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    -
                  </span>
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
