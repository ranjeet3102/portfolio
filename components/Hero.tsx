"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const cyclingWords = [
  "Applications.",
  "Products.",
  "Platforms.",
  "Experiences.",
  "Solutions.",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(193,113,74,0.12) 0%, transparent 60%), #fef9ef",
        paddingTop: "100px",
      }}
    >
      {/* ── Ambient Orbs ── */}
      <div
        className="orb"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(193,113,74,0.22) 0%, rgba(212,132,90,0.08) 50%, transparent 70%)",
          top: "-10%",
          left: "-15%",
          animationDuration: "10s",
          animation: "float 10s ease-in-out infinite, pulse-glow 8s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(140,94,56,0.16) 0%, transparent 70%)",
          bottom: "5%",
          right: "-10%",
          animationDuration: "12s",
          animationDelay: "-4s",
          animation: "floatReverse 12s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(202,196,208,0.25) 0%, transparent 70%)",
          top: "40%",
          left: "60%",
          animationDuration: "15s",
          animationDelay: "-7s",
          animation: "float 15s ease-in-out infinite",
        }}
      />

      {/* ── Grid Texture ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(45,42,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,42,38,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "100px",
            background: "rgba(193,113,74,0.08)",
            border: "1px solid rgba(193,113,74,0.25)",
            marginBottom: "40px",
          }}
        >
          <Sparkles size={14} color="var(--accent-terracotta)" />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent-terracotta)",
            }}
          >
            AI &amp; DS · Full-Stack Developer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: "8px",
              color: "var(--text-primary)",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(3rem, 8vw, 7.5rem)",
                marginBottom: "4px",
              }}
            >
              Engineering
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(2.6rem, 7.5vw, 7rem)",
                color: "var(--text-secondary)",
                marginBottom: "12px",
              }}
            >
              AI-powered
            </span>

            {/* Animated word */}
            <span
              style={{
                display: "block",
                height: "clamp(3.5rem, 9vw, 8rem)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={cyclingWords[wordIndex]}
                  initial={{ y: 90, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -90, opacity: 0, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    display: "block",
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    background:
                      "linear-gradient(135deg, var(--accent-terracotta) 0%, #b85e35 50%, var(--accent-bronze) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                    filter: "drop-shadow(0 0 40px rgba(193,113,74,0.25))",
                  }}
                >
                  {cyclingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            maxWidth: "640px",
            margin: "0 auto 56px",
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "var(--text-secondary)",
          }}
        >
          Final year{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            AI &amp; DS
          </span>{" "}
          student and{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            Full-Stack Web Developer
          </span>{" "}
          specializing in LLM agents, Machine Learning, Deep Learning, and
          Natural Language Processing (NLP).
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
            style={{ fontSize: "0.875rem" }}
          >
            Let&apos;s Work Together
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
            style={{ fontSize: "0.875rem" }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          onClick={scrollToAbout}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            margin: "0 auto",
            color: "var(--text-muted)",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--accent-terracotta)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)")}
          aria-label="Scroll to about"
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to top, var(--bg-base) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
