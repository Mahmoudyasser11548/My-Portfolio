"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { revealVariant } from "@/data/variants";
import SectionTag from "@/components/ui/SectionTag";
import { projects } from "@/data/portfolio";

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell section-screen">
      <SectionTag>02 | Selected Work</SectionTag>

      <div>
        {projects.map((project, index) => {
          const isHovered = hovered === project.num;

          return (
            <motion.article
              key={project.num}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              onMouseEnter={() => setHovered(project.num)}
              onMouseLeave={() => setHovered(null)}
              data-hover
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(3rem, 5rem) minmax(0, 1fr) auto",
                alignItems: "center",
                gap: "clamp(1rem, 3vw, 2.5rem)",
                padding: "clamp(1.5rem, 4vw, 2.5rem) 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                borderTop:
                  index === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: isHovered ? "#00ff88" : "rgba(255,255,255,0.18)",
                  transition: "color 0.3s",
                }}
              >
                {project.num}
              </span>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: isHovered ? "#00ff88" : "#fff",
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                    transition: "color 0.3s",
                    textWrap: "balance",
                  }}
                >
                  {project.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.72rem, 1vw, 0.78rem)",
                    color: "rgba(232,232,240,0.58)",
                    letterSpacing: "0.05em",
                    lineHeight: 1.8,
                    overflowWrap: "anywhere",
                  }}
                >
                  {project.tech.join(" | ")}
                </div>
              </div>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                animate={{
                  rotate: shouldReduceMotion ? 0 : isHovered ? 45 : 0,
                  background: isHovered ? "#00ff88" : "transparent",
                  borderColor: isHovered ? "#00ff88" : "rgba(255,255,255,0.07)",
                  color: isHovered ? "#000" : "rgba(232,232,240,0.58)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 56,
                  height: 56,
                  flexShrink: 0,
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  borderRadius: 999,
                }}
              >
                <ArrowIcon />
              </motion.a>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="desktop-only"
                    style={{
                      position: "absolute",
                      right: 90,
                      top: "-50%",
                      transform: "translateY(-50%)",
                      width: 280,
                      zIndex: 10,
                      border: "1px solid rgba(255,255,255,0.07)",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                      pointerEvents: "none",
                      borderRadius: 24,
                    }}
                  >
                    <Image
                      src={project.preview}
                      alt={project.title}
                      width={280}
                      height={400}
                      sizes="280px"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
