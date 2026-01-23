import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cases } from '@/config/cases';
import { cn } from '@/lib/utils';

export function Portfolio() {
  const { lang, t } = useLanguage();

  return (
    <section id="cases" className="py-20 sm:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16">
          {t.cases.title}
        </h2>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <Link
              key={caseItem.slug}
              to={`/case/${caseItem.slug}`}
              className={cn(
                "group glass-card-hover rounded-2xl overflow-hidden",
                "transform transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Cover Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={caseItem.coverImage}
                  alt={caseItem.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {caseItem.title[lang]}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {caseItem.summary[lang]}
                </p>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-primary">
                  {t.cases.viewCase}
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
