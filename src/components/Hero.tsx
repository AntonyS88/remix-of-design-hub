import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import avatarImage from '@/assets/avatar-retouched.jpg';

const buildStages = ['IDEA', 'DESIGN', 'BUILD', 'SHIP'] as const;

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="min-h-[100svh] flex items-center px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:min-h-[82svh] lg:items-start lg:pb-10">
      <div className="container relative mx-auto w-full max-w-7xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden grid-cols-12 gap-x-6 lg:grid">
          <img
            src={avatarImage}
            alt="Anton Sechin"
            width={640}
            height={640}
            decoding="async"
            className="col-start-10 col-end-12 aspect-[4/5] w-28 translate-x-6 select-none justify-self-end rounded-2xl object-cover object-[center_38%]"
          />
        </div>

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:gap-y-0 lg:pt-[11.75rem]">
          <h1 aria-label="Anton Sechin" className="min-w-0 text-[clamp(4.25rem,13vw,10rem)] font-bold uppercase leading-[0.82] tracking-[-0.075em] text-foreground animate-fade-in lg:col-span-7">
            <span className="block">Anton</span>
            <span className="block">Sechin</span>
          </h1>

          <div className="max-w-xl lg:col-start-8 lg:col-end-12 lg:w-[112%] lg:max-w-none">
            <p className="mb-6 text-lg font-semibold leading-snug text-foreground sm:text-xl lg:text-[1.3125rem]">
              {t.hero.role}
            </p>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-[1.1875rem]">
              {t.hero.bio}
            </p>

            <div className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{t.hero.locationStatus}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button variant="default" size="lg" className="rounded-full px-6 group" asChild>
                <a href="#selected-work">
                  {t.hero.viewWork}
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
                </a>
              </Button>

              <Link
                to={`/resume/${lang}`}
                className="group inline-flex items-center gap-2 border-b border-foreground/30 py-1 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
              >
                {t.hero.resume}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-2 border-y border-border/70 sm:mt-16 sm:grid-cols-4 lg:mt-8" aria-label="Idea to shipped product">
          {buildStages.map((stage, index) => (
            <li
              key={stage}
              className="flex items-center gap-3 py-4 text-xs font-semibold tracking-[0.16em] text-muted-foreground sm:border-l sm:px-5 sm:first:border-l-0"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{stage}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
