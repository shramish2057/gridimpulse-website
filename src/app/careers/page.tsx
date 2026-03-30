import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Careers | Grid Impulse",
  description: "Join Grid Impulse — we are building autonomous AI agents for European grid operators.",
};

const roles = [
  {
    title: "Power Systems Engineer",
    type: "Part-time / Advisory",
    location: "Frankfurt or remote",
    description:
      "Deep expertise in TSO/DSO operations, IEC standards, or grid dynamics.",
    details:
      "You will validate agent decision logic against real grid physics, review congestion and fault detection thresholds, and advise on regulatory compliance.",
  },
  {
    title: "ML Engineer",
    type: "Full-time",
    location: "Frankfurt or remote",
    description:
      "Experience with time series forecasting, anomaly detection, or reinforcement learning for physical systems.",
    details:
      "You will work on the forecasting and detection agents \u2014 improving model accuracy, adding new signal sources, and building the feedback loop from operator decisions back into model training.",
  },
  {
    title: "Business Development",
    type: "Part-time",
    location: "Remote",
    description:
      "Network in the German or Dutch energy sector. DSO or Stadtwerk relationships a strong plus.",
    details:
      "You will drive early customer conversations, support PoC scoping, and help position Grid Impulse with the right operators at the right time.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-grid-green" />
            <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Careers</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl text-grid-text tracking-wider mb-8">
            JOIN GRID IMPULSE
          </h1>

          <p className="text-grid-text-dim leading-relaxed mb-16">
            Grid Impulse is an early-stage deep tech company building autonomous AI agents for European
            grid operators. We are a small team moving fast on a problem that matters. If you want to work
            on real infrastructure that affects millions of people, read on.
          </p>

          {/* Open roles */}
          <h2 className="font-display font-bold text-2xl text-grid-text mb-8">Open Roles</h2>

          <div className="space-y-6 mb-16">
            {roles.map((role) => (
              <div key={role.title} className="p-8 rounded-xl border border-grid-border bg-grid-surface/30">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-xl text-grid-text">{role.title}</h3>
                  <span className="px-2.5 py-0.5 text-xs font-mono text-grid-green bg-grid-green/10 border border-grid-green/20 rounded">
                    {role.type}
                  </span>
                </div>
                <p className="text-xs font-mono text-grid-text-dim tracking-wider mb-4">{role.location}</p>
                <p className="text-grid-text-dim leading-relaxed mb-3">{role.description}</p>
                <p className="text-sm text-grid-text-dim leading-relaxed">{role.details}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-8 rounded-xl border border-grid-border bg-grid-surface/30 text-center">
            <p className="text-grid-text-dim leading-relaxed">
              Don&apos;t see your role? Email{" "}
              <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
                contact@gridimpulse.com
              </a>{" "}
              with a note about what you would build.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
