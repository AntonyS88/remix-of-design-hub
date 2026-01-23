import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { CTA } from '@/components/CTA';
import { Contacts } from '@/components/Contacts';
import { GradientBackground } from '@/components/GradientBackground';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <>
      <GradientBackground />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <CTA />
        <Contacts />
      </main>
      <BackToTop />
    </>
  );
};

export default Index;
