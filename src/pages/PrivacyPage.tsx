import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientBackground } from '@/components/GradientBackground';
import { Header } from '@/components/Header';
import { useLanguage } from '@/hooks/useLanguage';
import { openAnalyticsSettings } from '@/lib/analytics';
import { siteConfig } from '@/config/site.config';

const copy = {
  ru: {
    eyebrow: 'Конфиденциальность',
    title: 'Политика конфиденциальности',
    updated: 'Последнее обновление: 18 октября 2026',
    intro: 'Эта страница объясняет, как сайт-портфолио Антона Сечина использует аналитику и какие данные при этом обрабатываются.',
    sections: [
      {
        title: 'Кто отвечает за сайт',
        body: `Владелец и оператор сайта — ${siteConfig.name}. По вопросам конфиденциальности можно написать на ${siteConfig.email}.`,
      },
      {
        title: 'Зачем используется аналитика',
        body: 'Google Analytics 4 используется только после вашего согласия, чтобы понять посещаемость страниц и взаимодействие с кейсами, резюме и контактными ссылками. Рекламная персонализация и Google Signals отключены.',
      },
      {
        title: 'Какие данные могут обрабатываться',
        body: 'Технические данные о посещении: просмотренная страница, тип события, время, источник перехода, браузер, устройство, операционная система и приблизительное местоположение, определяемое сервисом по сетевым данным. Адреса страниц передаются без query-параметров и hash-фрагментов. Формы, аккаунты и базы данных на сайте отсутствуют.',
      },
      {
        title: 'Cookies и согласие',
        body: 'До принятия аналитика не загружается и аналитические cookies не создаются. После согласия Google Analytics может установить cookies _ga и _ga_<идентификатор>. Вы можете отклонить аналитику или позже отозвать согласие; при отзыве сайт прекращает сбор и удаляет доступные ему cookies Google Analytics, не затрагивая другие настройки.',
      },
      {
        title: 'Обработка Google',
        body: 'Данные аналитики обрабатываются Google в соответствии с условиями и политикой конфиденциальности Google. На сайте не используются рекламные функции GA4.',
      },
      {
        title: 'Срок хранения',
        body: 'Срок хранения аналитических данных определяется настройкой конкретного ресурса GA4. Точное значение необходимо подтвердить в Google Analytics Admin до публикации этой версии политики.',
      },
    ],
    googlePrivacy: 'Политика конфиденциальности Google',
    googleTerms: 'Условия обработки данных Google Analytics',
    settings: 'Изменить выбор аналитики',
    back: 'Вернуться на главную',
  },
  en: {
    eyebrow: 'Privacy',
    title: 'Privacy Policy',
    updated: 'Last updated: October 18, 2026',
    intro: "This page explains how Anton Sechin's portfolio website uses analytics and what data may be processed.",
    sections: [
      {
        title: 'Who is responsible for the website',
        body: `The website owner and operator is ${siteConfig.name}. For privacy questions, contact ${siteConfig.email}.`,
      },
      {
        title: 'Why analytics is used',
        body: 'Google Analytics 4 is used only after your consent to understand page visits and interactions with case studies, the resume and contact links. Advertising personalisation and Google Signals are disabled.',
      },
      {
        title: 'Data that may be processed',
        body: 'Technical visit data: viewed page, event type, time, referrer, browser, device, operating system and approximate location derived by the service from network data. Page addresses are sent without query parameters or hash fragments. The website has no forms, user accounts or database.',
      },
      {
        title: 'Cookies and consent',
        body: 'Analytics does not load and analytics cookies are not created before acceptance. After consent, Google Analytics may set _ga and _ga_<identifier> cookies. You can reject analytics or withdraw consent later; withdrawal stops collection and removes Google Analytics cookies accessible to this website without affecting other settings.',
      },
      {
        title: 'Processing by Google',
        body: "Analytics data is processed by Google under Google's terms and privacy policy. GA4 advertising features are not used on this website.",
      },
      {
        title: 'Retention',
        body: 'Analytics data retention is controlled by the setting of this specific GA4 property. The exact value must be confirmed in Google Analytics Admin before this version of the policy is published.',
      },
    ],
    googlePrivacy: 'Google Privacy Policy',
    googleTerms: 'Google Analytics data processing terms',
    settings: 'Change analytics choice',
    back: 'Return to home',
  },
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const text = copy[lang];

  useEffect(() => {
    document.title = `${text.title} — ${siteConfig.name}`;
  }, [text.title]);

  return (
    <>
      <GradientBackground minimal />
      <Header />
      <main className="pb-24 pt-28 sm:pb-32 sm:pt-36">
        <article className="layout-shell">
          <p className="eyebrow mb-5">{text.eyebrow}</p>
          <h1 className="max-w-5xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.065em] text-foreground">
            {text.title}
          </h1>
          <p className="mt-6 text-sm text-muted-foreground">{text.updated}</p>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{text.intro}</p>

          <div className="mt-16 grid gap-10 border-t border-border/70 pt-10 sm:mt-24 sm:gap-14 sm:pt-14 lg:grid-cols-12">
            {text.sections.map((section, index) => (
              <section key={section.title} className="lg:col-span-8 lg:col-start-5">
                <p className="eyebrow mb-3">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-border/70 pt-8 sm:mt-24 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a className="text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:text-primary" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              {text.googlePrivacy}
            </a>
            <a className="text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:text-primary" href="https://business.safety.google/adsprocessorterms/" target="_blank" rel="noopener noreferrer">
              {text.googleTerms}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button type="button" variant="outline" onClick={openAnalyticsSettings}>{text.settings}</Button>
            <Button variant="ghost" asChild>
              <Link to="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {text.back}
              </Link>
            </Button>
          </div>
        </article>
      </main>
    </>
  );
}
