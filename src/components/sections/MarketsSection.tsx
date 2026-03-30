"use client";

import { useReveal } from "@/lib/useReveal";

const markets = [
  { code: "DE", name: "Germany", flag: "\u{1F1E9}\u{1F1EA}", detail: "TSOs, DSOs, Stadtwerke" },
  { code: "NL", name: "Netherlands", flag: "\u{1F1F3}\u{1F1F1}", detail: "TenneT, regional DSOs" },
  { code: "BE", name: "Belgium", flag: "\u{1F1E7}\u{1F1EA}", detail: "Elia, Fluvius" },
  { code: "FR", name: "France", flag: "\u{1F1EB}\u{1F1F7}", detail: "RTE, Enedis" },
];

const deployments = [
  { title: "Self-Hosted", description: "On-premise Kubernetes. Full data sovereignty. Your cluster, your rules.", icon: "K8s" },
  { title: "Cloud (Frankfurt)", description: "Managed AWS/Azure in eu-central-1. Data never leaves Germany.", icon: "DE" },
  { title: "Cloud (Amsterdam)", description: "Managed AWS/Azure in eu-west-1. Data stays in the Netherlands.", icon: "NL" },
];

export default function MarketsSection() {
  const sectionRef = useReveal();

  return (
    <section className="relative py-32 grid-bg">
      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-grid-green" />
            <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Markets</span>
            <div className="w-8 h-px bg-grid-green" />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl text-grid-text mb-4">
            Built for Europe&apos;s <span className="text-grid-green">grid operators</span>
          </h2>
        </div>

        {/* Market flags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {markets.map((market, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} visible p-6 rounded-xl border border-grid-border bg-grid-surface/30 text-center hover:border-grid-green/30 transition-all`}
            >
              <span className="text-4xl mb-3 block">{market.flag}</span>
              <h3 className="font-display font-bold text-lg text-grid-text">{market.name}</h3>
              <p className="text-xs text-grid-text-dim mt-1">{market.detail}</p>
            </div>
          ))}
        </div>

        {/* Deployment modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deployments.map((dep, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} visible p-6 rounded-xl border border-grid-border bg-grid-surface/30`}>
              <div className="w-10 h-10 rounded-lg bg-grid-green/10 border border-grid-green/20 flex items-center justify-center mb-4">
                <span className="text-xs font-mono font-bold text-grid-green">{dep.icon}</span>
              </div>
              <h3 className="font-display font-bold text-base text-grid-text mb-2">{dep.title}</h3>
              <p className="text-sm text-grid-text-dim">{dep.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
