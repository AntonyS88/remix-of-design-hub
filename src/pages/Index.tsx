import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { Shots } from '@/components/Shots';
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
        {/* Shots — right after hero, full bento */}
        <Shots id="shots" />
        <Portfolio />
        <Skills />
        <CTA />
        <Contacts />
      </main>
      <BackToTop />
    </>
  );
};

export default Index;
