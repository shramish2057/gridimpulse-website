"use client";

import { useEffect, useState } from "react";

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
        <a href="#" className="flex items-center group">
          <img src="/images/logo-dark.svg" alt="Grid Impulse" className="h-8 w-auto" />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-grid-text-dim hover:text-grid-text transition-colors">Problem</a>
          <a href="#features" className="text-sm text-grid-text-dim hover:text-grid-text transition-colors">Features</a>
          <a href="#dashboard" className="text-sm text-grid-text-dim hover:text-grid-text transition-colors">Platform</a>
          <a href="#sovereignty" className="text-sm text-grid-text-dim hover:text-grid-text transition-colors">Security</a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-5 py-2 bg-grid-green text-grid-dark font-display font-semibold text-sm rounded hover:bg-grid-green/90 transition-colors"
        >
          Request Demo
        </a>
      </div>
    </nav>
  );
}
