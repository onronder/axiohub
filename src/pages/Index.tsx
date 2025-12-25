import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ZeroCopySection } from '@/components/landing/ZeroCopySection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { BuiltForSection } from '@/components/landing/BuiltForSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
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
  );
};

export default Index;
