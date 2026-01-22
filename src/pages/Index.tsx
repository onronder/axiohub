import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustBadgesRow } from '@/components/landing/TrustBadgesRow';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { IntelligenceFeaturesSection } from '@/components/landing/IntelligenceFeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { DataConnectorsSection } from '@/components/landing/DataConnectorsSection';
import { GhostProtocolSection } from '@/components/landing/GhostProtocolSection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';
import { 
  getOrganizationSchema, 
  getSoftwareApplicationSchema, 
  getWebSiteSchema 
} from '@/lib/structured-data';

const Index = () => {
  return (
    <>
      <SEO 
        canonical="/"
        description="Your Knowledge, Unified. Axio Hub connects 12 data sources and delivers answers that cite the right source—never a confused mix. AI-powered knowledge management with Ghost Protocol zero-retention security."
        structuredData={[
          getOrganizationSchema(),
          getSoftwareApplicationSchema(),
          getWebSiteSchema()
        ]}
      />
      <main id="main-content" className="bg-background">
        <Header />
        <HeroSection />
        <TrustBadgesRow />
        <ProblemSection />
        <section id="features">
          <IntelligenceFeaturesSection />
        </section>
        <HowItWorksSection />
        <DataConnectorsSection />
        <section id="security">
          <GhostProtocolSection />
        </section>
        <section id="demo">
          <LiveDemoSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
