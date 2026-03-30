"use client";

import { useEffect, useState } from "react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-grid-dark/90 backdrop-blur-xl border-b border-grid-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <img src="/images/logo-dark.svg" alt="Grid Impulse" className="h-8 w-auto" />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Problem", id: "problem" },
            { label: "Features", id: "features" },
            { label: "Platform", id: "dashboard" },
            { label: "Security", id: "sovereignty" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-grid-text-dim hover:text-grid-text transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="px-5 py-2 bg-grid-green text-grid-dark font-display font-semibold text-sm rounded hover:bg-grid-green/90 transition-colors cursor-pointer"
        >
          Request Demo
        </button>
      </div>
    </nav>
  );
}
