

"use client";

import { useState } from "react";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/wajidminhas",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wajid-shabbir-a4a211259/",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:shanitent667@gmail.com",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      borderTop: "1px solid #30363D",
      background: "rgba(13,17,23,0.95)",
      padding: "48px 24px 28px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Top row ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 32,
          marginBottom: 40,
        }}>

          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, marginBottom: 12,
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: 6,
                background: "rgba(0,180,216,0.10)",
                border: "1px solid rgba(0,180,216,0.30)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14,
              }}>
                ⚙️
              </div>
              <span style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600, fontSize: 14, color: "#E6EDF3",
              }}>
                dev<span style={{ color: "#00B4D8" }}>.portfolio</span>
              </span>
            </div>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13, color: "#8B949E", lineHeight: 1.7,
            }}>
              Backend developer building fast, reliable systems. Open to freelance
              projects and remote opportunities.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10, color: "#8B949E",
              letterSpacing: "0.10em", textTransform: "uppercase",
              marginBottom: 14,
            }}>
              Navigation
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      padding: 0,
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: hovered === label ? "#00B4D8" : "#8B949E",
                      transition: "color 0.2s",
                      display: "flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={() => setHovered(label)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span style={{
                      width: 12, height: 1,
                      background: hovered === label ? "#00B4D8" : "#30363D",
                      transition: "background 0.2s",
                    }} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div style={{
            padding: "20px 22px",
            background: "rgba(0,180,216,0.05)",
            border: "1px solid rgba(0,180,216,0.15)",
            borderRadius: 12,
            maxWidth: 240,
          }}>
            <div style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 15, fontWeight: 600,
              color: "#E6EDF3", marginBottom: 8,
            }}>
              Got a project? 🚀
            </div>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13, color: "#8B949E",
              lineHeight: 1.6, marginBottom: 14,
            }}>
              Let&apos;s build something great together.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                width: "100%", padding: "9px",
                borderRadius: 7, border: "none", cursor: "pointer",
                background: "#00B4D8",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600, fontSize: 13,
                color: "#0D1117", transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#0090AD"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#00B4D8"}
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, #30363D, transparent)",
          marginBottom: 24,
        }} />

        {/* ── Bottom row ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          {/* Copyright */}
          <span style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12, color: "#8B949E",
          }}>
            © {year} Your Name —{" "}
            <span style={{ color: "#30363D" }}>built with Next.js & ☕</span>
          </span>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8 }}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 34, height: 34, borderRadius: 7,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(48,54,61,0.3)",
                  border: "1px solid #30363D",
                  color: "#8B949E",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.borderColor = "#00B4D8";
                  a.style.color = "#00B4D8";
                  a.style.background = "rgba(0,180,216,0.08)";
                }}
                onMouseLeave={e => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.borderColor = "#30363D";
                  a.style.color = "#8B949E";
                  a.style.background = "rgba(48,54,61,0.3)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}