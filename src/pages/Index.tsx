import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustBadgesRow } from '@/components/landing/TrustBadgesRow';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { DataConnectorsSection } from '@/components/landing/DataConnectorsSection';
import { GhostProtocolSection } from '@/components/landing/GhostProtocolSection';
import { IntelligenceFeaturesSection } from '@/components/landing/IntelligenceFeaturesSection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
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
        description="Your Knowledge, Unified. The intelligence layer for your files—from personal projects to field ops. AI-powered knowledge management with Ghost Protocol zero-retention security."
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
        <HowItWorksSection />
        <DataConnectorsSection />
        <section id="security">
          <GhostProtocolSection />
        </section>
        <section id="features">
          <IntelligenceFeaturesSection />
        </section>
        <section id="demo">
          <LiveDemoSection />
        </section>
        <SocialProofSection />
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
