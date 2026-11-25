import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

export function HowIWork() {
  const { t, lang } = useLanguage();
  const examples = lang === 'ru' ? [
    'WorkEnglish: сформулировал разрыв между знанием языка и его использованием.',
    'Remy: построил цикл от фиксации задачи до фокуса и завершения.',
    'Forex: связал wireframes, компоненты и сценарий сделки.',
    'Remy: проверяю ключевые состояния в работающем прототипе.',
  ] : [
    'WorkEnglish: framed the gap between knowing and using English.',
    'Remy: mapped the loop from capturing a task to focused action.',
    'Forex: connected wireframes, components and the trading flow.',
    'Remy: check key states in the working prototype.',
  ];
  const slugs = ['workenglish', 'remy', 'forex-trading-simulator', 'remy'];

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
              className="relative flex min-w-0 flex-col items-start gap-3 border-t border-border/70 py-5 md:min-h-48 md:border-l md:px-5 md:py-6 md:first:border-l-0 lg:px-6"
            >
              <span className="w-8 shrink-0 text-xs font-semibold tabular-nums tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 text-base font-semibold leading-snug tracking-[-0.02em] text-foreground md:pr-6 lg:text-lg">
                {step}
              </span>
              <Link to={`/case/${slugs[index]}`} className="text-sm leading-relaxed text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{examples[index]} ↗</Link>
              {index < t.howIWork.steps.length - 1 && (
                <ArrowRight
                  className="absolute right-1 top-6 h-4 w-4 shrink-0 rotate-90 text-muted-foreground md:right-5 md:rotate-0 lg:right-6"
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
