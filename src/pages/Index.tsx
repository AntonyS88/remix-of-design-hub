import { useEffect } from 'react';
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

  return (
    <>
      <GradientBackground />
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
