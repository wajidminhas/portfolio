"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [isOpen,         setIsOpen]         = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  /* Shrink on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active-section tracker */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(13,17,23,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #30363D" : "1px solid transparent",
      }}
    >
      <nav style={{
        maxWidth: 1152, margin: "0 auto", padding: "0 24px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* ── Logo ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer" }}
        >
          <span style={{
            width: 32, height: 32, borderRadius: 6,
            background: "rgba(0,180,216,0.10)", border: "1px solid rgba(0,180,216,0.30)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Terminal size={15} color="#00B4D8" />
          </span>
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 14, color: "#E6EDF3", letterSpacing: "0.03em" }}>
            dev<span style={{ color: "#00B4D8" }}>.portfolio</span>
          </span>
        </button>

        {/* ── Desktop links ── */}
        <ul style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: 0 }}
            className="hidden-mobile">
          {navLinks.map(({ label, href }) => {
            const active = activeSection === href.replace("#", "");
            return (
              <li key={label}>
                <button
                  onClick={() => scrollTo(href)}
                  style={{
                    position: "relative", padding: "8px 16px",
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "Inter, sans-serif", fontSize: 14,
                    color: active ? "#00B4D8" : "#8B949E",
                    transition: "color 0.2s",
                    borderRadius: 6,
                  }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = "#E6EDF3"; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = "#8B949E"; }}
                >
                  {label}
                  {active && (
                    <span style={{
                      position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                      width: 16, height: 2, background: "#00B4D8", borderRadius: 2,
                    }} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop CTA ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden-mobile">
          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 12,
              color: "#8B949E", textDecoration: "none", letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00B4D8")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8B949E")}
          >
            resume.pdf
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              padding: "8px 18px", borderRadius: 6, border: "none", cursor: "pointer",
              background: "#00B4D8", color: "#0D1117",
              fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#0090AD";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(0,180,216,0.25)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#00B4D8";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Hire Me
          </button>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none", padding: 8, borderRadius: 6,
            background: "none", border: "none", cursor: "pointer",
            color: "#8B949E",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      {isOpen && (
        <div style={{
          background: "#161B22", borderBottom: "1px solid #30363D",
          animation: "slideDown 0.25s ease forwards",
        }}>
          <ul style={{ maxWidth: 1152, margin: "0 auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4, listStyle: "none" }}>
            {navLinks.map(({ label, href }) => {
              const active = activeSection === href.replace("#", "");
              return (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    style={{
                      width: "100%", textAlign: "left", padding: "12px 16px",
                      borderRadius: 6, background: active ? "rgba(0,180,216,0.10)" : "none",
                      border: "none", cursor: "pointer",
                      fontFamily: "Inter, sans-serif", fontSize: 14,
                      color: active ? "#00B4D8" : "#8B949E",
                      transition: "all 0.2s",
                    }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
            <li style={{ paddingTop: 8, marginTop: 4, borderTop: "1px solid #30363D" }}>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 6,
                  background: "#00B4D8", border: "none", cursor: "pointer",
                  fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
                  color: "#0D1117", transition: "background 0.2s",
                }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Responsive helpers */}
      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none  !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}