"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-grid-green" />
            <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Contact</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl text-grid-text tracking-wider mb-16">
            GET IN TOUCH
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Request a Demo */}
            <div>
              <h2 className="font-display font-bold text-2xl text-grid-text mb-4">Request a Demo</h2>
              <p className="text-grid-text-dim leading-relaxed mb-8">
                We offer personalised demos configured for your grid profile: TSO, DSO, or
                municipal utility. Bring your technical team. We will show you the platform on a
                network topology that matches your environment.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const org = (form.elements.namedItem("organisation") as HTMLInputElement).value;
                  const role = (form.elements.namedItem("role") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const type = (form.elements.namedItem("type") as HTMLSelectElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  const subject = encodeURIComponent(`Demo Request from ${name} (${org})`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nOrganisation: ${org}\nRole: ${role}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message || "N/A"}`
                  );
                  window.location.href = `mailto:contact@gridimpulse.com?subject=${subject}&body=${body}`;
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-grid-text-dim tracking-wider mb-1.5">NAME</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text placeholder-grid-text-dim focus:outline-none focus:border-grid-green/50 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-xs font-mono text-grid-text-dim tracking-wider mb-1.5">ORGANISATION</label>
                  <input
                    id="organisation"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text placeholder-grid-text-dim focus:outline-none focus:border-grid-green/50 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-xs font-mono text-grid-text-dim tracking-wider mb-1.5">ROLE</label>
                  <input
                    id="role"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text placeholder-grid-text-dim focus:outline-none focus:border-grid-green/50 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-grid-text-dim tracking-wider mb-1.5">EMAIL</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text placeholder-grid-text-dim focus:outline-none focus:border-grid-green/50 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-xs font-mono text-grid-text-dim tracking-wider mb-1.5">I AM A</label>
                  <select
                    id="type"
                    required
                    className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text focus:outline-none focus:border-grid-green/50 transition-colors font-mono"
                  >
                    <option value="">Select...</option>
                    <option value="tso">TSO</option>
                    <option value="dso">DSO</option>
                    <option value="stadtwerk">Stadtwerk</option>
                    <option value="investor">Investor</option>
                    <option value="researcher">Researcher</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-grid-text-dim tracking-wider mb-1.5">MESSAGE (OPTIONAL)</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-grid-surface border border-grid-border rounded text-sm text-grid-text placeholder-grid-text-dim focus:outline-none focus:border-grid-green/50 transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-grid-green text-grid-dark font-display font-semibold text-sm tracking-wider rounded hover:bg-grid-green/90 transition-all hover:shadow-[0_0_30px_rgba(22,163,74,0.3)] uppercase"
                >
                  Send Request
                </button>

                <p className="text-xs text-grid-text-dim text-center">
                  We respond within 1 business day.
                </p>
              </form>
            </div>

            {/* Direct contact */}
            <div>
              <h2 className="font-display font-bold text-2xl text-grid-text mb-8">Direct Contact</h2>

              <div className="space-y-8">
                <div className="p-6 rounded-xl border border-grid-border bg-grid-surface/30">
                  <h3 className="text-xs font-mono text-grid-text-dim tracking-wider mb-2">EMAIL</h3>
                  <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline font-mono text-sm">
                    contact@gridimpulse.com
                  </a>
                </div>

                <div className="p-6 rounded-xl border border-grid-border bg-grid-surface/30">
                  <h3 className="text-xs font-mono text-grid-text-dim tracking-wider mb-2">LOCATION</h3>
                  <p className="text-grid-text text-sm">Frankfurt, Germany</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
