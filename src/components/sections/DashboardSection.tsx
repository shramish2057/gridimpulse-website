"use client";

import { useReveal } from "@/lib/useReveal";

export default function DashboardSection() {
  const sectionRef = useReveal();

  return (
    <section id="dashboard" className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80"
          alt="Control room displays"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-grid-dark/92" />
      </div>

      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-grid-green" />
            <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Platform</span>
            <div className="w-8 h-px bg-grid-green" />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl text-grid-text mb-4">
            Built for the <span className="text-grid-green">control room</span>
          </h2>
          <p className="text-grid-text-dim max-w-2xl mx-auto">
            Not another dashboard that just shows data. Grid Impulse acts. Every panel shows live agent state, pending decisions, and autonomous recommendations.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="dashboard-glow rounded-xl overflow-hidden border border-grid-border bg-grid-surface max-w-5xl mx-auto">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-grid-dark border-b border-grid-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs font-mono text-grid-text-dim">app.gridimpulse.com</span>
            <div className="w-16" />
          </div>

          {/* Dashboard content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 bg-grid-dark border-r border-grid-border p-3 hidden sm:block">
              <div className="mb-6 px-2">
                <img src="/images/logo-dark.svg" alt="Grid Impulse" className="h-5 w-auto" />
              </div>
              {["Dashboard", "Congestion", "Decisions", "Forecasting", "Topology"].map((item, i) => (
                <div key={i} className={`px-3 py-1.5 rounded text-xs mb-0.5 ${i === 0 ? "bg-grid-green/10 text-grid-green" : "text-grid-text-dim"}`}>
                  {item}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-grid-border">
                {["Users", "Audit Log"].map((item, i) => (
                  <div key={i} className="px-3 py-1.5 text-xs text-grid-text-dim mb-0.5">{item}</div>
                ))}
              </div>
            </div>

            {/* Main area */}
            <div className="flex-1 p-4">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-sm text-grid-text">Operator Dashboard</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-grid-green animate-pulse" />
                  <span className="text-[10px] font-mono text-grid-green">LIVE</span>
                </div>
              </div>

              {/* Status row */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { label: "Grid Status", value: "NORMAL", color: "text-grid-green" },
                  { label: "Frequency", value: "50.01 Hz", color: "text-grid-text" },
                  { label: "Active Alerts", value: "2", color: "text-grid-amber" },
                  { label: "Pending", value: "4", color: "text-grid-amber" },
                ].map((item, i) => (
                  <div key={i} className="p-2.5 rounded border border-grid-border bg-grid-dark">
                    <span className="block text-[9px] text-grid-text-dim mb-1">{item.label}</span>
                    <span className={`block text-sm font-mono font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Congestion panel */}
                <div className="p-3 rounded border border-grid-border bg-grid-dark">
                  <h4 className="text-[10px] font-mono text-grid-text-dim tracking-wider mb-2">CONGESTION ZONES</h4>
                  {[
                    { zone: "DE_LU", severity: "HIGH", loading: "92%", color: "bg-orange-500" },
                    { zone: "NL", severity: "MEDIUM", loading: "78%", color: "bg-yellow-500" },
                    { zone: "BE", severity: "NONE", loading: "45%", color: "bg-grid-green" },
                    { zone: "FR", severity: "LOW", loading: "62%", color: "bg-grid-green" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-grid-border/50 last:border-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                        <span className="text-[11px] font-mono text-grid-text">{item.zone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-grid-text-dim">{item.loading}</span>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          item.severity === "HIGH" ? "text-orange-400 bg-orange-500/10" :
                          item.severity === "MEDIUM" ? "text-yellow-400 bg-yellow-500/10" :
                          item.severity === "LOW" ? "text-grid-green bg-grid-green/10" :
                          "text-grid-text-dim bg-grid-border/30"
                        }`}>{item.severity}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decisions panel */}
                <div className="p-3 rounded border border-grid-border bg-grid-dark">
                  <h4 className="text-[10px] font-mono text-grid-text-dim tracking-wider mb-2">AGENT DECISIONS</h4>
                  {[
                    { type: "REDISPATCH", zone: "DE_LU", status: "PENDING", conf: "87%" },
                    { type: "FAULT_ALERT", zone: "NL", status: "APPROVED", conf: "94%" },
                    { type: "REDISPATCH", zone: "DE_LU", status: "PENDING", conf: "82%" },
                    { type: "FORECAST", zone: "BE", status: "EXECUTED", conf: "91%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-grid-border/50 last:border-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-sm ${
                          item.status === "PENDING" ? "bg-yellow-500" :
                          item.status === "APPROVED" ? "bg-grid-green" :
                          "bg-grid-green"
                        }`} />
                        <span className="text-[10px] font-mono text-grid-text-dim">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-grid-text-dim">{item.zone}</span>
                        <span className="text-[10px] font-mono text-grid-green">{item.conf}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
