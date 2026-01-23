import { useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { QuickNavSection } from '@/components/landing/QuickNavSection';
import { ProblemSectionSimplified } from '@/components/landing/ProblemSectionSimplified';
import { GhostProtocolSection } from '@/components/landing/GhostProtocolSection';
import { LiveDemoStatic } from '@/components/landing/LiveDemoStatic';
import { PricingSectionSimplified } from '@/components/landing/PricingSectionSimplified';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';
import { 
  getOrganizationSchema, 
  getSoftwareApplicationSchema, 
  getWebSiteSchema 
} from '@/lib/structured-data';
import { useScrollTracking } from '@/hooks/use-scroll-tracking';
import { trackEvent, trackPageView } from '@/lib/analytics';

const Index = () => {
  useScrollTracking();
  
  // Track page view and time on page
  useEffect(() => {
    const startTime = Date.now();
    trackPageView('/');
    
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', { seconds: timeOnPage, page: '/' });
    };
  }, []);
  return (
    <>
      <SEO 
        canonical="/"
        description="Connect all your data sources to one AI. Get answers that cite the right source—not a confused mix. Chat with documents securely. Try Axio Hub free."
        keywords={['AI knowledge base', 'chat with documents', 'enterprise RAG platform', 'multi-source document AI', 'ChatGPT for company documents']}
        structuredData={[
          getOrganizationSchema(),
          getSoftwareApplicationSchema(),
          getWebSiteSchema()
        ]}
      />
      <main id="main-content" className="bg-background">
        <Header />
        <HeroSection />
        <QuickNavSection />
        <ProblemSectionSimplified />
        <section id="security">
          <GhostProtocolSection />
        </section>
        <LiveDemoStatic />
        <section id="pricing">
          <PricingSectionSimplified />
        </section>
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
