import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientBackground } from '@/components/GradientBackground';
import { cn } from '@/lib/utils';

const resumeData = {
  en: {
    title: 'Resume',
    subtitle: 'Choose the format',
    openDoc: 'Open Google Doc',
    downloadPdf: 'Download PDF',
    note: 'Opens in a new tab',
    metaTitle: 'Anton Sechin — Resume (EN)',
    docUrl: 'https://docs.google.com/document/d/1ncEk5nYgu0tnhZODn8gnJO7muTLaAmnOrMU4ZL4rm-Q?utm_source=portfolio_site&utm_medium=resume_button&utm_campaign=cv&utm_content=en',
  },
  ru: {
    title: 'Резюме',
    subtitle: 'Выберите формат',
    openDoc: 'Открыть Google Doc',
    downloadPdf: 'Скачать PDF',
    note: 'Откроется в новой вкладке',
    metaTitle: 'Антон Сечин — Резюме (RU)',
    docUrl: 'https://docs.google.com/document/d/1QgrvEsCk2dFOOZnL23gqrn9FQR3KloN-HFDI0HDGNlk?utm_source=portfolio_site&utm_medium=resume_button&utm_campaign=cv&utm_content=ru',
  },
};

type ResumeLang = 'en' | 'ru';

export default function ResumePage() {
  const { lang } = useParams<{ lang: string }>();
  const currentLang: ResumeLang = lang === 'ru' ? 'ru' : 'en';
  const data = resumeData[currentLang];

  useEffect(() => {
    document.title = data.metaTitle;
  }, [data.metaTitle]);

  return (
    <>
      <GradientBackground />
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-md w-full text-center animate-fade-in">
          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-1 text-sm font-medium mb-8">
            <Link
              to="/resume/ru"
              className={cn(
                "px-2 py-1 rounded-md transition-all duration-200",
                currentLang === 'ru'
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              RU
            </Link>
            <span className="text-border">/</span>
            <Link
              to="/resume/en"
              className={cn(
                "px-2 py-1 rounded-md transition-all duration-200",
                currentLang === 'en'
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              EN
            </Link>
          </div>

          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mb-8">
            {data.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              variant="default"
              size="lg"
              className="rounded-full cta-glow group"
              asChild
            >
              <a href={data.docUrl} target="_blank" rel="noopener noreferrer">
                {data.openDoc}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="rounded-full opacity-50 cursor-not-allowed"
              disabled
            >
              {data.downloadPdf}
            </Button>
          </div>

          {/* Note */}
          <p className="text-xs text-muted-foreground mt-4">
            {data.note}
          </p>

          {/* Back link */}
          <Link
            to="/"
            className="inline-block mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {currentLang === 'ru' ? 'На главную' : 'Back to home'}
          </Link>
        </div>
      </div>
    </>
  );
}
