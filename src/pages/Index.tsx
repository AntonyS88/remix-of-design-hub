import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { Capabilities } from '@/components/Capabilities';
import { HowIWork } from '@/components/HowIWork';
import { Contacts } from '@/components/Contacts';
import { GradientBackground } from '@/components/GradientBackground';
import { BackToTop } from '@/components/BackToTop';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';

const Index = () => {
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const title = siteConfig.seo.title[lang];
    const description = siteConfig.seo.description[lang];

    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [lang]);

  useEffect(() => {
    if (!location.hash) return;

    const animationFrame = window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [location.hash]);

  return (
    <>
      <GradientBackground minimal />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Capabilities />
        <HowIWork />
        <Contacts />
      </main>
      <BackToTop />
    </>
  );
};

export default Index;
