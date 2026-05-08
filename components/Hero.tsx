"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";

const cyclingWords = [
  "Applications.",
  "Products.",
  "Platforms.",
  "Experiences.",
  "Solutions.",
];

// ── Script: each entry is one line ──────────────────────────────────────────
type Token = { text: string; color: string };
type ScriptLine = { tokens: Token[]; pauseAfter?: number };

const SCRIPT: ScriptLine[] = [
  // imports
  { tokens: [{ text: "from ", color: "#C586C0" }, { text: "langchain.agents", color: "#9CDCFE" }, { text: " import ", color: "#C586C0" }, { text: "AgentExecutor", color: "#DCDCAA" }], pauseAfter: 120 },
  { tokens: [{ text: "from ", color: "#C586C0" }, { text: "langchain.memory", color: "#9CDCFE" }, { text: " import ", color: "#C586C0" }, { text: "ConversationBufferMemory", color: "#DCDCAA" }], pauseAfter: 120 },
  { tokens: [{ text: "from ", color: "#C586C0" }, { text: "core.retriever", color: "#9CDCFE" }, { text: " import ", color: "#C586C0" }, { text: "VectorStoreRetriever", color: "#DCDCAA" }], pauseAfter: 220 },
  // blank
  { tokens: [{ text: "", color: "" }], pauseAfter: 80 },
  // comment
  { tokens: [{ text: "# ── Build retriever ──────────────────", color: "#6A9955" }], pauseAfter: 160 },
  // retriever
  { tokens: [{ text: "retriever", color: "#9CDCFE" }, { text: " = ", color: "#D4D4D4" }, { text: "VectorStoreRetriever", color: "#DCDCAA" }, { text: "(", color: "#D4D4D4" }], pauseAfter: 80 },
  { tokens: [{ text: "    index", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "faiss_index", color: "#9CDCFE" }, { text: ",", color: "#D4D4D4" }], pauseAfter: 80 },
  { tokens: [{ text: "    top_k", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "5", color: "#B5CEA8" }, { text: ",", color: "#D4D4D4" }], pauseAfter: 80 },
  { tokens: [{ text: "    score_threshold", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "0.72", color: "#B5CEA8" }], pauseAfter: 80 },
  { tokens: [{ text: ")", color: "#D4D4D4" }], pauseAfter: 220 },
  // blank
  { tokens: [{ text: "", color: "" }], pauseAfter: 80 },
  // comment
  { tokens: [{ text: "# ── Wire up memory + agent ───────────", color: "#6A9955" }], pauseAfter: 160 },
  // memory
  { tokens: [{ text: "memory", color: "#9CDCFE" }, { text: " = ", color: "#D4D4D4" }, { text: "ConversationBufferMemory", color: "#DCDCAA" }, { text: "(", color: "#D4D4D4" }, { text: "k", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "6", color: "#B5CEA8" }, { text: ")", color: "#D4D4D4" }], pauseAfter: 120 },
  // agent
  { tokens: [{ text: "agent", color: "#9CDCFE" }, { text: " = ", color: "#D4D4D4" }, { text: "AgentExecutor", color: "#DCDCAA" }, { text: "(", color: "#D4D4D4" }], pauseAfter: 80 },
  { tokens: [{ text: "    retriever", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "retriever", color: "#9CDCFE" }, { text: ",", color: "#D4D4D4" }], pauseAfter: 80 },
  { tokens: [{ text: "    memory", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "memory", color: "#9CDCFE" }, { text: ",", color: "#D4D4D4" }], pauseAfter: 80 },
  { tokens: [{ text: "    verbose", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: "True", color: "#569CD6" }], pauseAfter: 80 },
  { tokens: [{ text: ")", color: "#D4D4D4" }], pauseAfter: 300 },
  // blank
  { tokens: [{ text: "", color: "" }], pauseAfter: 80 },
  // run
  { tokens: [{ text: "# ── Run ──────────────────────────────", color: "#6A9955" }], pauseAfter: 160 },
  { tokens: [{ text: "resp", color: "#9CDCFE" }, { text: " = ", color: "#D4D4D4" }, { text: "agent", color: "#9CDCFE" }, { text: ".", color: "#D4D4D4" }, { text: "invoke", color: "#DCDCAA" }, { text: '(', color: "#D4D4D4" }, { text: '"Summarize key findings"', color: "#CE9178" }, { text: ")", color: "#D4D4D4" }], pauseAfter: 500 },
  // blank
  { tokens: [{ text: "", color: "" }], pauseAfter: 80 },
  // output
  { tokens: [{ text: "◆ ", color: "#D0FF00" }, { text: "Agent → ", color: "#4EC9B0" }, { text: '"3 docs retrieved · confidence 94.1 %"', color: "#F5F5F2" }], pauseAfter: 200 },
  // { tokens: [{ text: "✓ ", color: "#4EC9B0" }, { text: "latency ", color: "#D4D4D4" }, { text: "0.38 s", color: "#D0FF00" }, { text: "  tokens ", color: "#D4D4D4" }, { text: "312", color: "#D0FF00" }, { text: "  BLEU ", color: "#D4D4D4" }, { text: "91.3", color: "#D0FF00" }], pauseAfter: 3500 },
];

