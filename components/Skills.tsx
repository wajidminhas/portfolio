


"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js",    level: 90, color: "#68A063" },
      { name: "Python",     level: 85, color: "#3572A5" },
      { name: "Express.js", level: 88, color: "#E6EDF3" },
      { name: "FastAPI",    level: 75, color: "#009688" },
      { name: "REST APIs",  level: 95, color: "#00B4D8" },
      { name: "GraphQL",    level: 70, color: "#E535AB" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 88, color: "#336791" },
      { name: "MongoDB",    level: 82, color: "#47A248" },
      { name: "Redis",      level: 78, color: "#DC382D" },
      { name: "MySQL",      level: 80, color: "#4479A1" },
      { name: "Prisma ORM", level: 75, color: "#2D3748" },
      { name: "SQL",        level: 90, color: "#F4A261" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Docker",     level: 82, color: "#2496ED" },
      { name: "AWS",        level: 70, color: "#FF9900" },
      { name: "Linux",      level: 85, color: "#FCC624" },
      { name: "GitHub CI",  level: 75, color: "#E6EDF3" },
      { name: "Nginx",      level: 72, color: "#009639" },
      { name: "Kubernetes", level: 60, color: "#326CE5" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git",        level: 92, color: "#F05032" },
      { name: "VS Code",    level: 95, color: "#007ACC" },
      { name: "Postman",    level: 90, color: "#FF6C37" },
      { name: "Jest",       level: 78, color: "#C21325" },
      { name: "Swagger",    level: 80, color: "#85EA2D" },
      { name: "Bash",       level: 74, color: "#4EAA25" },
    ],
  },
];

// ─── Skill bar ───────────────────────────────────────────────────────────────

function SkillBar({
  name, level, color, animate,
}: {
  name: string; level: number; color: string; animate: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ marginBottom: 14 }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 6,
      }}>
        <span style={{
          fontFamily: "Inter, sans-serif", fontSize: 13,
          color: hovered ? color : "#C9D1D9",
          transition: "color 0.2s",
          fontWeight: hovered ? 500 : 400,
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: "JetBrains Mono, monospace", fontSize: 11,
          color: hovered ? color : "#8B949E",
          transition: "color 0.2s",
        }}>
          {level}%
        </span>
      </div>

      {/* Track */}
      <div style={{
        height: 5, borderRadius: 99,
        background: "rgba(48,54,61,0.8)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Fill */}
        <div style={{
          height: "100%", borderRadius: 99,
          background: hovered
            ? `linear-gradient(90deg, ${color}99, ${color})`
            : `linear-gradient(90deg, ${color}60, ${color}99)`,
          width: animate ? `${level}%` : "0%",
          transition: animate
            ? "width 1s cubic-bezier(0.4,0,0.2,1), background 0.3s"
            : "background 0.3s",
          boxShadow: hovered ? `0 0 8px ${color}60` : "none",
        }} />
      </div>
    </div>
  );
}

// ─── Category card ───────────────────────────────────────────────────────────

function CategoryCard({
  category, animate, delay,
}: {
  category: typeof categories[0]; animate: boolean; delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(22,27,34,0.95)" : "rgba(22,27,34,0.7)",
        border: `1px solid ${hovered ? "rgba(0,180,216,0.25)" : "#30363D"}`,
        borderRadius: 14,
        padding: "24px 22px",
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border 0.3s, background 0.3s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: hovered
          ? "linear-gradient(90deg, transparent, #00B4D8, transparent)"
          : "transparent",
        transition: "background 0.3s",
      }} />

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
      }}>
        <span style={{ fontSize: 18 }}>{category.icon}</span>
        <span style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: 15, fontWeight: 600,
          color: hovered ? "#00B4D8" : "#E6EDF3",
          transition: "color 0.2s",
        }}>
          {category.label}
        </span>
        <span style={{
          marginLeft: "auto",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10, color: "#8B949E",
          letterSpacing: "0.08em",
        }}>
          {category.skills.length} skills
        </span>
      </div>

      {/* Skills */}
      {category.skills.map(skill => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={skill.color}
          animate={animate}
        />
      ))}
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "64px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: "absolute", bottom: "10%", right: "-10%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div style={{
          marginBottom: 36,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12, color: "#00B4D8",
            letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: 12,
          }}>
            Skills
          </div>
          <h2 style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, color: "#E6EDF3",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Skills &{" "}
            <span style={{ color: "#00B4D8" }}>Technologies</span>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15, color: "#8B949E", lineHeight: 1.7,
            maxWidth: 480,
          }}>
            Tools and technologies I use to build robust, scalable backend systems
            from scratch to production.
          </p>

          {/* Divider */}
          <div style={{
            marginTop: 24, height: 1, maxWidth: 60,
            background: "linear-gradient(90deg, #00B4D8, transparent)",
          }} />
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}>
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              animate={visible}
              delay={i * 120}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 48, textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.6s",
        }}>
          <span style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12, color: "#8B949E",
          }}>
            // always learning — currently exploring{" "}
            <span style={{ color: "#F4A261" }}>Rust</span> &{" "}
            <span style={{ color: "#326CE5" }}>Kubernetes</span>
          </span>
        </div>

      </div>
    </section>
  );
}