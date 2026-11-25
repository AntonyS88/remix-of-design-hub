import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cases, type CaseStudy } from '@/config/cases';
import type { Language } from '@/config/i18n';
import { cn } from '@/lib/utils';
import workEnglishCardCover from '@/assets/workenglish-cover-card.webp';
import { BlurFade } from '@/components/magicui/blur-fade';

interface ProjectCardProps {
  item: CaseStudy;
  lang: Language;
  viewCase: string;
  featured?: boolean;
  wide?: boolean;
}

function ProjectCard({ item, lang, viewCase, featured = false, wide = false }: ProjectCardProps) {
  const editorial = featured || wide;
  return (
    <article className={cn(!featured && 'h-full')}>
      <Link
        to={`/case/${item.slug}`}
        className={cn('group block focus-visible:outline-none', !editorial && 'flex flex-col')}
      >
        <div
          className={cn(
            'project-cover overflow-hidden rounded-[var(--radius-visual)] bg-muted ring-offset-background transition-shadow group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-4',
            editorial ? (item.coverAspect ?? 'aspect-[16/9]') : item.slug === 'workenglish' ? 'aspect-[126/57]' : 'aspect-[14/11]'
          )}
        >
          <img
            src={item.slug === 'workenglish' ? workEnglishCardCover : item.coverImage}
            alt={item.title[lang]}
            loading="lazy"
            decoding="async"
            className={cn(
              'h-full w-full transition-transform duration-500 ease-out',
              editorial && item.coverAspect ? 'object-contain' : 'object-cover group-hover:scale-[1.02]'
            )}
          />
        </div>

        <div className={cn('mt-5', editorial ? 'sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(18rem,0.62fr)] sm:gap-10' : 'flex flex-1 flex-col')}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {item.tags.join(' · ')} · {item.content[lang].hero.role}
            </p>
            <h3 className={cn('font-semibold tracking-[-0.025em] text-foreground', editorial ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl')}>
              {item.title[lang]}
            </h3>
          </div>

          <div className={cn(editorial ? 'mt-4 sm:mt-0' : 'mt-3 flex flex-1 flex-col')}>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.summary[lang]}
            </p>
            <span className={cn('inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary', editorial ? 'mt-4' : 'mt-auto pt-4')}>
              <span className="border-b border-transparent transition-colors group-hover:border-primary">{viewCase}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
      {item.projectUrl && item.projectCta && (
        <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
          {item.projectCta[lang]} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export function Portfolio() {
  const { lang, t } = useLanguage();
  const selectedCases = ['remy', 'workenglish', 'mobile-app-concept', 'forex-trading-simulator']
    .map((slug) => cases.find((item) => item.slug === slug))
    .filter((item): item is CaseStudy => Boolean(item));
  const [featured, ...secondary] = selectedCases;

  if (!featured) return null;

  return (
    <section id="selected-work" className="section-space scroll-mt-16">
      <div className="layout-shell">
        <div className="mb-12 flex items-end justify-between border-b border-border/70 pb-6 sm:mb-16">
          <h2 className="section-heading text-foreground">
            {t.cases.title}
          </h2>
          <span className="hidden text-xs font-semibold tracking-[0.16em] text-muted-foreground sm:block" aria-hidden="true">
            01—{String(selectedCases.length).padStart(2, '0')}
          </span>
        </div>

        <BlurFade><ProjectCard item={featured} lang={lang} viewCase={t.cases.viewCase} featured /></BlurFade>

        <div className="mt-16 grid gap-12 sm:mt-24 sm:grid-cols-2 sm:gap-6 lg:gap-10">
          {secondary.map((item, index) => (
            <BlurFade key={item.slug} className={cn('h-full', index === secondary.length - 1 && 'sm:col-span-2')} delay={index * 60}>
              <ProjectCard item={item} lang={lang} viewCase={t.cases.viewCase} wide={index === secondary.length - 1} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
