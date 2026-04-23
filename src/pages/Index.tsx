import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { Shots } from '@/components/Shots';
import { CTA } from '@/components/CTA';
import { Contacts } from '@/components/Contacts';
import { GradientBackground } from '@/components/GradientBackground';
import { BackToTop } from '@/components/BackToTop';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      <GradientBackground />
      <Header />
      <main>
        <Hero />
        {/* Shots #1 — right after hero, first 4 tiles */}
        <Shots id="shots" limit={4} />
        <Portfolio />
        {/* Shots #2 — between cases and skills, remaining 4 tiles */}
        <Shots
          offset={4}
          limit={4}
          title={t.shots.title + ' — More'}
          subtitle={t.shots.subtitle}
        />
        <Skills />
        <CTA />
        <Contacts />
      </main>
      <BackToTop />
    </>
  );
};

export default Index;
