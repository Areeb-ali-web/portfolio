"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { FloatingCard } from "../ui/FloatingCard";

const styles = `
  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr !important;
      gap: 24px !important;
    }
    
    .contact-info-card {
      order: 2;
    }
    
    .contact-form-card {
      order: 1;
    }
    
    .contact-header {
      font-size: 28px !important;
    }
    
    .contact-subtitle {
      font-size: 14px !important;
    }
  }
  
  @media (max-width: 480px) {
    .contact-container {
      padding: 0 16px !important;
    }
    
    .contact-info-item {
      flex-wrap: wrap;
      gap: 8px !important;
    }
    
    .contact-info-icon {
      width: 24px !important;
      font-size: 16px !important;
    }
    
    .contact-value {
      font-size: 12px !important;
      word-break: break-all;
    }
    
    .contact-label {
      font-size: 10px !important;
    }
    
    .submit-button {
      font-size: 14px !important;
      padding: 10px !important;
    }
    
    .availability-text {
      font-size: 12px !important;
    }
  }
  
  input:hover, textarea:hover {
    border-color: rgba(124, 58, 237, 0.4) !important;
  }
  
  input:focus, textarea:focus {
    border-color: #7c3aed !important;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1) !important;
  }
  
  button {
    position: relative;
    overflow: hidden;
  }
  
  button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  button:hover::before {
    width: 300px;
    height: 300px;
  }
  
  button:active {
    transform: scale(0.98);
  }
`;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" style={{ background: "transparent" }}>
      <style>{styles}</style>
      <div className="contact-container" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader 
          eyebrow="Get In Touch" 
          title="Let's Work Together" 
          subtitle="Open to internship, freelance projects, and full-time opportunities" 
        />

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {/* Left Column - Contact Info */}
          <div className="contact-info-card">
            <FloatingCard style={{ marginBottom: 20 }} glowColor="rgba(124,58,237,0.2)">
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(18px, 4vw, 20px)", marginBottom: 16 }}>Contact Info</h3>
              {[
                { icon: "📧", label: "Email", value: "aareeb273@gmail.com", href: "mailto:aareeb273@gmail.com" },
                { icon: "📱", label: "Phone", value: "0326-2642271", href: "tel:+923262642271" },
                { icon: "📍", label: "Location", value: "Davis Road, Lahore, Pakistan", href: null },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/areeb-ali", href: "https://www.linkedin.com/in/areeb-ali-93a450383/" },
                { icon: "⌨️", label: "GitHub", value: "github.com/Areeb-ali-web", href: "https://github.com/Areeb-ali-web" },
              ].map((item) => (
                <div 
                  key={item.label} 
                  className="contact-info-item"
                  style={{ 
                    display: "flex", 
                    gap: "clamp(8px, 3vw, 12px)", 
                    alignItems: "center", 
                    marginBottom: 14,
                    flexWrap: "wrap"
                  }}
                >
                  <span className="contact-info-icon" style={{ fontSize: "clamp(16px, 4vw, 18px)", width: 28 }}>{item.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="contact-label" style={{ color: "#64748b", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-value"
                        style={{ 
                          color: "#a78bfa", 
                          fontSize: "clamp(12px, 3vw, 14px)", 
                          textDecoration: "none", 
                          fontWeight: 500,
                          display: "inline-block",
                          wordBreak: "break-word",
                          transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#c4b5fd"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#a78bfa"}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value" style={{ color: "#94a3b8", fontSize: "clamp(12px, 3vw, 14px)", wordBreak: "break-word" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </FloatingCard>

            <FloatingCard glowColor="rgba(52,211,153,0.15)">
              <div style={{ display: "flex", gap: "clamp(10px, 3vw, 14px)", alignItems: "flex-start", flexDirection: window.innerWidth < 480 ? "column" : "row" }}>
                <span style={{ fontSize: "clamp(20px, 5vw, 24px)" }}>🟢</span>
                <div>
                  <h4 style={{ color: "#34d399", fontWeight: 700, fontSize: "clamp(14px, 4vw, 16px)", margin: 0 }}>Available for opportunities</h4>
                  <p className="availability-text" style={{ color: "#64748b", fontSize: "clamp(12px, 3vw, 13px)", marginTop: 6, lineHeight: 1.6 }}>
                    Looking for internships and junior developer roles. Quick learner with hands-on experience in production apps.
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-card">
            <FloatingCard glowColor="rgba(96,165,250,0.15)">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "clamp(30px, 8vw, 40px) clamp(20px, 5vw, 0)" }}>
                  <div style={{ fontSize: "clamp(40px, 10vw, 48px)", marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#34d399", fontWeight: 700, fontSize: "clamp(18px, 5vw, 20px)", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "#64748b", fontSize: "clamp(12px, 3vw, 14px)" }}>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(16px, 4vw, 18px)", marginBottom: 20 }}>Send a Message</h3>
                  {[
                    { key: "name", label: "Your Name", type: "text", placeholder: "John Doe", name: "name" },
                    { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com", name: "email" },
                  ].map((field) => (
                    <div key={field.key} style={{ marginBottom: 16 }}>
                      <label style={{ color: "#94a3b8", fontSize: "clamp(10px, 3vw, 12px)", fontWeight: 600, letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>
                        {field.label.toUpperCase()}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 10,
                          padding: "clamp(8px, 3vw, 10px) clamp(10px, 3vw, 14px)",
                          color: "#fff",
                          fontSize: "clamp(12px, 3vw, 14px)",
                          outline: "none",
                          boxSizing: "border-box",
                          transition: "all 0.2s",
                        }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ color: "#94a3b8", fontSize: "clamp(10px, 3vw, 12px)", fontWeight: 600, letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>MESSAGE</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      value={form.message}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 10,
                        padding: "clamp(8px, 3vw, 10px) clamp(10px, 3vw, 14px)",
                        color: "#fff",
                        fontSize: "clamp(12px, 3vw, 14px)",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-button"
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                      border: "none",
                      color: "#fff",
                      padding: "clamp(10px, 3vw, 12px)",
                      borderRadius: 12,
                      fontSize: "clamp(13px, 3vw, 15px)",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 8px 30px rgba(124,58,237,0.4)",
                      transition: "all 0.2s",
                    }}
                  >
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

export default Contact;