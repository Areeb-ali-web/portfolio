"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { FloatingCard } from "../ui/FloatingCard";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "aareeb273@gmail.com",
      href: "mailto:aareeb273@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "0326-2642271",
      href: "tel:+923262642271",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Davis Road, Lahore, Pakistan",
      href: null,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/areeb-ali",
      href: "https://www.linkedin.com/in/areeb-ali-93a450383/",
    },
    {
      icon: "⌨️",
      label: "GitHub",
      value: "github.com/Areeb-ali-web",
      href: "https://github.com/Areeb-ali-web",
    },
  ];

  return (
    <Section id="contact" style={{ background: "transparent" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Open to internship, freelance projects, and full-time opportunities"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
          }}
          className="contact-grid"
        >
          {/* LEFT SIDE */}
          <div>
            <FloatingCard style={{ marginBottom: 20 }}>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 16,
                }}
              >
                Contact Info
              </h3>

              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    marginBottom: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: 18, width: 28 }}>
                    {item.icon}
                  </span>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#a78bfa",
                          textDecoration: "none",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: 14 }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </FloatingCard>

            <FloatingCard glowColor="rgba(52,211,153,0.15)">
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 22 }}>🟢</span>

                <div>
                  <h4
                    style={{
                      color: "#34d399",
                      fontWeight: 700,
                      fontSize: 16,
                      margin: 0,
                    }}
                  >
                    Available for opportunities
                  </h4>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 13,
                      marginTop: 6,
                      lineHeight: 1.6,
                    }}
                  >
                    Looking for internships and junior developer roles. Quick
                    learner with hands-on experience in production apps.
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <FloatingCard>
              {submitted ? (
                <div style={{ textAlign: "center", padding: 40 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#34d399" }}>Message Sent!</h3>
                  <p style={{ color: "#64748b" }}>
                    Thanks for reaching out. I’ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: "#fff", marginBottom: 20 }}>
                    Send a Message
                  </h3>

                  <input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  />

                  <input
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  />

                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    style={textareaStyle}
                  />

                  <button type="submit" style={buttonStyle}>
                    Send Message →
                  </button>
                </form>
              )}
            </FloatingCard>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Styles */
const inputStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: 12,
  padding: 10,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  padding: 10,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  marginBottom: 12,
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
  border: "none",
  color: "#fff",
  padding: 12,
  borderRadius: 12,
  fontWeight: 700,
  cursor: "pointer",
};