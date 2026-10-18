import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { analyticsEvents, getAnalyticsConsent, setAnalyticsConsent } from '@/lib/analytics';

const copy = {
  ru: {
    title: 'Настройки аналитики',
    description: 'С вашего разрешения Google Analytics помогает понять, какие страницы портфолио полезны. До согласия аналитика не загружается.',
    accept: 'Принять',
    reject: 'Отклонить',
    privacy: 'Политика конфиденциальности',
  },
  en: {
    title: 'Analytics settings',
    description: 'With your permission, Google Analytics helps me understand which portfolio pages are useful. Analytics does not load before consent.',
    accept: 'Accept',
    reject: 'Reject',
    privacy: 'Privacy Policy',
  },
};

export function ConsentBanner() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(() => getAnalyticsConsent() === null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const text = copy[lang];

  useEffect(() => {
    const openSettings = () => {
      setVisible(true);
      window.requestAnimationFrame(() => bannerRef.current?.focus());
    };
    window.addEventListener(analyticsEvents.openSettings, openSettings);
    return () => window.removeEventListener(analyticsEvents.openSettings, openSettings);
  }, []);

  if (!visible) return null;

  const choose = (value: 'accepted' | 'rejected') => {
    setAnalyticsConsent(value);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-5">
      <div
        ref={bannerRef}
        tabIndex={-1}
        role="region"
        aria-labelledby="analytics-consent-title"
        className="mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-md focus:outline-none sm:p-6"
      >
        <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
          <div>
            <h2 id="analytics-consent-title" className="text-lg font-semibold tracking-[-0.02em] text-foreground">
              {text.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{text.description}</p>
            <Link
              to="/privacy"
              className="mt-3 inline-flex rounded-sm text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              {text.privacy}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:w-64">
            <Button type="button" variant="outline" className="w-full" onClick={() => choose('rejected')}>
              {text.reject}
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={() => choose('accepted')}>
              {text.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
