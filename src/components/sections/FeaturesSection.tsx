"use client";

import { useReveal } from "@/lib/useReveal";

const features = [
  {
    title: "Fault Detection",
    metric: "60-second cycles",
    description: "Detects voltage sags, frequency deviations, overcurrent conditions, and rate-of-change-of-frequency anomalies across every monitored bus.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M8 24 L14 14 L18 18 L24 8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="8" r="2.5" fill="#c44040" />
        <path d="M4 28 L28 28" stroke="#16A34A" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Congestion Management",
    metric: "Redispatch optimization",
    description: "N-1 security assessment with DC power flow analysis. Generates redispatch recommendations with cost estimates in EUR/MWh using BNetzA reference rates.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="#16A34A" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#16A34A" strokeWidth="0.5" opacity="0.3" />
        <line x1="4" y1="20" x2="28" y2="20" stroke="#16A34A" strokeWidth="0.5" opacity="0.3" />
        <line x1="12" y1="4" x2="12" y2="28" stroke="#16A34A" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="4" x2="20" y2="28" stroke="#16A34A" strokeWidth="0.5" opacity="0.3" />
        <rect x="13" y="13" width="6" height="6" fill="#d4a044" opacity="0.6" rx="1" />
        <rect x="21" y="5" width="6" height="6" fill="#c44040" opacity="0.4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Load Forecasting",
    metric: "MAPE below 3%",
    description: "LightGBM ensemble with Optuna hyperparameter tuning. Quantile regression provides confidence intervals at 10th, 50th, and 90th percentiles across four forecast horizons.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M4 26 C8 26 10 20 14 18 C18 16 20 22 24 14 C26 10 27 8 28 6" stroke="#16A34A" strokeWidth="1.5" fill="none" />
        <path d="M4 26 C8 26 10 22 14 20 C18 18 20 24 24 18 C26 14 27 12 28 10" stroke="#16A34A" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" fill="none" />
        <circle cx="14" cy="18" r="2" fill="#16A34A" />
      </svg>
    ),
  },
  {
    title: "Real-time Topology",
    metric: "Neo4j graph with CIM import",
    description: "IEC 61970 Common Information Model topology imported into a Neo4j graph database. Breaker state tracking, connectivity analysis, and island detection in real time.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="8" r="3" stroke="#16A34A" strokeWidth="1.5" />
        <circle cx="8" cy="24" r="3" stroke="#16A34A" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" stroke="#16A34A" strokeWidth="1.5" />
        <line x1="14" y1="10.5" x2="9.5" y2="21.5" stroke="#16A34A" strokeWidth="1" />
        <line x1="18" y1="10.5" x2="22.5" y2="21.5" stroke="#16A34A" strokeWidth="1" />
        <line x1="11" y1="24" x2="21" y2="24" stroke="#16A34A" strokeWidth="1" />
        <circle cx="16" cy="8" r="1.5" fill="#16A34A" />
      </svg>
    ),
  },
  {
    title: "Multi-Protocol Ingestion",
    metric: "PMU, SCADA, IEC 61850",
    description: "Native support for IEEE C37.118 synchrophasors, OPC-UA data subscriptions, IEC 61850 GOOSE messages, and ENTSO-E Transparency Platform APIs.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M4 10 L16 4 L28 10 L16 16 Z" stroke="#16A34A" strokeWidth="1.5" fill="none" />
        <path d="M4 16 L16 22 L28 16" stroke="#16A34A" strokeWidth="1.5" fill="none" />
        <path d="M4 22 L16 28 L28 22" stroke="#16A34A" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="4" r="1.5" fill="#16A34A" />
      </svg>
    ),
  },
  {
    title: "EU AI Act Compliance",
    metric: "Article 12 audit trail",
    description: "Append-only audit log captures every agent decision, operator approval, and system event with full reasoning, confidence scores, and IP addresses. Non-repudiable and immutable.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#16A34A" strokeWidth="1.5" />
        <path d="M11 11 L21 11" stroke="#16A34A" strokeWidth="1" opacity="0.5" />
        <path d="M11 15 L21 15" stroke="#16A34A" strokeWidth="1" opacity="0.5" />
        <path d="M11 19 L17 19" stroke="#16A34A" strokeWidth="1" opacity="0.5" />
        <path d="M13 23 L16 26 L22 20" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const sectionRef = useReveal();

  return (
    <section id="features" className="relative py-32">
      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-grid-green" />
          <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Capabilities</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-grid-text max-w-3xl mb-20">
          Five agents. One{" "}
          <span className="text-grid-green">autonomous</span> control plane.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} visible group relative p-8 rounded-xl border border-grid-border bg-grid-surface/30 hover:border-grid-green/30 hover:bg-grid-surface/60 transition-all duration-500`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px rgba(22, 163, 74, 0.03), 0 0 40px rgba(22, 163, 74, 0.05)" }} />

              <div className="relative z-10">
                <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">{feature.icon}</div>
                <h3 className="font-display font-bold text-lg text-grid-text mb-1">{feature.title}</h3>
                <span className="inline-block text-xs font-mono text-grid-green tracking-wider mb-4">{feature.metric}</span>
                <p className="text-sm text-grid-text-dim leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
