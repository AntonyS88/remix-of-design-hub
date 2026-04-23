import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cases } from '@/config/cases';
import { cn } from '@/lib/utils';

const colSpanMap = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
} as const;

const rowSpanMap = {
  1: 'lg:row-span-1',
  2: 'lg:row-span-2',
} as const;

export function Portfolio() {
  const { lang, t } = useLanguage();

  return (
    <section id="cases" className="py-20 sm:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16">
          {t.cases.title}
        </h2>

        {/* Bento Grid: 1 col mobile, 2 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {cases.map((caseItem, index) => {
            const colSpan = caseItem.bento?.colSpan ?? 3;
            const rowSpan = caseItem.bento?.rowSpan ?? 1;
            const aspect = caseItem.bento?.aspect ?? 'aspect-[16/10]';

            return (
              <Link
                key={caseItem.slug}
                to={`/case/${caseItem.slug}`}
                className={cn(
                  'group case-block rounded-[20px] overflow-hidden block relative',
                  'transition-all duration-500',
                  colSpanMap[colSpan],
                  rowSpanMap[rowSpan]
                )}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Cover image */}
                <div className={cn('relative w-full overflow-hidden rounded-[20px]', aspect)}>
                  <img
                    src={caseItem.coverImage}
                    alt={caseItem.title[lang]}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                  {/* Hover violet tint */}
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />

                  {/* Top: tags */}
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: title + summary + arrow */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1.5 line-clamp-2">
                        {caseItem.title[lang]}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {caseItem.summary[lang]}
                      </p>
                    </div>

                    <span
                      className={cn(
                        'shrink-0 w-10 h-10 rounded-full bg-white/95 text-foreground',
                        'flex items-center justify-center',
                        'translate-y-2 opacity-0 transition-all duration-300',
                        'group-hover:translate-y-0 group-hover:opacity-100'
                      )}
                      aria-label={t.cases.viewCase}
                    >
                      <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
