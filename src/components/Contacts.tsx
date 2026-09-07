import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';

const externalLinkClass = 'group inline-flex items-center gap-2 border-b border-foreground/25 py-1 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4';

export function Contacts() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border/70 px-4 py-24 sm:px-6 sm:py-36">
      <div className="container mx-auto max-w-7xl">
        <h2 className="max-w-5xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.065em] text-foreground">
          {t.contact.title}
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
          {t.contact.description}
        </p>

        <div className="mt-16 grid gap-12 border-y border-border/70 py-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end lg:gap-16 sm:mt-24 sm:py-10">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.contacts.email}
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=${siteConfig.emailSubject}`}
              className="group inline-flex max-w-full items-center gap-3 text-xl font-semibold tracking-[-0.03em] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:text-3xl md:text-4xl"
            >
              <span className="break-all">{siteConfig.email}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-7 sm:w-7" strokeWidth={1.75} />
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-4" aria-label={t.contacts.title}>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
              {t.contacts.linkedin}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
            <a href={siteConfig.telegram.url} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
              {t.contacts.telegram}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
            <Link to={`/resume/${lang}`} className={externalLinkClass}>
              {t.contacts.cv}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </Link>
          </nav>
        </div>

        <footer className="pt-8 text-sm text-muted-foreground">
          {t.footer.copyright.replace('{year}', currentYear.toString())}
        </footer>
      </div>
    </section>
  );
}
