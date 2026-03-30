"use client";

import GridCanvas from "./GridCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid topology background */}
      <GridCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-grid-dark/40 via-transparent to-grid-dark z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-grid-dark/60 via-transparent to-grid-dark/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-grid-green/20 bg-grid-green/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-grid-green animate-pulse" />
          <span className="text-xs font-mono text-grid-green tracking-wider">AUTONOMOUS GRID OPERATIONS</span>
        </div>

        {/* Wordmark */}
        <h1 className="mb-2">
          <span className="block font-display font-bold text-6xl sm:text-7xl md:text-8xl tracking-[0.15em] text-grid-text">
            GRID
          </span>
          <span className="block font-display font-normal text-6xl sm:text-7xl md:text-8xl tracking-[0.15em] text-grid-green text-glow">
            IMPULSE
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-grid-text-dim max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
          AI agents that detect faults, resolve congestion, and optimize renewable integration. In real time. With your operators always in control.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-grid-green text-grid-dark font-display font-semibold text-sm tracking-wider rounded hover:bg-grid-green/90 transition-all hover:shadow-[0_0_30px_rgba(22,163,74,0.3)] uppercase"
          >
            Request Demo
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 border border-grid-border text-grid-text-dim font-display font-medium text-sm tracking-wider rounded hover:border-grid-green/40 hover:text-grid-text transition-all uppercase"
          >
            How It Works
          </a>
        </div>

        {/* Target markets */}
        <div className="mt-16 flex items-center justify-center gap-6 text-grid-text-dim text-xs tracking-widest font-mono">
          <span>DE</span>
          <span className="w-1 h-1 rounded-full bg-grid-green/40" />
          <span>NL</span>
          <span className="w-1 h-1 rounded-full bg-grid-green/40" />
          <span>BE</span>
          <span className="w-1 h-1 rounded-full bg-grid-green/40" />
          <span>FR</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-grid-border flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-grid-green animate-bounce" />
        </div>
      </div>
    </section>
  );
}
