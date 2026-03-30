import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About | Grid Impulse",
  description: "Grid Impulse is building autonomous AI agents for Europe's electricity grid operators.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-grid-green" />
            <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Company</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl text-grid-text tracking-wider mb-12">
            ABOUT GRID IMPULSE
          </h1>

          {/* Mission */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl text-grid-text mb-6">Mission</h2>
            <div className="space-y-6 text-grid-text-dim leading-relaxed">
              <p>
                Grid Impulse is building autonomous AI agents for Europe&apos;s electricity grid operators.
                Our mission is to give every DSO and Stadtwerk the same operational intelligence that only
                the largest TSOs can currently afford. Deployed on their infrastructure, under their control.
              </p>
              <p>
                Founded in 2026 in Frankfurt, Germany. Built by engineers who believe the energy transition
                requires not just new generation capacity, but fundamentally smarter grid operations.
              </p>
            </div>
          </div>

          {/* Hiring */}
          <div className="p-8 rounded-xl border border-grid-border bg-grid-surface/30">
            <h2 className="font-display font-bold text-2xl text-grid-text mb-6">Build with us</h2>
            <p className="text-grid-text-dim leading-relaxed mb-4">
              We are looking for people who care about the energy transition and want to
              solve hard problems at the intersection of AI and critical infrastructure.
              If you have deep expertise in power systems, grid operations, or EU energy
              regulation, we would love to hear from you at{" "}
              <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
                contact@gridimpulse.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