// ── Typing speed (ms per character) ─────────────────────────────────────────
const CHAR_DELAY = 28;

function TerminalWindow() {
  const [completedLines, setCompletedLines] = useState<ScriptLine[]>([]);
  const [currentPartial, setCurrentPartial] = useState<{ tokens: Token[]; charCount: number } | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // blink cursor
  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  // auto-scroll
  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
  }, [completedLines, currentPartial]);

  // main typing engine
  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    function flattenLine(line: ScriptLine) {
      const chars: { char: string; tokenIdx: number }[] = [];
      line.tokens.forEach((tok, ti) => {
        for (const ch of tok.text) chars.push({ char: ch, tokenIdx: ti });
      });
      return chars;
    }

    async function run() {
      await sleep(400);
      for (let li = 0; li < SCRIPT.length; li++) {
        if (cancelled) return;
        const line = SCRIPT[li];
        const chars = flattenLine(line);

        for (let ci = 0; ci <= chars.length; ci++) {
          if (cancelled) return;
          const typedChars = chars.slice(0, ci);
          const partialTokens: Token[] = line.tokens.map((tok) => ({ text: "", color: tok.color }));
          typedChars.forEach(({ char, tokenIdx }) => {
            partialTokens[tokenIdx].text += char;
          });
          setCurrentPartial({ tokens: partialTokens, charCount: ci });
          if (ci < chars.length) await sleep(CHAR_DELAY);
        }

        setCompletedLines((prev) => [...prev, line]);
        setCurrentPartial(null);
        await sleep(line.pauseAfter ?? 100);
      }

      await sleep(2000);
      if (!cancelled) {
        setCompletedLines([]);
        setCurrentPartial(null);
      }
    }

    run();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedLines.length === 0 && currentPartial === null ? 0 : -1]);

  const renderTokens = (tokens: Token[]) =>
    tokens.map((tok, i) =>
      tok.text ? <span key={i} style={{ color: tok.color }}>{tok.text}</span> : null
    );

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        width: "440px",
        borderRadius: "16px",
        background: "rgba(13,13,13,0.92)",
        border: "1px solid rgba(208,255,0,0.18)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(208,255,0,0.06)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Title bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.85 }} />
        ))}
        <div style={{ flex: 1, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          <Terminal size={12} color="rgba(255,255,255,0.35)" />
          <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>rag_agent.py</span>
        </div>
      </div>

      {/* Code area */}
      <div
        ref={containerRef}
        style={{
          padding: "0px 24px 24px",
          height: "400px",
          overflowY: "auto",
          scrollbarWidth: "none",
          fontFamily: "'Fira Code','Cascadia Code','Courier New',monospace",
          fontSize: "0.82rem",
          lineHeight: 1.8,
        }}
      >
        {/* file header */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <span style={{ color: "#D0FF00", fontSize: "0.75rem" }}>~/projects/rag-agent</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>$</span>
          <span style={{ color: "#D4D4D4" }}>nvim rag_agent.py</span>
        </div>

        {/* completed lines */}
        {completedLines.map((line, i) => (
          <div key={i} style={{ display: "flex", flexWrap: "wrap", minHeight: "1.4em" }}>
            {renderTokens(line.tokens)}
          </div>
        ))}

        {/* currently typing line */}
        {currentPartial && (
          <div style={{ display: "flex", flexWrap: "wrap", minHeight: "1.4em", alignItems: "center" }}>
            {renderTokens(currentPartial.tokens)}
            <span style={{
              display: "inline-block",
              width: "2px",
              height: "1.1em",
              background: "#D0FF00",
              verticalAlign: "text-bottom",
              opacity: cursorVisible ? 1 : 0,
              transition: "opacity 0.1s",
              borderRadius: "1px",
              marginLeft: "1px",
            }} />
          </div>
        )}
      </div>

      {/* Status bar */}
      <div style={{ padding: "8px 16px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(208,255,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D0FF00", boxShadow: "0 0 6px #D0FF00" }} />
          <span style={{ fontFamily: "monospace", fontSize: "0.68rem", color: "rgba(208,255,0,0.7)", letterSpacing: "0.05em" }}>WRITING</span>
        </div>
        <span style={{ fontFamily: "monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.25)" }}>Python 3.11 · LangChain 0.3</span>
      </div>
    </motion.div>
  );
}

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
        justifyContent: "flex-start",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(208,255,0,0.08) 0%, transparent 60%), #0A0A0A",
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
            "radial-gradient(circle, rgba(208,255,0,0.18) 0%, rgba(198,255,26,0.06) 50%, transparent 70%)",
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
            "radial-gradient(circle, rgba(194,168,120,0.14) 0%, transparent 70%)",
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
            "radial-gradient(circle, rgba(255,191,73,0.10) 0%, transparent 70%)",
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
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Two-column wrapper ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1300px",
          margin: "0",
          padding: "0 0 0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
        }}
      >
        {/* ── LEFT: Text content ── */}
        <div style={{ flex: "1 1 0", minWidth: 0, textAlign: "left" }}>
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "100px",
              background: "rgba(208,255,0,0.07)",
              border: "1px solid rgba(208,255,0,0.22)",
              marginBottom: "40px",
            }}
          >
            <Sparkles size={14} color="var(--accent-lime)" />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent-lime)",
              }}
            >
              AI &amp; DS · Full-Stack Developer
            </span>
          </motion.div> */}

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
                  fontSize: "clamp(2.4rem, 5.5vw, 6rem)",
                  marginBottom: "4px",
                }}
              >
                Engineering
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2rem, 5vw, 5.5rem)",
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
                  height: "clamp(3rem, 6.5vw, 6.5rem)",
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
                      fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
                      background:
                        "linear-gradient(135deg, #D0FF00 0%, #C6FF1A 50%, #F5F5F2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "none",
                      filter: "drop-shadow(0 0 40px rgba(208,255,0,0.3))",
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
              maxWidth: "520px",
              margin: "0 0 48px",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
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
              justifyContent: "flex-start",
              flexWrap: "wrap",
              marginBottom: "64px",
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
              alignItems: "flex-start",
              gap: "8px",
              margin: "0",
              marginTop: "-32px",
              color: "var(--text-muted)",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--accent-lime)")}
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

        {/* ── RIGHT: Terminal Window ── */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "64px",
            marginTop: "-60px",
          }}
        >
          <TerminalWindow />
        </div>
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
