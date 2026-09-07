import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cases, type CaseStudy } from '@/config/cases';
import type { Language } from '@/config/i18n';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  item: CaseStudy;
  lang: Language;
  viewCase: string;
  featured?: boolean;
}

function ProjectCard({ item, lang, viewCase, featured = false }: ProjectCardProps) {
  return (
    <article>
      <Link to={`/case/${item.slug}`} className="group block focus-visible:outline-none">
        <div
          className={cn(
            'overflow-hidden rounded-xl bg-muted ring-offset-background transition-shadow group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-4',
            featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          )}
        >
          <img
            src={item.coverImage}
            alt={item.title[lang]}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className={cn('mt-5', featured && 'sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(18rem,0.62fr)] sm:gap-10')}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {item.tags.join(' · ')}
            </p>
            <h3 className={cn('font-semibold tracking-[-0.025em] text-foreground', featured ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl')}>
              {item.title[lang]}
            </h3>
          </div>

          <div className={cn(featured ? 'mt-4 sm:mt-0' : 'mt-3')}>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.summary[lang]}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
              <span className="border-b border-transparent transition-colors group-hover:border-primary">{viewCase}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function Portfolio() {
  const { lang, t } = useLanguage();
  const [featured, ...secondary] = cases;

  return (
    <section id="selected-work" className="scroll-mt-16 px-4 py-24 sm:px-6 sm:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-border/70 pb-6 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            {t.cases.title}
          </h2>
          <span className="hidden text-xs font-semibold tracking-[0.16em] text-muted-foreground sm:block" aria-hidden="true">
            01—03
          </span>
        </div>

        <ProjectCard item={featured} lang={lang} viewCase={t.cases.viewCase} featured />

        <div className="mt-16 grid gap-12 sm:mt-24 sm:grid-cols-2 sm:gap-6 lg:gap-10">
          {secondary.map((item) => (
            <ProjectCard key={item.slug} item={item} lang={lang} viewCase={t.cases.viewCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
