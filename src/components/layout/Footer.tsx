export default function Footer() {
  return (
    <footer className="border-t border-grid-border bg-grid-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/images/logo-dark.svg" alt="Grid Impulse" className="h-7 w-auto" />
            </div>
            <p className="text-xs text-grid-text-dim leading-relaxed">
              Autonomous intelligence for Europe&apos;s energy grid. AI agents that detect, decide, and act in real time.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-widest text-grid-text mb-4 uppercase">Platform</h4>
            <ul className="space-y-2">
              {["Fault Detection", "Congestion Management", "Load Forecasting", "Topology Monitoring", "Decision Workflow"].map((item) => (
                <li key={item}>
                  <a href="#features" className="text-xs text-grid-text-dim hover:text-grid-green transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-widest text-grid-text mb-4 uppercase">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Documentation", href: "https://docs.gridimpulse.com" },
                { label: "API Reference", href: "https://docs.gridimpulse.com/api-reference" },
                { label: "GitHub", href: "https://github.com/shramish2057/gridimpulse" },
                { label: "Status", href: "https://status.gridimpulse.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-xs text-grid-text-dim hover:text-grid-green transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-widest text-grid-text mb-4 uppercase">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Imprint", href: "/imprint" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-xs text-grid-text-dim hover:text-grid-green transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-grid-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-grid-text-dim">
            &copy; {new Date().getFullYear()} Grid Impulse UG (in Gr&uuml;ndung). All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/gridimpulse" className="text-grid-text-dim hover:text-grid-green transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/shramish2057/gridimpulse" className="text-grid-text-dim hover:text-grid-green transition-colors" aria-label="GitHub">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
