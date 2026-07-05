


"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    year: "2024",
    title: "Freelance Backend Developer",
    place: "Remote",
    desc: "Building REST APIs, microservices, and cloud deployments for clients worldwide.",
    color: "#00B4D8",
  },
  {
    year: "2023",
    title: "Backend Developer",
    place: "Tech Company · Full-time",
    desc: "Led backend architecture for 3 products. Introduced Docker-based deployments and cut release time by 40%.",
    color: "#68A063",
  },
  {
    year: "2022",
    title: "Junior Backend Developer",
    place: "Startup · Full-time",
    desc: "Built and maintained Node.js APIs. Learned PostgreSQL optimization and Redis caching in production.",
    color: "#F4A261",
  },
  {
    year: "2021",
    title: "CS Graduate",
    place: "University",
    desc: "Graduated with a degree in Computer Science. Final project: a distributed task queue system in Python.",
    color: "#E535AB",
  },
];

const values = [
  { icon: "🧱", title: "Clean Architecture",   desc: "Code that the next developer (or future me) can understand without a map." },
  { icon: "📈", title: "Results First",        desc: "I measure success in outcomes — faster queries, fewer errors, happier users." },
  { icon: "🔍", title: "Detail Oriented",      desc: "Edge cases, error handling, logs — the boring stuff that saves you at 3 AM." },
  { icon: "🤝", title: "Clear Communication",  desc: "I keep clients in the loop. No surprises, just consistent progress updates." },
];

function ValueCard({ icon, title, desc, animate, delay }: {
  icon: string; title: string; desc: string; animate: boolean; delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "20px 18px",
        background: hovered ? "rgba(22,27,34,0.98)" : "rgba(22,27,34,0.6)",
        border: `1px solid ${hovered ? "rgba(0,180,216,0.25)" : "#30363D"}`,
        borderRadius: 12,
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border 0.3s, background 0.3s`,
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
      <div style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: 14, fontWeight: 600,
        color: hovered ? "#00B4D8" : "#E6EDF3",
        marginBottom: 8, transition: "color 0.2s",
      }}>
        {title}
      </div>
      <div style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 13, color: "#8B949E", lineHeight: 1.65,
      }}>
        {desc}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "64px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Bg glow */}
      <div style={{
        position: "absolute", top: "40%", right: "-5%",
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Section header ── */}
        <div style={{
          marginBottom: 36,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12, color: "#00B4D8",
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12,
          }}>
            About
          </div>
          <h2 style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, color: "#E6EDF3",
            letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 14,
          }}>
            About <span style={{ color: "#00B4D8" }}>Me</span>
          </h2>
          <div style={{
            height: 1, maxWidth: 60,
            background: "linear-gradient(90deg, #00B4D8, transparent)",
          }} />
        </div>

        {/* ── Two column: intro + timeline ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          marginBottom: 36,
          alignItems: "start",
        }}
          className="about-grid"
        >

          {/* Left — Personal intro */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}>
            {/* Avatar placeholder */}
            <div style={{
              width: 80, height: 80, borderRadius: 16,
              background: "linear-gradient(135deg, rgba(0,180,216,0.15), rgba(0,180,216,0.05))",
              border: "1px solid rgba(0,180,216,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 32, marginBottom: 24,
            }}>
              👨‍💻
            </div>

            <h3 style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 22, fontWeight: 600,
              color: "#E6EDF3", marginBottom: 16,
            }}>
              Hey, I&apos;m Wajid 👋
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "I'm a backend developer with a passion for building systems that are fast, reliable, and built to last. I care deeply about the code I write — not just that it works, but that it's clean, testable, and maintainable.",
                "I've worked across the stack — from designing PostgreSQL schemas and optimizing slow queries to setting up Docker pipelines and deploying to AWS. But backend is where I'm most at home.",
                "When I'm not building APIs, I'm learning. Currently diving into agentic AI development and exploring how LLMs can be part of real production systems.",
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15, lineHeight: 1.8, color: "#8B949E",
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Quick facts */}
            <div style={{
              marginTop: 28,
              padding: "16px 18px",
              background: "rgba(13,17,23,0.6)",
              border: "1px solid #30363D",
              borderRadius: 10,
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {[
                { label: "location", value: "Pakistan 🇵🇰" },
                { label: "focus",    value: "Backend · APIs · Cloud" },
                { label: "status",   value: "Open to freelance & remote" },
                { label: "learning", value: "Agentic AI · LangGraph · RAG" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11, color: "#00B4D8",
                    letterSpacing: "0.06em", minWidth: 68,
                  }}>
                    {label}:
                  </span>
                  <span style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13, color: "#C9D1D9",
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}>
            <div style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11, color: "#8B949E",
              letterSpacing: "0.10em", textTransform: "uppercase",
              marginBottom: 24,
            }}>
              // experience timeline
            </div>

            <div style={{ position: "relative", paddingLeft: 24 }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: 6, top: 8, bottom: 8,
                width: 1,
                background: "linear-gradient(180deg, #00B4D8, #30363D, transparent)",
              }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {timeline.map((item, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    {/* Dot */}
                    <div style={{
                      position: "absolute", left: -21, top: 4,
                      width: 10, height: 10, borderRadius: "50%",
                      background: item.color,
                      boxShadow: `0 0 8px ${item.color}80`,
                      border: "2px solid #0D1117",
                    }} />

                    <div style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 11, color: item.color,
                      letterSpacing: "0.08em", marginBottom: 4,
                    }}>
                      {item.year}
                    </div>
                    <div style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 15, fontWeight: 600,
                      color: "#E6EDF3", marginBottom: 3,
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12, color: "#8B949E",
                      marginBottom: 8,
                    }}>
                      {item.place}
                    </div>
                    <p style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13, color: "#8B949E", lineHeight: 1.65,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Values grid ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.3s",
        }}>
          <div style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11, color: "#8B949E",
            letterSpacing: "0.10em", textTransform: "uppercase",
            marginBottom: 20,
          }}>
            How I work
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}>
            {values.map((v, i) => (
              <ValueCard key={v.title} {...v} animate={visible} delay={400 + i * 100} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 680px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}