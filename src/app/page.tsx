import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DashboardSection from "@/components/sections/DashboardSection";
import MarketsSection from "@/components/sections/MarketsSection";
import SovereigntySection from "@/components/sections/SovereigntySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DashboardSection />
        <MarketsSection />
        <SovereigntySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
