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
        {/* Shots #1 — right after hero, full bento */}
        <Shots id="shots" />
        <Portfolio />
        {/* Shots #2 — between cases and skills */}
        <Shots
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
