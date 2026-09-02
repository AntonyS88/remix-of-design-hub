import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
          {t.howIWork.title}
        </h2>

        <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3" aria-label={t.howIWork.title}>
          {t.howIWork.steps.map((step, index) => (
            <li key={step} className="flex max-w-full items-center gap-2">
              <span className="rounded-full border border-border/70 bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground">
                {step}
              </span>
              {index < t.howIWork.steps.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
