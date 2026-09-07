import { useLanguage } from '@/hooks/useLanguage';

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="scroll-mt-16 px-4 py-24 sm:px-6 sm:py-36">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold tracking-[-0.04em] text-foreground sm:mb-16 sm:text-5xl">
          {t.capabilities.title}
        </h2>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {t.capabilities.items.map((item, index) => (
            <article
              key={item.title}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-t border-border/70 py-8 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6 sm:py-10"
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
