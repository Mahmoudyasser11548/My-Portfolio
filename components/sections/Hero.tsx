"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { revealVariant } from "@/data/variants";
import { meta, summary, stats } from "@/data/portfolio";

export default function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.16);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.16);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section-shell section-screen">
      <div className="hero-grid" style={{ gap: "clamp(2rem, 6vw, 4rem)" }}>
        <div style={{ minWidth: 0 }}>
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.7rem, 1vw, 0.78rem)",
              color: "#00ff88",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "clamp(1rem, 2vw, 1.25rem)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "block",
                width: 32,
                height: 1,
                background: "#00ff88",
              }}
            />
            Available for work
          </motion.div>

          <motion.h1
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0 0 1rem",
              textWrap: "balance",
            }}
          >
            FRONTEND
            <br />
            <span style={{ color: "#00ff88" }}>DEVELOPER</span>
          </motion.h1>

          <motion.p
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2.6vw, 1.625rem)",
              fontWeight: 300,
              color: "rgba(232,232,240,0.72)",
              margin: "0 0 1rem",
              letterSpacing: "0.02em",
            }}
          >
            {meta.name}
          </motion.p>

          <motion.p
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            style={{
              fontSize: "clamp(0.98rem, 1.4vw, 1rem)",
              lineHeight: 1.8,
              color: "rgba(232,232,240,0.58)",
              maxWidth: 520,
              margin: "0 0 2rem",
              overflowWrap: "anywhere",
            }}
          >
            {summary}
          </motion.p>

          <motion.a
            ref={ctaRef}
            href="#contact"
            onClick={scrollToContact}
            data-hover
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              ...(shouldReduceMotion ? {} : { x: springX, y: springY }),
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              width: "min(100%, 14rem)",
              minHeight: 52,
              padding: "16px 24px",
              background: "#00ff88",
              color: "#000",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              boxShadow: "0 0 0 rgba(0,255,136,0)",
              transition: "box-shadow 0.3s",
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { boxShadow: "0 20px 60px rgba(0,255,136,0.3)" }
            }
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            Let&apos;s Talk
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        <motion.div
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          style={{
            padding: "clamp(1.25rem, 3vw, 2.5rem)",
            maxWidth: 300,
            textAlign: "center",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={item.label}
              style={{
                padding: "clamp(1rem, 2vw, 1.75rem) 0",
                borderBottom:
                  index < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 8vw, 3.25rem)",
                  fontWeight: 800,
                  color: "#00ff88",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(232,232,240,0.58)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: 6,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
