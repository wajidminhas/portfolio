"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowDown, Mail } from "lucide-react";

const typingLines = [
  "building scalable REST APIs...",
  "designing microservices architecture...",
  "optimizing database performance...",
  "deploying cloud infrastructure...",
  "crafting clean backend solutions...",
];

const stats = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Achieved"   },
  { value: "3x",   label: "Faster APIs"        },
  { value: "5yrs", label: "Experience"         },
];

const techStack = [
  { name: "Node.js",     color: "#68A063" },
  { name: "Python",      color: "#3572A5" },
  { name: "PostgreSQL",  color: "#336791" },
  { name: "Docker",      color: "#2496ED" },
  { name: "Redis",       color: "#DC382D" },
  { name: "AWS",         color: "#FF9900" },
  { name: "GraphQL",     color: "#E535AB" },
  { name: "Kubernetes",  color: "#326CE5" },
];

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => <Mail size={17} />;

const socialLinks = [
  { icon: GithubIcon,   href: "https://github.com",   label: "GitHub"   },
  { icon: LinkedinIcon, href: "https://linkedin.com",  label: "LinkedIn" },
  { icon: MailIcon,     href: "mailto:you@email.com",  label: "Email"    },
];

// Animated counter hook
function useCounter(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const animated = useCounter(numericPart, 1200, visible);

  return (
    <div
      ref={ref}
      style={{
        padding: "20px 24px",
        background: "rgba(22,27,34,0.8)",
        border: "1px solid #30363D",
        borderRadius: 12,
        textAlign: "center",
        flex: "1 1 0",
        minWidth: 110,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* top glow line */}
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
        background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
      }} />
      <div style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: "clamp(24px, 4vw, 32px)",
        fontWeight: 700,
        color: "#00B4D8",
        lineHeight: 1,
        marginBottom: 6,
      }}>
        {visible ? `${animated}${suffix}` : "0"}
      </div>
      <div style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        color: "#8B949E",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [lineIndex,  setLineIndex]  = useState(0);
  const [displayed,  setDisplayed]  = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [visible,    setVisible]    = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const current = typingLines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else {
      setIsDeleting(false);
      setLineIndex(i => (i + 1) % typingLines.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, lineIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "88px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,180,216,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,216,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      {/* Radial glow centre */}
      <div style={{
        position: "absolute", top: "35%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 65%)",
        zIndex: 0, pointerEvents: "none",
      }} />

      {/* ── CONTENT ── */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 820, width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>

        {/* Available badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          marginBottom: 24, padding: "6px 14px", borderRadius: 999,
          background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.20)",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#00B4D8", boxShadow: "0 0 8px #00B4D8",
            animation: "pulse 2s infinite",
          }} />
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#00B4D8", letterSpacing: "0.08em" }}>
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(40px, 7vw, 72px)",
          fontWeight: 700, lineHeight: 1.1, color: "#E6EDF3",
          marginBottom: 12, letterSpacing: "-0.02em",
        }}>
          Hi, I&apos;m{" "}
          <span style={{ color: "#00B4D8", textShadow: "0 0 40px rgba(0,180,216,0.3)" }}>
            Ali Raza
          </span>
        </h1>

        {/* Role */}
        <h2 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(20px, 3.5vw, 32px)",
          fontWeight: 500, color: "#8B949E",
          marginBottom: 36, letterSpacing: "-0.01em",
        }}>
          Backend Developer
        </h2>

        {/* ══════════════════════════════════════
            ATTRACTIVE SECTION BELOW "Backend Developer"
        ══════════════════════════════════════ */}

        {/* Terminal + tagline — side by side on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 36,
        }}
          className="hero-grid"
        >
          {/* Terminal card */}
          <div style={{
            background: "#0D1117",
            border: "1px solid #30363D",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}>
            {/* Title bar */}
            <div style={{
              padding: "10px 14px",
              borderBottom: "1px solid #30363D",
              display: "flex", alignItems: "center", gap: 8,
              background: "#161B22",
            }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
              <span style={{ marginLeft: 8, fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#8B949E" }}>
                ~/portfolio — bash
              </span>
            </div>
            {/* Lines */}
            <div style={{ padding: "16px 18px", minHeight: 110 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#8B949E" }}>$</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#8B949E" }}>whoami</span>
              </div>
              <div style={{ marginBottom: 14, fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#E6EDF3", paddingLeft: 18 }}>
                backend_developer
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#00B4D8" }}>❯</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#E6EDF3" }}>{displayed}</span>
                <span style={{
                  display: "inline-block", width: 2, height: 14,
                  background: "#00B4D8",
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                  verticalAlign: "middle",
                }} />
              </div>
            </div>
          </div>

          {/* Value proposition card */}
          <div style={{
            background: "linear-gradient(135deg, rgba(0,180,216,0.06) 0%, rgba(22,27,34,0.9) 60%)",
            border: "1px solid rgba(0,180,216,0.15)",
            borderRadius: 12,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            <div>
              <div style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10, color: "#00B4D8",
                letterSpacing: "0.12em", textTransform: "uppercase",
                marginBottom: 10,
              }}>
                // what I do
              </div>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15, lineHeight: 1.75,
                color: "#C9D1D9",
              }}>
                I architect and ship backend systems that{" "}
                <span style={{ color: "#00B4D8", fontWeight: 600 }}>scale under pressure</span>,
                stay up at 3 AM, and make frontend devs smile.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              {["APIs", "Databases", "Cloud", "DevOps"].map(tag => (
                <span key={tag} style={{
                  padding: "4px 12px", borderRadius: 999,
                  background: "rgba(0,180,216,0.10)",
                  border: "1px solid rgba(0,180,216,0.20)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11, color: "#00B4D8",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 100} />
          ))}
        </div>

        {/* Tech stack pills */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11, color: "#8B949E",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 12,
          }}>
            // tech stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techStack.map(tech => (
              <span
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  padding: "6px 14px", borderRadius: 6,
                  background: hoveredTech === tech.name
                    ? `${tech.color}18`
                    : "rgba(22,27,34,0.8)",
                  border: `1px solid ${hoveredTech === tech.name ? tech.color + "60" : "#30363D"}`,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  color: hoveredTech === tech.name ? tech.color : "#8B949E",
                  cursor: "default",
                  transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: tech.color,
                  opacity: hoveredTech === tech.name ? 1 : 0.4,
                  transition: "opacity 0.2s",
                }} />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "12px 28px", borderRadius: 8, border: "none", cursor: "pointer",
              background: "#00B4D8", fontFamily: "Inter, sans-serif",
              fontWeight: 600, fontSize: 15, color: "#0D1117", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.background = "#0090AD";
              b.style.boxShadow = "0 6px 24px rgba(0,180,216,0.30)";
              b.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.background = "#00B4D8";
              b.style.boxShadow = "none";
              b.style.transform = "translateY(0)";
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "12px 28px", borderRadius: 8, cursor: "pointer",
              background: "transparent", border: "1px solid #30363D",
              fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 15,
              color: "#E6EDF3", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.borderColor = "#00B4D8";
              b.style.color = "#00B4D8";
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.borderColor = "#30363D";
              b.style.color = "#E6EDF3";
            }}
          >
            Let&apos;s Talk
          </button>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8, marginLeft: 4 }}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label} href={href} target="_blank"
                rel="noopener noreferrer" aria-label={label}
                style={{
                  width: 42, height: 42, borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.03)", border: "1px solid #30363D",
                  color: "#8B949E", transition: "all 0.2s", textDecoration: "none",
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
                  a.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "#8B949E", transition: "color 0.2s",
          animation: "bounce 2.5s infinite",
        }}
        onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = "#00B4D8"}
        onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = "#8B949E"}
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.1em" }}>scroll</span>
        <ArrowDown size={16} />
      </button>

      <style>{`
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce {
          0%,100%{transform:translateX(-50%) translateY(0)}
          50%    {transform:translateX(-50%) translateY(6px)}
        }
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}