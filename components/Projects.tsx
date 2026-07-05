


"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    tag: "REST API",
    tagColor: "#00B4D8",
    title: "E-Commerce Backend API",
    description:
      "Designed and built a full e-commerce backend handling products, orders, payments, and user auth. Optimized query performance and added Redis caching to handle traffic spikes.",
    problem: "Slow product queries under high load",
    result: "Reduced response time by 60%, handles 5k req/min",
    stack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://your-demo.com",
    featured: true,
  },
  {
    id: 2,
    tag: "Microservices",
    tagColor: "#E535AB",
    title: "Auth Microservice",
    description:
      "Built a standalone JWT-based authentication service with refresh token rotation, role-based access control, and rate limiting. Designed to plug into any project.",
    problem: "Re-writing auth logic across every project",
    result: "Reusable service deployed across 4 products",
    stack: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    github: "https://github.com",
    live: null,
    featured: true,
  },
  {
    id: 3,
    tag: "Real-time",
    tagColor: "#F4A261",
    title: "Real-time Chat System",
    description:
      "WebSocket-based chat backend supporting rooms, direct messages, online presence, and message history with pagination. Built for scale with Redis pub/sub.",
    problem: "Need live messaging without page refresh",
    result: "Supports 500+ concurrent connections smoothly",
    stack: ["Node.js", "Socket.io", "Redis", "MongoDB"],
    github: "https://github.com",
    live: "https://your-demo.com",
    featured: false,
  },
  {
    id: 4,
    tag: "DevOps",
    tagColor: "#68A063",
    title: "CI/CD Pipeline Setup",
    description:
      "Set up a complete GitHub Actions pipeline for a Node.js app — automated testing, Docker image builds, and zero-downtime deployment to AWS EC2.",
    problem: "Manual deploys taking 30+ minutes, error-prone",
    result: "Deploy time down to 4 minutes, fully automated",
    stack: ["GitHub Actions", "Docker", "AWS EC2", "Nginx"],
    github: "https://github.com",
    live: null,
    featured: false,
  },
];

// ─── Arrow icons as inline SVG ────────────────────────────────────────────────

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project, index, animate,
}: {
  project: typeof projects[0]; index: number; animate: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(22,27,34,0.98)" : "rgba(22,27,34,0.75)",
        border: `1px solid ${hovered ? "rgba(0,180,216,0.30)" : "#30363D"}`,
        borderRadius: 14,
        padding: "26px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 130}ms, transform 0.5s ease ${index * 130}ms, border 0.3s, background 0.3s`,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Top glow line on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: hovered
          ? `linear-gradient(90deg, transparent, ${project.tagColor}, transparent)`
          : "transparent",
        transition: "background 0.4s",
      }} />

      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          padding: "3px 10px", borderRadius: 999,
          background: "rgba(244,162,97,0.10)",
          border: "1px solid rgba(244,162,97,0.25)",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10, color: "#F4A261",
          letterSpacing: "0.08em",
        }}>
          ★ featured
        </div>
      )}

      {/* Tag */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        width: "fit-content",
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: project.tagColor,
          boxShadow: `0 0 6px ${project.tagColor}80`,
        }} />
        <span style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 11, color: project.tagColor,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: 18, fontWeight: 600,
        color: hovered ? "#E6EDF3" : "#C9D1D9",
        lineHeight: 1.3,
        transition: "color 0.2s",
        marginTop: -4,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 14, lineHeight: 1.75,
        color: "#8B949E",
      }}>
        {project.description}
      </p>

      {/* Problem → Result */}
      <div style={{
        background: "rgba(13,17,23,0.6)",
        border: "1px solid #30363D",
        borderRadius: 8,
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10, color: "#DC382D",
            letterSpacing: "0.06em",
            marginTop: 1, whiteSpace: "nowrap",
          }}>
            problem:
          </span>
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13, color: "#8B949E", lineHeight: 1.5,
          }}>
            {project.problem}
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10, color: "#28C840",
            letterSpacing: "0.06em",
            marginTop: 1, whiteSpace: "nowrap",
          }}>
            result: &nbsp;
          </span>
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13, color: "#C9D1D9",
            fontWeight: 500, lineHeight: 1.5,
          }}>
            {project.result}
          </span>
        </div>
      </div>

      {/* Stack pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            padding: "4px 10px", borderRadius: 6,
            background: "rgba(48,54,61,0.5)",
            border: "1px solid #30363D",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11, color: "#8B949E",
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: "flex", gap: 10, marginTop: "auto", paddingTop: 4,
      }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "7px 14px", borderRadius: 6,
            background: "rgba(48,54,61,0.4)",
            border: "1px solid #30363D",
            fontFamily: "Inter, sans-serif",
            fontSize: 12, fontWeight: 500,
            color: "#8B949E", textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            const a = e.currentTarget as HTMLAnchorElement;
            a.style.borderColor = "#00B4D8";
            a.style.color = "#00B4D8";
          }}
          onMouseLeave={e => {
            const a = e.currentTarget as HTMLAnchorElement;
            a.style.borderColor = "#30363D";
            a.style.color = "#8B949E";
          }}
        >
          <GithubIcon /> Code
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "7px 14px", borderRadius: 6,
              background: "rgba(0,180,216,0.08)",
              border: "1px solid rgba(0,180,216,0.25)",
              fontFamily: "Inter, sans-serif",
              fontSize: 12, fontWeight: 500,
              color: "#00B4D8", textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.background = "rgba(0,180,216,0.15)";
              a.style.borderColor = "#00B4D8";
            }}
            onMouseLeave={e => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.background = "rgba(0,180,216,0.08)";
              a.style.borderColor = "rgba(0,180,216,0.25)";
            }}
          >
            <ExternalLinkIcon /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Projects() {
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
      id="projects"
      ref={ref}
      style={{ padding: "64px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "20%", left: "-10%",
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
            Projects
          </div>
          <h2 style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, color: "#E6EDF3",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Featured{" "}
            <span style={{ color: "#00B4D8" }}>Projects</span>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15, color: "#8B949E", lineHeight: 1.7,
            maxWidth: 480,
          }}>
            Real problems, real solutions. Each project shows the challenge faced,
            the approach taken, and the measurable outcome delivered.
          </p>
          <div style={{
            marginTop: 24, height: 1, maxWidth: 60,
            background: "linear-gradient(90deg, #00B4D8, transparent)",
          }} />
        </div>

        {/* Projects grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              animate={visible}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{
          marginTop: 52, textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.6s",
        }}>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 14, color: "#8B949E", marginBottom: 16,
          }}>
            More projects on GitHub
          </p>
          <a
            href="https://github.com/wajidminhas"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 24px", borderRadius: 8,
              background: "transparent",
              border: "1px solid #30363D",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500, fontSize: 14,
              color: "#E6EDF3", textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.borderColor = "#00B4D8";
              a.style.color = "#00B4D8";
              a.style.boxShadow = "0 4px 20px rgba(0,180,216,0.15)";
            }}
            onMouseLeave={e => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.borderColor = "#30363D";
              a.style.color = "#E6EDF3";
              a.style.boxShadow = "none";
            }}
          >
            <GithubIcon /> View all on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}