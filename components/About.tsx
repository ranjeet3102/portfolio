"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { User, Zap, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--bg-base)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(140,94,56,0.08) 0%, transparent 70%)",
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <ScrollReveal>
          <div style={{ marginBottom: "72px" }}>
            <span className="section-label">01 — About Me</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginTop: "16px",
                lineHeight: 1.1,
              }}
            >
              Crafting digital
              <br />
              <span className="text-gradient">experiences that matter.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* ── Left: Profile Photo Frame ── */}
          <ScrollReveal direction="left" delay={0.1}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Outer glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "40px",
                  background:
                    "linear-gradient(135deg, rgba(193,113,74,0.18), rgba(140,94,56,0.1), rgba(202,196,208,0.12))",
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
              />

              {/* Gradient border frame */}
              <div
                className="gradient-border"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "380px",
                  aspectRatio: "4/5",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow:
                    "0 30px 80px rgba(45,42,38,0.15), 0 0 0 1px rgba(193,113,74,0.15)",
                }}
              >
                {/* Placeholder avatar */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(145deg, #f0ead8 0%, #f8f3e9 40%, #efe6d0 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(193,113,74,0.15), rgba(140,94,56,0.1))",
                      border: "2px solid rgba(193,113,74,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <User size={56} color="rgba(193,113,74,0.55)" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Your Photo Here
                  </span>
                </div>

                {/* Glass overlay shimmer */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating tag */}
              <div
                className="glass"
                style={{
                  position: "absolute",
                  bottom: "24px",
                  right: "-10px",
                  padding: "12px 20px",
                  borderRadius: "16px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--accent-terracotta)",
                    lineHeight: 1,
                  }}
                >
                  3+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.06em",
                    marginTop: "2px",
                  }}
                >
                  Years Coding
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Bio Content ── */}
          <ScrollReveal direction="right" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  Hey, I&apos;m{" "}
                  <span style={{ color: "var(--accent-terracotta)" }}>
                    Your Name
                  </span>{" "}
                  👋
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  I&apos;m a final-year{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    Artificial Intelligence &amp; Data Science
                  </strong>{" "}
                  student with a deep passion for building intelligent,
                  impactful software. I bridge the gap between cutting-edge AI
                  research and production-ready full-stack applications.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                  }}
                >
                  My expertise spans{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    LLM agents, NLP, deep learning
                  </strong>{" "}
                  and modern web development with React, Next.js, and Spring
                  Boot. I love turning complex problems into elegant, intuitive
                  solutions.
                </p>
              </div>

              {/* Highlight Cards */}
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
              >
                {[
                  {
                    icon: <Zap size={20} color="var(--accent-terracotta)" />,
                    title: "AI-First Thinking",
                    desc: "Building with LLMs, ML pipelines, and NLP at the core.",
                    hoverBorder: "rgba(193,113,74,0.3)",
                    defaultBorder: "rgba(202,196,208,0.5)",
                  },
                  {
                    icon: <Target size={20} color="var(--accent-bronze)" />,
                    title: "Full-Stack Craft",
                    desc: "From database to deployment — end-to-end ownership.",
                    hoverBorder: "rgba(140,94,56,0.3)",
                    defaultBorder: "rgba(202,196,208,0.5)",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="glass"
                    style={{
                      padding: "20px",
                      borderRadius: "16px",
                      transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = item.hoverBorder;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(45,42,38,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = item.defaultBorder;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>{item.icon}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  className="btn-primary"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{ fontSize: "0.85rem" }}
                >
                  Get In Touch
                </button>
                <a
                  href="/resume.pdf"
                  className="btn-outline"
                  style={{ fontSize: "0.85rem" }}
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
