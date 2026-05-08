"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: "adventures",
    company: "Adventures",
    role: "Web Developer",
    period: "2024 — Present",
    type: "Internship",
    description:
      "Designed and developed responsive web applications using modern frontend frameworks. Collaborated closely with design and product teams to deliver pixel-perfect, performant user experiences.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "var(--accent-lime)",
  },
  {
    id: "ts-techy",
    company: "TS Techy",
    role: "Web Developer",
    period: "2023 — 2024",
    type: "Internship",
    description:
      "Built and maintained full-stack web solutions for clients across multiple domains. Led feature development for client dashboards and contributed to backend API design and integration.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    accent: "var(--accent-lime)",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 0",
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(194,168,120,0.35), transparent)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "72px" }}>
            <span className="section-label">04 — Experience</span>
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
              Where I&apos;ve
              <br />
              <span className="text-gradient">made an impact.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            className="exp-vertical-line"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "24px",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--accent-lime), var(--accent-gold), transparent)",
              opacity: 0.4,
            }}
          />

          <div className="exp-container" style={{ display: "flex", flexDirection: "column", gap: "40px", paddingLeft: "72px" }}>
            {experiences.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 0.15}>
                <div style={{ position: "relative" }}>
                  {/* Timeline dot */}
                  <div
                    className="exp-dot"
                    style={{
                      position: "absolute",
                      left: "-56px",
                      top: "32px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: exp.accent,
                      border: "3px solid var(--bg-surface)",
                      boxShadow: `0 0 16px ${exp.accent}50, 0 0 0 4px ${exp.accent}18`,
                    }}
                  />

                  <div
                    className="glass gradient-border exp-card"
                    style={{
                      padding: "36px 40px",
                      borderRadius: "24px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateX(8px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${exp.accent}30`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="exp-card-header"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "16px",
                        marginBottom: "20px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "6px",
                          }}
                        >
                          <Briefcase size={16} color={exp.accent} />
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              color: exp.accent,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: "var(--text-primary)",
                            letterSpacing: "-0.02em",
                            marginBottom: "4px",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "var(--text-secondary)",
                          }}
                        >
                          @ {exp.company}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 16px",
                          borderRadius: "100px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          flexShrink: 0,
                        }}
                      >
                        <Calendar size={14} color="var(--text-muted)" />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.82rem",
                            color: "var(--text-muted)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        marginBottom: "24px",
                      }}
                    >
                      {exp.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.76rem",
                            fontWeight: 500,
                            padding: "5px 12px",
                            borderRadius: "100px",
                            background: `${exp.accent}0D`,
                            border: `1px solid ${exp.accent}30`,
                            color: exp.accent,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-vertical-line {
            left: 12px !important;
          }
          .exp-container {
            padding-left: 40px !important;
            gap: 24px !important;
          }
          .exp-dot {
            left: -36px !important; /* Center on 12px line: 40 - 36 + 8 = 12 */
          }
          .exp-card {
            padding: 24px !important;
          }
          .exp-card-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
