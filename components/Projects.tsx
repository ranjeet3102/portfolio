"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: "budget-tracker",
    title: "Budget Tracker",
    description:
      "A full-stack personal finance management application featuring real-time expense tracking, visual analytics dashboards, smart categorization, and budget goal alerts.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Java"],
    github: "#",
    demo: "#",
    accent: "var(--accent-terracotta)",
  },
  {
    id: "construction-site",
    title: "Construction Site Manager",
    description:
      "A project management platform for construction sites with task scheduling, resource allocation, progress tracking, and team collaboration tools.",
    tags: ["Next.js", "Node.js", "MySQL", "Express.js"],
    github: "#",
    demo: "#",
    accent: "var(--accent-bronze)",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A scalable, full-featured e-commerce solution with product management, secure payments, inventory control, and a modern shopping cart experience.",
    tags: ["React", "Spring Boot", "Supabase", "Prisma"],
    github: "#",
    demo: "#",
    accent: "var(--accent-terracotta)",
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes using NLP and ML models to score candidates, extract key insights, and provide ATS optimization recommendations.",
    tags: ["Python", "NLP", "Machine Learning", "FastAPI"],
    github: "#",
    demo: "#",
    accent: "var(--accent-bronze)",
  },
  {
    id: "blueprintml",
    title: "BlueprintML",
    description:
      "A low-code machine learning pipeline builder that lets users design, train, and deploy ML workflows visually — powered by LLM agents for smart assistance.",
    tags: ["Python", "LLM Agents", "React", "FastAPI"],
    github: "#",
    demo: "#",
    accent: "var(--accent-terracotta)",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        background: "var(--bg-base)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(193,113,74,0.07) 0%, transparent 70%)",
          bottom: "-20%",
          left: "-10%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "72px" }}>
            <span className="section-label">03 — Projects</span>
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
              Things I&apos;ve
              <br />
              <span className="text-gradient">built &amp; shipped.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Project Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: idx % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                  padding: "48px",
                  borderRadius: "32px",
                  background: "rgba(45,42,38,0.025)",
                  border: "1px solid rgba(202,196,208,0.55)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                  cursor: "default",
                }}
                className="project-card"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accent}40`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 30px 80px rgba(45,42,38,0.12), 0 0 0 1px ${project.accent}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(202,196,208,0.55)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Subtle corner glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    [idx % 2 === 0 ? "left" : "right"]: 0,
                    width: "300px",
                    height: "300px",
                    background: `radial-gradient(circle, ${project.accent}08 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Image placeholder — reorder for odd items */}
                {idx % 2 !== 0 && (
                  <div
                    style={{
                      borderRadius: "20px",
                      aspectRatio: "16/10",
                      background:
                        "linear-gradient(135deg, #f0ead8 0%, #ede6d0 100%)",
                      border: `1px solid ${project.accent}25`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={`${project.accent}55`} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Project Preview
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${project.accent}06 0%, transparent 60%)`,
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: project.accent,
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Featured Project
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                        lineHeight: 1.2,
                        marginBottom: "16px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.76rem",
                          fontWeight: 500,
                          padding: "5px 12px",
                          borderRadius: "100px",
                          background: `${project.accent}0D`,
                          border: `1px solid ${project.accent}30`,
                          color: project.accent,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a
                      href={project.github}
                      className="btn-outline"
                      style={{ fontSize: "0.8rem", padding: "9px 20px" }}
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <FiGithub size={15} /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="btn-primary"
                      style={{ fontSize: "0.8rem", padding: "9px 20px" }}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Image placeholder — for even items */}
                {idx % 2 === 0 && (
                  <div
                    style={{
                      borderRadius: "20px",
                      aspectRatio: "16/10",
                      background:
                        "linear-gradient(135deg, #f0ead8 0%, #ede6d0 100%)",
                      border: `1px solid ${project.accent}25`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={`${project.accent}55`} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Project Preview
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${project.accent}06 0%, transparent 60%)`,
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card {
            grid-template-columns: 1fr !important;
            padding: 28px !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
