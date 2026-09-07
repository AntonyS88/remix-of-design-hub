import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GradientBackground } from '@/components/GradientBackground';
import { Header } from '@/components/Header';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

const resumeData = {
  en: {
    title: 'Resume',
    subtitle: 'Choose the format',
    openDoc: 'Open Google Doc',
    downloadPdf: 'Download PDF',
    note: 'Opens in a new tab',
    back: 'Back to home',
    languageLabel: 'Resume language',
    metaTitle: 'Anton Sechin — Resume (EN)',
    docUrl: 'https://docs.google.com/document/d/1ncEk5nYgu0tnhZODn8gnJO7muTLaAmnOrMU4ZL4rm-Q?utm_source=portfolio_site&utm_medium=resume_button&utm_campaign=cv&utm_content=en',
  },
  ru: {
    title: 'Резюме',
    subtitle: 'Выберите формат',
    openDoc: 'Открыть Google Doc',
    downloadPdf: 'Скачать PDF',
    note: 'Откроется в новой вкладке',
    back: 'На главную',
    languageLabel: 'Язык резюме',
    metaTitle: 'Антон Сечин — Резюме (RU)',
    docUrl: 'https://docs.google.com/document/d/1QgrvEsCk2dFOOZnL23gqrn9FQR3KloN-HFDI0HDGNlk?utm_source=portfolio_site&utm_medium=resume_button&utm_campaign=cv&utm_content=ru',
  },
};

type ResumeLang = 'en' | 'ru';

export default function ResumePage() {
  const { lang } = useParams<{ lang: string }>();
  const { setLang } = useLanguage();
  const currentLang: ResumeLang = lang === 'ru' ? 'ru' : 'en';
  const data = resumeData[currentLang];

  useEffect(() => {
    document.title = data.metaTitle;
    setLang(currentLang);
  }, [currentLang, data.metaTitle, setLang]);

  return (
    <>
      <GradientBackground minimal />
      <Header />

      <main className="min-h-screen px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="container mx-auto w-full max-w-7xl">
          <div className="flex items-start justify-between gap-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Anton Sechin</p>
            <nav className="flex items-center gap-4 text-sm font-semibold" aria-label={data.languageLabel}>
              {(['ru', 'en'] as const).map((language) => (
                <Link
                  key={language}
                  to={`/resume/${language}`}
                  lang={language}
                  aria-current={currentLang === language ? 'page' : undefined}
                  className={cn(
                    'rounded-sm border-b py-1 uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4',
                    currentLang === language
                      ? 'border-primary text-foreground'
                      : 'border-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                  )}
                >
                  {language}
                </Link>
              ))}
            </nav>
          </div>

          <header className="mt-16 grid gap-8 sm:mt-24 lg:grid-cols-12 lg:items-end lg:gap-6">
            <h1 className="text-[clamp(4.5rem,12vw,10rem)] font-bold uppercase leading-[0.82] tracking-[-0.075em] text-foreground lg:col-span-8">
              {data.title}
            </h1>
            <p className="pb-2 text-lg font-medium text-muted-foreground sm:text-xl lg:col-span-4">
              {data.subtitle}
            </p>
          </header>

          <section className="mt-14 grid gap-10 border-y border-border/70 py-10 sm:mt-20 sm:py-12 lg:grid-cols-12 lg:items-end lg:gap-6">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {currentLang === 'ru' ? 'Product Designer · AI-продукты & SaaS' : 'Product Designer · AI Products & SaaS'}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {data.note}
              </p>
            </div>

            <div className="flex max-w-xl flex-col gap-3 lg:col-span-5 lg:col-start-8 lg:w-full">
              <Button variant="default" size="lg" className="group justify-between rounded-full px-6" asChild>
                <a href={data.docUrl} target="_blank" rel="noopener noreferrer">
                  {data.openDoc}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="justify-between rounded-full border border-border/70 bg-transparent px-6 text-muted-foreground disabled:opacity-60"
                disabled
              >
                {data.downloadPdf}
              </Button>
            </div>
          </section>

          <Link
            to="/"
            className="group mt-10 inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
            {data.back}
          </Link>
        </div>
      </main>
    </>
  );
}
