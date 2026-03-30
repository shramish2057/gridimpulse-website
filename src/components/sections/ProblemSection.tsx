"use client";

import { useCountUp, useReveal } from "@/lib/useReveal";

const stats = [
  { value: 3000, suffix: "+", label: "Hours of redispatch-relevant grid congestion in Germany (BNetzA, 2023)", prefix: "" },
  { value: 3100, suffix: "M", label: "Redispatch costs in Germany (BNetzA, 2023)", prefix: "€" },
  { value: 80, suffix: "%", label: "Renewable electricity target by 2030 (EEG 2023)", prefix: "" },
];

export default function ProblemSection() {
  const sectionRef = useReveal();

  return (
    <section id="problem" className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          alt="Power transmission lines at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-grid-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-grid-dark via-grid-dark/70 to-grid-dark" />
      </div>

      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-grid-green" />
          <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">The Problem</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-grid-text max-w-3xl mb-6 leading-tight">
          Europe&apos;s grids are under{" "}
          <span className="text-grid-green text-glow">unprecedented stress</span>
        </h2>

        <p className="text-lg text-grid-text-dim max-w-2xl mb-16 leading-relaxed">
          Renewable integration is accelerating faster than grid infrastructure can adapt. Manual congestion management costs billions. Operators are overwhelmed with data but starved of actionable intelligence.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, prefix, label, delay }: { value: number; suffix: string; prefix: string; label: string; delay: number }) {
  const countRef = useCountUp(value, 2000, prefix, suffix);

  return (
    <div className={`reveal reveal-delay-${delay + 1} visible p-8 rounded-lg border border-grid-border bg-grid-surface/80 backdrop-blur-sm`}>
      <span
        ref={countRef}
        className="block font-display font-bold text-5xl text-grid-green mb-3"
      >
        {prefix}0{suffix}
      </span>
      <span className="text-sm text-grid-text-dim leading-relaxed">{label}</span>
    </div>
  );
}
