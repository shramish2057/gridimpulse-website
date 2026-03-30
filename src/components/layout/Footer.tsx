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
            {/* Email */}
            <a href="mailto:contact@gridimpulse.com" className="text-grid-text-dim hover:text-grid-green transition-colors" aria-label="Email">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
