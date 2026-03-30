import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Impressum | Grid Impulse",
  description: "Legal notice (Impressum) for Grid Impulse UG (in Gründung).",
};

export default function ImprintPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-grid-green" />
            <span className="text-xs font-mono text-grid-green tracking-[4px] uppercase">Legal</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl text-grid-text tracking-wider mb-4">
            IMPRESSUM
          </h1>

          <p className="text-xs text-grid-text-dim mb-16 italic">
            This imprint will be updated with full legal details upon company registration.
          </p>

          {/* German version */}
          <div className="space-y-8 mb-20">
            <div>
              <h2 className="font-display font-bold text-2xl text-grid-text mb-6">
                Angaben gem&auml;&szlig; &sect; 5 TMG
              </h2>

              <div className="p-6 rounded-xl border border-grid-border bg-grid-surface/30 space-y-4 text-grid-text-dim leading-relaxed">
                <div>
                  <p className="text-grid-text font-display font-bold">Grid Impulse UG (in Gr&uuml;ndung)</p>
                  <p>[Stra&szlig;e und Hausnummer] <span className="text-grid-amber text-xs font-mono">TODO: fill in after UG registration</span></p>
                  <p>Frankfurt am Main, Deutschland</p>
                </div>

                <div>
                  <h3 className="text-sm font-display font-semibold text-grid-text mb-1">Kontakt:</h3>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
                      contact@gridimpulse.com
                    </a>
                  </p>
                  <p>Web: gridimpulse.com</p>
                </div>

                <div>
                  <h3 className="text-sm font-display font-semibold text-grid-text mb-1">Vertretungsberechtigte Person:</h3>
                  <p>[Name des Gr&uuml;nders] <span className="text-grid-amber text-xs font-mono">TODO: fill in after UG registration</span></p>
                </div>

                <div>
                  <h3 className="text-sm font-display font-semibold text-grid-text mb-1">Hinweis zur EU-Streitschlichtung:</h3>
                  <p>
                    Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-grid-green hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                    . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-20">
            <div className="flex-1 h-px bg-grid-border" />
            <span className="text-xs font-mono text-grid-text-dim tracking-widest">ENGLISH TRANSLATION</span>
            <div className="flex-1 h-px bg-grid-border" />
          </div>

          {/* English version */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-grid-text mb-6">
                Legal Notice (Imprint)
              </h2>

              <div className="p-6 rounded-xl border border-grid-border bg-grid-surface/30 space-y-4 text-grid-text-dim leading-relaxed">
                <div>
                  <p className="text-grid-text font-display font-bold">Grid Impulse UG (in Gr&uuml;ndung)</p>
                  <p>[Street address] <span className="text-grid-amber text-xs font-mono">TODO: fill in after UG registration</span></p>
                  <p>Frankfurt am Main, Germany</p>
                </div>

                <div>
                  <h3 className="text-sm font-display font-semibold text-grid-text mb-1">Contact:</h3>
                  <p>
                    Email:{" "}
                    <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
                      contact@gridimpulse.com
                    </a>
                  </p>
                  <p>Web: gridimpulse.com</p>
                </div>

                <div>
                  <h3 className="text-sm font-display font-semibold text-grid-text mb-1">Representative:</h3>
                  <p>[Founder name] <span className="text-grid-amber text-xs font-mono">TODO: fill in after UG registration</span></p>
                </div>

                <div>
                  <h3 className="text-sm font-display font-semibold text-grid-text mb-1">Note on EU dispute resolution:</h3>
                  <p>
                    The European Commission provides an online dispute resolution platform at{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-grid-green hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                    . We are neither obligated nor willing to participate in dispute resolution proceedings
                    before a consumer arbitration board.
                  </p>
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
