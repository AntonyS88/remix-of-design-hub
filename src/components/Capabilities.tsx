import { useLanguage } from '@/hooks/useLanguage';

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="scroll-mt-16 py-20 sm:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
          {t.capabilities.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {t.capabilities.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8 shadow-sm"
            >
              <span className="block text-sm font-semibold text-accent-foreground mb-5" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
