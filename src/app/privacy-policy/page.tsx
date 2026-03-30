import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Grid Impulse",
  description: "Privacy policy for Grid Impulse — how we handle your data.",
};

export default function PrivacyPolicyPage() {
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
            PRIVACY POLICY
          </h1>

          <p className="text-sm text-grid-text-dim mb-16 font-mono">Last updated: March 2026</p>

          <div className="space-y-12 text-grid-text-dim leading-relaxed">
            {/* Controller */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">1. Controller</h2>
              <p>
                The controller responsible for data processing on this website is:
              </p>
              <div className="mt-3 p-4 rounded border border-grid-border bg-grid-surface/30 text-sm font-mono">
                <p>Grid Impulse UG (in Gr&uuml;ndung)</p>
                <p>Frankfurt am Main, Germany</p>
                <p>
                  <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
                    contact@gridimpulse.com
                  </a>
                </p>
              </div>
            </section>

            {/* Data collected */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">2. What data we collect</h2>
              <p>
                We collect only the data you voluntarily provide through our contact form:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your organisation name</li>
                <li>Your role and organisation type</li>
                <li>Any message you choose to include</li>
              </ul>
              <p className="mt-4">
                We do not use tracking pixels, advertising cookies, or analytics services.
                This website uses only technically necessary session cookies required for
                the site to function. No data is collected automatically beyond what is
                strictly necessary for delivering the web page to your browser.
              </p>
            </section>

            {/* Legal basis */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">3. Legal basis</h2>
              <p>
                We process your data on the basis of Article 6(1)(b) GDPR &mdash; processing
                is necessary for the performance of pre-contractual measures. When you submit
                a demo request or inquiry, you are initiating a business conversation and we
                process your data to respond to that request.
              </p>
            </section>

            {/* Retention */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">4. How long we keep your data</h2>
              <p>
                Contact form submissions are retained for 24 months from the date of submission.
                After this period, your data is permanently deleted unless a contractual
                relationship has been established, in which case retention follows the applicable
                statutory requirements.
              </p>
            </section>

            {/* Processors */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">5. Service providers</h2>
              <p>
                We use the following third-party service provider to operate this website:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-grid-text">Vercel Inc.</strong> &mdash; website hosting.
                  Our deployment is configured to use EU servers only. Vercel&apos;s privacy policy
                  is available at vercel.com/legal/privacy-policy.
                </li>
              </ul>
              <p className="mt-4">
                We do not share your data with any other third parties.
              </p>
            </section>

            {/* User rights */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">6. Your rights</h2>
              <p>Under the GDPR, you have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-grid-text">Access</strong> the personal data we hold about you</li>
                <li><strong className="text-grid-text">Rectify</strong> inaccurate or incomplete data</li>
                <li><strong className="text-grid-text">Erase</strong> your personal data</li>
                <li><strong className="text-grid-text">Restrict</strong> processing of your data</li>
                <li><strong className="text-grid-text">Port</strong> your data to another controller in a machine-readable format</li>
                <li><strong className="text-grid-text">Object</strong> to processing of your data</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:contact@gridimpulse.com" className="text-grid-green hover:underline">
                  contact@gridimpulse.com
                </a>. We will respond within 30 days.
              </p>
            </section>

            {/* Supervisory authority */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">7. Supervisory authority</h2>
              <p>
                If you believe that our processing of your personal data violates the GDPR,
                you have the right to lodge a complaint with a supervisory authority. The
                competent authority for our company is:
              </p>
              <div className="mt-3 p-4 rounded border border-grid-border bg-grid-surface/30 text-sm">
                <p className="font-mono">Der Hessische Beauftragte f&uuml;r Datenschutz und Informationsfreiheit</p>
                <p className="mt-1 text-xs text-grid-text-dim">
                  (The Hessian Commissioner for Data Protection and Freedom of Information)
                </p>
              </div>
            </section>

            {/* No automated decision-making */}
            <section>
              <h2 className="font-display font-bold text-xl text-grid-text mb-4">8. Automated decision-making</h2>
              <p>
                We do not use automated decision-making or profiling based on the personal
                data collected through this website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
