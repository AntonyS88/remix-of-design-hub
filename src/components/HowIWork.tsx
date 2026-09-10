import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="section-space border-t border-border/70">
      <div className="layout-shell">
        <h2 className="section-heading mb-10 text-foreground sm:mb-12">
          {t.howIWork.title}
        </h2>

        <ol className="grid grid-cols-1 border-b border-border/70 md:grid-cols-4" aria-label={t.howIWork.title}>
          {t.howIWork.steps.map((step, index) => (
            <li
              key={step}
              className="relative flex min-h-20 min-w-0 items-center gap-4 border-t border-border/70 py-5 md:min-h-40 md:flex-col md:items-start md:border-l md:px-5 md:py-6 md:first:border-l-0 lg:min-h-44 lg:px-6"
            >
              <span className="w-8 shrink-0 text-xs font-semibold tabular-nums tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 text-base font-semibold leading-snug tracking-[-0.02em] text-foreground md:mt-auto md:pr-6 lg:text-lg">
                {step}
              </span>
              {index < t.howIWork.steps.length - 1 && (
                <ArrowRight
                  className="ml-auto h-4 w-4 shrink-0 rotate-90 text-muted-foreground md:absolute md:right-5 md:top-6 md:ml-0 md:rotate-0 lg:right-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
