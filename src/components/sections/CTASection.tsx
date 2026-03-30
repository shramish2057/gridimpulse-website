"use client";

import { useReveal } from "@/lib/useReveal";

export default function CTASection() {
  const sectionRef = useReveal();

  return (
    <section id="contact" className="relative py-32 grid-bg noise-overlay">
      <div ref={sectionRef} className="reveal relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-grid-green/40" />
          <div className="w-3 h-3 rounded-full border border-grid-green/40 mx-3" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-grid-green/40" />
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-grid-text mb-6">
          Ready to make your grid{" "}
          <span className="text-grid-green text-glow">autonomous</span>?
        </h2>

        <p className="text-grid-text-dim mb-10 max-w-xl mx-auto leading-relaxed">
          Built for TSOs, DSOs, and municipal utilities across Germany, Netherlands, Belgium, and France. Get a personalized demo with your grid profile.
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-6"
        >
          <input
            type="email"
            placeholder="your.name@utility.eu"
            className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text placeholder-grid-text-dim focus:outline-none focus:border-grid-green/50 transition-colors font-mono"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-grid-green text-grid-dark font-display font-semibold text-sm rounded hover:bg-grid-green/90 transition-all hover:shadow-[0_0_30px_rgba(22,163,74,0.3)] whitespace-nowrap"
          >
            Request Demo
          </button>
        </form>

        <p className="text-xs text-grid-text-dim">
          Or email us directly at{" "}
          <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
            contact@gridimpulse.com
          </a>
        </p>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-grid-text-dim">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
              <path d="M3 8 L6.5 11.5 L13 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
            </svg>
            EU AI Act compliant
          </span>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
              <path d="M3 8 L6.5 11.5 L13 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Regional data residency
          </span>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
              <path d="M3 8 L6.5 11.5 L13 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
            </svg>
            On-premise deployment
          </span>
        </div>
      </div>
    </section>
  );
}
