"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import Projects  from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#050508", minHeight: "100vh", fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#fff", overflowX: "hidden" }}>
      <Navbar active={activeSection} />
      <Hero />
      <LogoMarquee />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}