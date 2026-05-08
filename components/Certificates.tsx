"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: "cert-1",
    title: "Machine Learning Specialization",
    issuer: "Coursera — DeepLearning.AI",
    date: "2024",
    accent: "var(--accent-lime)",
    link: "#",
  },
  {
    id: "cert-2",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    accent: "var(--accent-gold)",
    link: "#",
  },
  {
    id: "cert-3",
    title: "Natural Language Processing",
    issuer: "Coursera — DeepLearning.AI",
    date: "2024",
    accent: "var(--accent-lime)",
    link: "#",
  },
  {
    id: "cert-4",
    title: "Spring Boot & Microservices",
    issuer: "Udemy",
    date: "2023",
    accent: "var(--accent-gold)",
    link: "#",
  },
  {
    id: "cert-5",
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    accent: "var(--accent-lime)",
    link: "#",
  },
  {
    id: "cert-6",
    title: "Prompt Engineering for AI",
    issuer: "OpenAI / Coursera",
    date: "2024",
    accent: "var(--accent-gold)",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{
        padding: "120px 0",
        background: "var(--bg-base)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(194,168,120,0.07) 0%, transparent 70%)",
          top: "10%",
          right: "-5%",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "72px" }}>
            <span className="section-label">05 — Certificates</span>
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
              Credentials &amp;
              <br />
              <span className="text-gradient">Certifications.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {certificates.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 0.08}>
              <div
                className="glass gradient-border"
                style={{
                  padding: "32px",
                  borderRadius: "24px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${cert.accent}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Preview placeholder */}
                <div
                  style={{
                    width: "100%",
                    height: "140px",
                    borderRadius: "14px",
                    background: `linear-gradient(135deg, #1C1C1C 0%, #161616 100%)`,
                    border: `1px solid ${cert.accent}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(ellipse at center, ${cert.accent}0A 0%, transparent 70%)`,
                    }}
                  />
                  <Award size={40} color={`${cert.accent}70`} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: cert.accent,
                    }}
                  >
                    {cert.date}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <a
                  href={cert.link}
                  className="btn-outline"
                  style={{
                    fontSize: "0.78rem",
                    padding: "9px 18px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <ExternalLink size={13} /> View Certificate
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
