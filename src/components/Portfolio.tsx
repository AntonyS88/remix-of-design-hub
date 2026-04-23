import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cases } from '@/config/cases';
import { cn } from '@/lib/utils';

export function Portfolio() {
  const { lang, t } = useLanguage();

  return (
    <section id="cases" className="py-20 sm:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16">
          {t.cases.title}
        </h2>

        {/* Case Blocks - Vertical Stack */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {cases.map((caseItem, index) => (
            <Link
              key={caseItem.slug}
              to={`/case/${caseItem.slug}`}
              className={cn(
                "group case-block rounded-[20px] overflow-hidden",
                "transform transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Cover Image with Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
                <img
                  src={caseItem.coverImage}
                  alt={caseItem.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Hover CTA - Desktop only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/95 backdrop-blur-sm text-foreground font-medium rounded-2xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {t.cases.viewCase}
                    <ArrowUpRight className="w-6 h-6" strokeWidth={2} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {caseItem.title[lang]}
                </h3>

                {/* Summary */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseItem.summary[lang]}
                </p>

                {/* Mobile CTA */}
                <div className="flex items-center text-sm font-medium text-primary mt-5 lg:hidden">
                  {t.cases.viewCase}
                  <ArrowUpRight className="w-6 h-6 ml-1.5" strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
