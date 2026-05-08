"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Experience",   href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled
            ? "rgba(10,10,10,0.90)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid rgba(255,255,255,0)",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={() => handleNav("#hero")}
            whileHover={{ scale: 1.04 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.35rem",
              color: "var(--accent-lime)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              cursor: "pointer",
            }}
          >
            R<span style={{ color: "var(--text-muted)" }}>.</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <ul
            style={{
              display: "flex",
              gap: "36px",
              listStyle: "none",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color:
                      activeLink === link.href
                        ? "var(--accent-lime)"
                        : "var(--text-secondary)",
                    transition: "color 0.25s ease",
                    position: "relative",
                    padding: "4px 0",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      activeLink === link.href
                        ? "var(--accent-lime)"
                        : "var(--text-secondary)")
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <motion.button
              onClick={() => handleNav("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary hidden-mobile"
              style={{ fontSize: "0.8rem", padding: "10px 24px" }}
            >
              Hire Me
            </motion.button>

            {/* Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen((p) => !p)}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                display: "none",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              background: "rgba(17,17,17,0.97)",
              backdropFilter: "blur(30px)",
              zIndex: 999,
              padding: "100px 32px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color:
                    activeLink === link.href
                      ? "var(--accent-lime)"
                      : "var(--text-primary)",
                  textAlign: "left",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNav("#contact")}
              className="btn-primary"
              style={{ marginTop: "24px", justifyContent: "center" }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
