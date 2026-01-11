import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { IntegrationMarquee } from '@/components/landing/IntegrationMarquee';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ZeroCopySection } from '@/components/landing/ZeroCopySection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { BuiltForSection } from '@/components/landing/BuiltForSection';
import { PricingSection } from '@/components/landing/PricingSection';
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
        description="Your Knowledge, Unified. The intelligence layer for your files—from personal projects to field ops. AI-powered knowledge management that works with your existing tools."
        structuredData={[
          getOrganizationSchema(),
          getSoftwareApplicationSchema(),
          getWebSiteSchema()
        ]}
      />
      <main id="main-content" className="bg-background">
        <Header />
        <HeroSection />
        <IntegrationMarquee />
        <ProblemSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="zero-copy">
          <ZeroCopySection />
        </section>
        <section id="demo">
          <LiveDemoSection />
        </section>
        <BuiltForSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Index;
