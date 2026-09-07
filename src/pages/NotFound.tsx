import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientBackground } from '@/components/GradientBackground';
import { Header } from '@/components/Header';
import { useLanguage } from '@/hooks/useLanguage';

const copy = {
  en: {
    eyebrow: 'Page not found',
    title: '404',
    description: 'The page you are looking for does not exist or has moved.',
    back: 'Return to home',
  },
  ru: {
    eyebrow: 'Страница не найдена',
    title: '404',
    description: 'Такой страницы нет или она была перемещена.',
    back: 'Вернуться на главную',
  },
};

export default function NotFound() {
  const { lang } = useLanguage();
  const text = copy[lang];

  useEffect(() => {
    document.title = `${text.eyebrow} — Anton Sechin`;
  }, [text.eyebrow]);

  return (
    <>
      <GradientBackground minimal />
      <Header />
      <main className="flex min-h-screen items-center px-4 pb-20 pt-28 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{text.eyebrow}</p>
          <h1 className="text-[clamp(7rem,22vw,18rem)] font-bold leading-[0.72] tracking-[-0.075em] text-foreground">{text.title}</h1>
          <div className="mt-14 grid gap-8 border-t border-border/70 pt-8 lg:grid-cols-12 lg:gap-6">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-5 lg:col-start-8">
              {text.description}
            </p>
            <Link
              to="/"
              className="group inline-flex w-fit items-center gap-2 rounded-sm border-b border-foreground/30 py-1 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 lg:col-span-5 lg:col-start-8"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
              {text.back}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
