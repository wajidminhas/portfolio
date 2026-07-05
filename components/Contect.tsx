

"use client";

import { useEffect, useRef, useState } from "react";

const contactLinks = [
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/wajidminhas",
    href: "https://github.com/wajidminhas",
    color: "#E6EDF3",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/wajid-shabbir-a4a211259/",
    href: "https://www.linkedin.com/in/wajid-shabbir-a4a211259/",
    color: "#0A66C2",
  },
  {
    icon: "email",
    label: "Email",
    value: "shanitent667@gmail.com",
    href: "mailto:shanitent667@gmail.com",
    color: "#00B4D8",
  },
];

// ─── Icons ───────────────────────────────────────────────────────────────────

const icons: Record<string, () => React.ReactElement> = {
  github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  linkedin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  send: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
};

// ─── Form state type ──────────────────────────────────────────────────────────

type FormState = { name: string; email: string; subject: string; message: string };
type Status    = "idle" | "sending" | "sent" | "error";

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Contact() {
  const ref     = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form,    setForm]    = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status,  setStatus]  = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Simulate send — replace with your real API / EmailJS / Resend call
    await new Promise(r => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "11px 14px",
    background: "rgba(13,17,23,0.7)",
    border: `1px solid ${focused === field ? "#00B4D8" : "#30363D"}`,
    borderRadius: 8,
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    color: "#E6EDF3",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    boxShadow: focused === field ? "0 0 0 3px rgba(0,180,216,0.08)" : "none",
  });

  const SendIcon = icons.send;

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "64px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Bg glow */}
      <div style={{
        position: "absolute", bottom: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(0,180,216,0.05) 0%, transparent 70%)",
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
            Contect
          </div>
          <h2 style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700, color: "#E6EDF3",
            letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 14,
          }}>
            Let&apos;s <span style={{ color: "#00B4D8" }}>Work Together</span>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15, color: "#8B949E", lineHeight: 1.7, maxWidth: 480,
          }}>
            Have a project in mind? Looking for a backend developer to join your team?
            Drop me a message — I usually respond within 24 hours.
          </p>
          <div style={{
            marginTop: 24, height: 1, maxWidth: 60,
            background: "linear-gradient(90deg, #00B4D8, transparent)",
          }} />
        </div>

        {/* ── Two column layout ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 40,
          alignItems: "start",
        }}
          className="contact-grid"
        >

          {/* Left — contact info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            display: "flex", flexDirection: "column", gap: 16,
          }}>

            {/* Availability card */}
            <div style={{
              padding: "20px 18px",
              background: "rgba(0,180,216,0.05)",
              border: "1px solid rgba(0,180,216,0.20)",
              borderRadius: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#28C840",
                  boxShadow: "0 0 8px #28C84080",
                  animation: "pulse 2s infinite",
                }} />
                <span style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11, color: "#28C840", letterSpacing: "0.08em",
                }}>
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13, color: "#8B949E", lineHeight: 1.65,
              }}>
                Open to freelance projects, remote contracts, and full-time backend roles.
              </p>
            </div>

            {/* Response time */}
            <div style={{
              padding: "16px 18px",
              background: "rgba(22,27,34,0.7)",
              border: "1px solid #30363D",
              borderRadius: 12,
              display: "flex", gap: 12, alignItems: "center",
            }}>
              <span style={{ fontSize: 22 }}>⚡</span>
              <div>
                <div style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 13, fontWeight: 600, color: "#E6EDF3", marginBottom: 3,
                }}>
                  Fast Response
                </div>
                <div style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12, color: "#8B949E",
                }}>
                  Usually reply within 24 hours
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactLinks.map(({ icon, label, value, href, color }) => {
                const Icon = icons[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "13px 16px", borderRadius: 10,
                      background: "rgba(22,27,34,0.7)",
                      border: "1px solid #30363D",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      color: "#8B949E",
                    }}
                    onMouseEnter={e => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.borderColor = color;
                      a.style.color = color;
                      a.style.background = "rgba(22,27,34,0.95)";
                    }}
                    onMouseLeave={e => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.borderColor = "#30363D";
                      a.style.color = "#8B949E";
                      a.style.background = "rgba(22,27,34,0.7)";
                    }}
                  >
                    <span style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(48,54,61,0.5)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon />
                    </span>
                    <div>
                      <div style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12, fontWeight: 600,
                        color: "inherit", marginBottom: 2,
                      }}>
                        {label}
                      </div>
                      <div style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 11, color: "#8B949E",
                      }}>
                        {value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Contact form */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            background: "rgba(22,27,34,0.75)",
            border: "1px solid #30363D",
            borderRadius: 14,
            padding: "28px 26px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
            }} />

            <div style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11, color: "#8B949E",
              letterSpacing: "0.08em", marginBottom: 22,
            }}>
              // send a message
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                className="form-row">
                <div>
                  <label style={{
                    fontFamily: "Inter, sans-serif", fontSize: 12,
                    color: "#8B949E", display: "block", marginBottom: 6,
                  }}>
                    Name <span style={{ color: "#DC382D" }}>*</span>
                  </label>
                  <input
                    type="text" name="name" value={form.name}
                    placeholder="Your name"
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label style={{
                    fontFamily: "Inter, sans-serif", fontSize: 12,
                    color: "#8B949E", display: "block", marginBottom: 6,
                  }}>
                    Email <span style={{ color: "#DC382D" }}>*</span>
                  </label>
                  <input
                    type="email" name="email" value={form.email}
                    placeholder="your@email.com"
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{
                  fontFamily: "Inter, sans-serif", fontSize: 12,
                  color: "#8B949E", display: "block", marginBottom: 6,
                }}>
                  Subject
                </label>
                <input
                  type="text" name="subject" value={form.subject}
                  placeholder="What's this about?"
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("subject")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{
                  fontFamily: "Inter, sans-serif", fontSize: 12,
                  color: "#8B949E", display: "block", marginBottom: 6,
                }}>
                  Message <span style={{ color: "#DC382D" }}>*</span>
                </label>
                <textarea
                  name="message" value={form.message}
                  placeholder="Tell me about your project..."
                  rows={5}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: 120 }}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                style={{
                  width: "100%", padding: "13px",
                  borderRadius: 8, border: "none", cursor: status === "sending" ? "wait" : "pointer",
                  background: status === "sent"
                    ? "#28C840"
                    : status === "error"
                    ? "#DC382D"
                    : "#00B4D8",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600, fontSize: 15,
                  color: "#0D1117",
                  transition: "all 0.3s",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8,
                  opacity: status === "sending" ? 0.8 : 1,
                }}
                onMouseEnter={e => {
                  if (status === "idle") {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(0,180,216,0.30)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {status === "sending" && "Sending..."}
                {status === "sent"    && "✓ Message Sent!"}
                {status === "error"   && "Failed — Try Again"}
                {status === "idle"    && <><SendIcon /> Send Message</>}
              </button>

              {/* Helper note */}
              <p style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11, color: "#8B949E",
                textAlign: "center", marginTop: -4,
              }}>
                // or email me directly at{" "}
                <a href="mailto:shanitent667@gmail.com" style={{ color: "#00B4D8", textDecoration: "none" }}>
                  shanitent667@gmail.com
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 720px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}