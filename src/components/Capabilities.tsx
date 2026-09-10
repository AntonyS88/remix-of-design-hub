import { useLanguage } from '@/hooks/useLanguage';

export function Capabilities() {
  const { t } = useLanguage();

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
