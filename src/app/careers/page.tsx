import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Careers | Grid Impulse",
  description: "Join Grid Impulse. We are building autonomous AI agents for European grid operators.",
};

const areas = [
  {
    title: "Engineering",
    description:
      "Power systems, machine learning, backend infrastructure. If you build things that work under real-world constraints, we want to talk.",
  },
  {
    title: "Energy Domain",
    description:
      "Grid operations, regulatory frameworks, IEC standards, market design. Help us make sure our agents understand how the grid actually works.",
  },
  {
    title: "Business",
    description:
      "Partnerships, customer conversations, go-to-market in the European energy sector. Help us reach the operators who need this most.",
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

          {/* Areas we hire in */}
          <h2 className="font-display font-bold text-2xl text-grid-text mb-8">Where you can contribute</h2>

          <div className="space-y-6 mb-16">
            {areas.map((area) => (
              <div key={area.title} className="p-8 rounded-xl border border-grid-border bg-grid-surface/30">
                <h3 className="font-display font-bold text-xl text-grid-text mb-3">{area.title}</h3>
                <p className="text-grid-text-dim leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-8 rounded-xl border border-grid-border bg-grid-surface/30 text-center">
            <p className="text-grid-text-dim leading-relaxed">
              We don&apos;t have formal job postings yet. If any of this resonates, email{" "}
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
