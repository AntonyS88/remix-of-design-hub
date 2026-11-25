import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

export function Capabilities() {
  const { t, lang } = useLanguage();
  const examples = [
    { slug: 'workenglish', label: 'WorkEnglish' },
    { slug: 'forex-trading-simulator', label: 'Forex' },
    { slug: 'forex-trading-simulator', label: 'Forex' },
    { slug: 'remy', label: 'Remy' },
  ];

  return (
    <section id="capabilities" className="section-space scroll-mt-16 border-t border-border/70">
      <div className="layout-shell">
        <h2 className="section-heading mb-12 text-foreground sm:mb-16">
          {t.capabilities.title}
        </h2>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {t.capabilities.items.map((item, index) => (
            <article
              key={item.title}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-t border-border/70 py-8 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6 sm:py-10 md:pr-8"
            >
              <span className="text-3xl font-light tracking-[-0.06em] text-muted-foreground sm:text-5xl" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-3 text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
                <Link to={`/case/${examples[index].slug}`} className="mt-4 inline-flex text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{lang === 'ru' ? 'Пример' : 'See example'}: {examples[index].label} ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
