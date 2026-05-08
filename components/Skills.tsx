"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";

const marqueeItems = [
  "React", "Spring Boot", "Python", "Java", "Next.js", "Express.js",
  "TypeScript", "PostgreSQL", "TensorFlow", "LangChain",
];

const skillCategories = [
  {
    label: "Languages",
    color: "var(--accent-lime)",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    color: "var(--accent-lime)",
    skills: ["HTML", "CSS", "React", "Next.js", "Node.js"],
  },
  {
    label: "Backend & Database",
    color: "var(--accent-lime-2)",
    skills: ["Spring Boot", "Express.js", "PostgreSQL", "MySQL", "Prisma", "Supabase"],
  },
  {
    label: "AI & Machine Learning",
    color: "var(--accent-lime)",
    skills: [
      "Generative AI",
      "Machine Learning",
      "NLP",
      "Prompt Engineering",
      "Deep Learning",
      "LLM Agents",
    ],
  },
];

export default function Skills() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(208,255,0,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "72px" }}>
            <span className="section-label">02 — Technical Stack</span>
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
              Tools &amp; Technologies
              <br />
              <span className="text-gradient">I work with.</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Infinite Marquee ── */}
      <div
        style={{
          overflow: "hidden",
          marginBottom: "80px",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          className="animate-marquee"
          style={{
            display: "flex",
            gap: "0",
            width: "max-content",
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                padding: "0 40px",
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(208,255,0,0.25)",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLSpanElement).style.color = "var(--accent-lime)";
                  (e.target as HTMLSpanElement).style.webkitTextStroke = "1px transparent";
                  (e.target as HTMLSpanElement).style.filter = "drop-shadow(0 0 20px rgba(208,255,0,0.4))";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLSpanElement).style.color = "transparent";
                  (e.target as HTMLSpanElement).style.webkitTextStroke = "1px rgba(208,255,0,0.25)";
                  (e.target as HTMLSpanElement).style.filter = "none";
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skill Categories Grid ── */}
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.label} delay={catIdx * 0.1}>
              <div
                className="glass gradient-border"
                style={{
                  padding: "32px 28px",
                  borderRadius: "24px",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${cat.color}35`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: cat.color,
                      boxShadow: `0 0 8px ${cat.color}80`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: cat.color,
                    }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = `${cat.color}0D`;
                        (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
