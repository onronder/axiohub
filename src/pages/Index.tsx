import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { BuiltForSection } from '@/components/landing/BuiltForSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <LiveDemoSection />
      <BuiltForSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
