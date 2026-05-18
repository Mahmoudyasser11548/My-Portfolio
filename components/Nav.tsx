"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { meta } from "@/data/portfolio";

const links = ["About", "Projects", "Experience", "Skills", "Contact"] as const;

const socialLinks = [
  { label: "GitHub", href: meta.github },
  { label: "LinkedIn", href: meta.linkedin },
  { label: "Email", href: `mailto:${meta.email}` },
];

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = links.map((link) => link.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", drawerOpen);
    return () => document.body.classList.remove("nav-open");
  }, [drawerOpen]);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    setDrawerOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="nav-shell">
        <div className="nav-inner">
          <nav className="nav-bar glass-panel" aria-label="Primary">
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#00ff88",
                textDecoration: "none",
                letterSpacing: "-0.03em",
              }}
            >
              MY.
            </Link>

            <button
              type="button"
              className="hamburger"
              aria-expanded={drawerOpen}
              aria-label={drawerOpen ? "Close drawer" : "Open drawer"}
              onClick={() => setDrawerOpen((value) => !value)}
            >
              <span className="hamburger-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            <button
              type="button"
              className="mobile-drawer__backdrop"
              aria-label="Close drawer"
              onClick={() => setDrawerOpen(false)}
            />

            <motion.aside
              className="mobile-drawer__panel"
              initial={{ x: shouldReduceMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: shouldReduceMotion ? 0 : "100%" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div>
                  <div className="eyebrow">Navigation</div>
                  <div
                    style={{
                      marginTop: 6,
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 22,
                      color: "#00ff88",
                    }}
                  >
                    Menu
                  </div>
                </div>

                <button
                  type="button"
                  className="hamburger"
                  aria-label="Close drawer"
                  aria-expanded="true"
                  onClick={() => setDrawerOpen(false)}
                >
                  <span className="hamburger-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                {links.map((link) => {
                  const id = link.toLowerCase();

                  return (
                    <a
                      key={link}
                      href={`#${id}`}
                      onClick={(event) => handleScroll(event, id)}
                      style={{
                        color: activeSection === id ? "#00ff88" : "#e8e8f0",
                        textDecoration: "none",
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.95rem 1rem",
                        borderRadius: 16,
                        background:
                          activeSection === id
                            ? "rgba(0,255,136,0.08)"
                            : "rgba(255,255,255,0.03)",
                        border:
                          activeSection === id
                            ? "1px solid rgba(0,255,136,0.24)"
                            : "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>

              <div style={{ flex: 1 }} />

              <div style={{ display: "grid", gap: 12 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#00ff88",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Follow me
                </div>

                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 14px",
                      borderRadius: 14,
                      border: "1px solid rgba(0,255,136,0.25)",
                      background: "rgba(255,255,255,0.04)",
                      color: "#e8e8f0",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
