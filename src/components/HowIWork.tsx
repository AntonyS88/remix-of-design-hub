import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold tracking-[-0.04em] text-foreground sm:mb-14 sm:text-5xl">
          {t.howIWork.title}
        </h2>

        <ol className="grid grid-cols-1 border-b border-border/70 sm:grid-cols-4 lg:grid-cols-8" aria-label={t.howIWork.title}>
          {t.howIWork.steps.map((step, index) => (
            <li key={step} className="flex min-w-0 items-center justify-between gap-3 border-t border-border/70 py-4 sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:px-3 sm:py-5 lg:min-h-28">
              <span className="text-sm font-medium leading-snug text-foreground">
                {step}
              </span>
              {index < t.howIWork.steps.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-muted-foreground sm:rotate-0" strokeWidth={1.5} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
