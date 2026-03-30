"use client";

import { useReveal } from "@/lib/useReveal";

const steps = [
  {
    number: "01",
    title: "Observe",
    description: "Agents ingest real-time telemetry from PMUs, SCADA systems, and market data feeds. IEEE C37.118 synchrophasors, OPC-UA subscriptions, IEC 61850 GOOSE messages, and ENTSO-E transparency data flow through Apache Kafka into a unified measurement stream.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="24" cy="24" r="3" fill="#16A34A" />
        <circle cx="24" cy="10" r="2" fill="#16A34A" opacity="0.6" />
        <circle cx="36" cy="20" r="2" fill="#16A34A" opacity="0.6" />
        <circle cx="36" cy="32" r="2" fill="#16A34A" opacity="0.6" />
        <circle cx="12" cy="20" r="2" fill="#16A34A" opacity="0.6" />
        <circle cx="12" cy="32" r="2" fill="#16A34A" opacity="0.6" />
        <line x1="24" y1="12" x2="24" y2="21" stroke="#16A34A" strokeWidth="0.8" opacity="0.4" />
        <line x1="34" y1="21" x2="27" y2="23" stroke="#16A34A" strokeWidth="0.8" opacity="0.4" />
        <line x1="14" y1="21" x2="21" y2="23" stroke="#16A34A" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Decide",
    description: "Detection agents analyse grid state every 60 seconds. Fault detection flags voltage sags and frequency deviations. Congestion detection runs DC power flow and calculates redispatch recommendations. Load forecasting predicts demand across four horizons using LightGBM ensemble models.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#16A34A" strokeWidth="1.5" />
        <path d="M16 28 L20 22 L26 26 L32 16" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="16" r="2.5" fill="#16A34A" />
        <line x1="14" y1="34" x2="34" y2="34" stroke="#16A34A" strokeWidth="0.8" opacity="0.3" />
        <line x1="14" y1="30" x2="34" y2="30" stroke="#16A34A" strokeWidth="0.8" opacity="0.2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Act",
    description: "Every decision is published with full reasoning, confidence scores, and estimated impact in MW. In advisory mode, operators review and approve. In supervised mode, agents execute with human override. Every action is logged to an append-only audit trail for EU AI Act Article 12 compliance.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M12 36 L24 12 L36 36" stroke="#16A34A" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M18 28 L24 16 L30 28" stroke="#16A34A" strokeWidth="1" opacity="0.4" fill="none" />
        <circle cx="24" cy="12" r="2.5" fill="#16A34A" />
        <circle cx="12" cy="36" r="2" fill="#16A34A" opacity="0.6" />
        <circle cx="36" cy="36" r="2" fill="#16A34A" opacity="0.6" />
        <line x1="8" y1="40" x2="40" y2="40" stroke="#16A34A" strokeWidth="1" opacity="0.2" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const sectionRef = useReveal();

  return (
    <section id="how-it-works" className="relative py-32 grid-bg noise-overlay">
      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-grid-green" />
          <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">How It Works</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-grid-text max-w-2xl mb-20">
          From telemetry to action in{" "}
          <span className="text-grid-green">under 10 seconds</span>
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-grid-green/40 via-grid-green/20 to-grid-green/40" />
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-grid-green to-transparent animate-pulse" style={{ animationDuration: "3s" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} visible`}>
                <div className="relative p-8 rounded-xl border border-grid-border bg-grid-surface/50 hover:border-grid-green/30 transition-all duration-500 group">
                  {/* Step number */}
                  <span className="absolute -top-3 left-8 px-3 py-0.5 bg-grid-dark text-grid-green font-mono text-xs tracking-widest border border-grid-green/20 rounded">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.icon}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-grid-text mb-4">{step.title}</h3>
                  <p className="text-sm text-grid-text-dim leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
