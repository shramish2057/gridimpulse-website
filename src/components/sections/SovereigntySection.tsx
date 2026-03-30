"use client";

import { useReveal } from "@/lib/useReveal";

const guarantees = [
  "All grid telemetry stays within your deployment region",
  "No measurement data transmitted to external services",
  "PostgreSQL, Redis, and Kafka run in-region (managed or self-hosted)",
  "Append-only audit trail for EU AI Act Article 12 compliance",
  "Air-gapped deployment option: zero external connectivity required",
  "RBAC with five roles: Viewer, Operator, Supervisor, Engineer, Admin",
];

export default function SovereigntySection() {
  const sectionRef = useReveal();

  return (
    <section id="sovereignty" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Data centre corridor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-grid-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-l from-grid-dark via-grid-dark/80 to-grid-dark" />
      </div>

      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-grid-green" />
              <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Data Sovereignty</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-grid-text mb-6 leading-tight">
              Your grid data{" "}
              <span className="text-grid-green text-glow">never leaves</span>{" "}
              your region
            </h2>

            <p className="text-grid-text-dim mb-10 leading-relaxed">
              Grid Impulse is designed for critical infrastructure environments where data sovereignty is non-negotiable. Every deployment guarantees regional data residency with no exceptions.
            </p>

            <ul className="space-y-3">
              {guarantees.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 mt-0.5 shrink-0" fill="none">
                    <path d="M3 8 L6.5 11.5 L13 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-grid-text-dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: map visualization */}
          <div className="relative">
            <div className="p-8 rounded-xl border border-grid-border bg-grid-surface/50 backdrop-blur-sm">
              {/* Simplified Europe map with data centre markers */}
              <svg viewBox="0 0 400 320" fill="none" className="w-full">
                {/* Simplified country outlines */}
                <path d="M120 80 L160 60 L200 50 L240 55 L260 70 L280 65 L300 80 L310 100 L290 120 L300 140 L280 160 L260 180 L240 190 L220 180 L200 190 L180 200 L160 190 L140 180 L120 160 L110 140 L100 120 L110 100 Z"
                  stroke="#16A34A" strokeWidth="0.8" opacity="0.15" fill="rgba(22,163,74,0.02)" />

                {/* Country labels */}
                <text x="175" y="115" fontSize="11" fill="#16A34A" opacity="0.25" fontFamily="monospace">DE</text>
                <text x="145" y="145" fontSize="9" fill="#16A34A" opacity="0.2" fontFamily="monospace">FR</text>
                <text x="185" y="85" fontSize="9" fill="#16A34A" opacity="0.2" fontFamily="monospace">NL</text>
                <text x="205" y="105" fontSize="9" fill="#16A34A" opacity="0.2" fontFamily="monospace">BE</text>

                {/* Frankfurt data centre */}
                <circle cx="195" cy="120" r="20" fill="rgba(22,163,74,0.06)" stroke="#16A34A" strokeWidth="0.5" strokeDasharray="3 2">
                  <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="195" cy="120" r="4" fill="#16A34A">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="195" y="150" textAnchor="middle" fontSize="10" fill="#16A34A" fontFamily="monospace" fontWeight="bold">Frankfurt</text>
                <text x="195" y="162" textAnchor="middle" fontSize="8" fill="#8899aa" fontFamily="monospace">eu-central-1</text>

                {/* Amsterdam data centre */}
                <circle cx="180" cy="75" r="20" fill="rgba(22,163,74,0.06)" stroke="#16A34A" strokeWidth="0.5" strokeDasharray="3 2">
                  <animate attributeName="r" values="18;22;18" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="75" r="4" fill="#16A34A">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>
                <text x="180" y="58" textAnchor="middle" fontSize="10" fill="#16A34A" fontFamily="monospace" fontWeight="bold">Amsterdam</text>
                <text x="180" y="48" textAnchor="middle" fontSize="8" fill="#8899aa" fontFamily="monospace">eu-west-1</text>

                {/* Connection line between DCs */}
                <line x1="180" y1="75" x2="195" y2="120" stroke="#16A34A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>

                {/* Shield icon */}
                <g transform="translate(280, 200)">
                  <path d="M0 -20 L18 -12 L18 6 C18 18 0 26 0 26 C0 26 -18 18 -18 6 L-18 -12 Z"
                    stroke="#16A34A" strokeWidth="1.5" fill="rgba(22,163,74,0.05)" />
                  <path d="M-5 2 L-1 6 L7 -4" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <text x="280" y="234" textAnchor="middle" fontSize="8" fill="#8899aa" fontFamily="monospace">DATA RESIDENCY</text>
                <text x="280" y="244" textAnchor="middle" fontSize="8" fill="#8899aa" fontFamily="monospace">GUARANTEED</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
