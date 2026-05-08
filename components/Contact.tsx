"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Send, ArrowRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const socialLinks = [
  {
    label: "Email",
    value: "ranjeetchandrasekaran.ml@gmail.com",
    href: "mailto:ranjeetchandrasekaran.ml@gmail.com",
    icon: <Mail size={20} />,
    accent: "var(--accent-lime)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com",
    href: "https://www.linkedin.com/in/ranjeet-c3102",
    icon: <FaLinkedinIn size={20} />,
    accent: "var(--accent-lime)",
  },
  {
    label: "GitHub",
    value: "github.com",
    href: "https://github.com/ranjeet3102",
    icon: <FiGithub size={20} />,
    accent: "var(--accent-lime)",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_rtsazz4",
        "template_2geiv6m",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "2UZg-oYWTzFbSkzNY"
      )
      .then(() => {
        setSent(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setSending(false);
        
        // Hide the success message after 5 seconds and show the form again
        setTimeout(() => {
          setSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0 80px",
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent */}
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
      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(208,255,0,0.05) 0%, transparent 70%)",
          bottom: "-20%",
          right: "-15%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div className="contact-container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "72px" }}>
            <span className="section-label">06 — Contact</span>
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
              Let&apos;s build something
              <br />
              <span className="text-gradient">extraordinary.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "64px",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Social Links */}
          <ScrollReveal direction="left" className="contact-social-wrapper">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  marginBottom: "8px",
                }}
              >
                Have a project in mind? Interested in collaboration or just want
                to say hello? My inbox is always open.
              </p>

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="contact-social-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px 24px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${social.accent}45`;
                    (e.currentTarget as HTMLAnchorElement).style.background = `${social.accent}07`;
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(6px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${social.accent}12`,
                      border: `1px solid ${social.accent}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: social.accent,
                      flexShrink: 0,
                    }}
                  >
                    {social.icon}
                  </div>
                  <div style={{ flex: 1, overflow: "hidden", minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                      }}
                    >
                      {social.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {social.value}
                    </div>
                  </div>
                  <ArrowRight size={16} color="var(--text-muted)" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.15}>
            <div
              className="glass gradient-border contact-form-box"
              style={{
                padding: "40px",
                borderRadius: "28px",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "rgba(208,255,0,0.08)",
                      border: "2px solid rgba(208,255,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      color: "var(--accent-lime)",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--accent-lime)",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="luxury-input"
                      placeholder="Ranjeet"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="luxury-input"
                      placeholder="ranjeet@gmail.com"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="luxury-input"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                    style={{
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      opacity: sending ? 0.7 : 1,
                      cursor: sending ? "not-allowed" : "pointer",
                    }}
                  >
                    {sending ? (
                      <>Sending…</>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            © 2026.
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--accent-lime)",
              letterSpacing: "-0.01em",
            }}
          >
            R.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-container {
            padding: 0 20px !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-social-wrapper {
            min-width: 0 !important;
            overflow: hidden !important;
          }
          .contact-form-box {
            padding: 24px !important;
          }
          .contact-social-link {
            padding: 16px !important;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
}
