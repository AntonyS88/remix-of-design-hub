import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { shots, type Shot } from '@/config/shots';
import { cn } from '@/lib/utils';

interface ShotsProps {
  /** Optional id for anchor linking */
  id?: string;
  /** Show section title */
  showTitle?: boolean;
  /** Limit number of shots rendered */
  limit?: number;
  /** Offset into the shots array (so two sections show different shots) */
  offset?: number;
  /** Optional title override */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
}

const colSpanMap = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
} as const;

const rowSpanMap = {
  1: 'lg:row-span-1',
  2: 'lg:row-span-2',
} as const;

function ShotCard({ shot }: { shot: Shot }) {
  const { lang } = useLanguage();
  const colClass = colSpanMap[shot.span?.col ?? 1];
  const rowClass = rowSpanMap[shot.span?.row ?? 1];
  const isTall = (shot.span?.row ?? 1) === 2;

  return (
    <a
      href={shot.href}
      target={shot.external ? '_blank' : undefined}
      rel={shot.external ? 'noopener noreferrer' : undefined}
      aria-label={shot.title[lang]}
      className={cn(
        'group relative block overflow-hidden rounded-3xl bg-card/60 backdrop-blur-sm',
        'shot-card',
        'sm:col-span-1 md:col-span-1',
        colClass,
        rowClass,
        isTall ? 'aspect-square lg:aspect-auto' : 'aspect-[4/3]'
      )}
    >
      <img
        src={shot.image}
        alt={shot.title[lang]}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Bottom gradient for legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Hover overlay tint */}
      <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />

      {/* Title + arrow */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
        <h3 className="text-sm sm:text-base font-medium text-white drop-shadow-sm line-clamp-2">
          {shot.title[lang]}
        </h3>
        <span
          className={cn(
            'shrink-0 w-9 h-9 rounded-full bg-white/95 text-foreground',
            'flex items-center justify-center',
            'translate-y-2 opacity-0 transition-all duration-300',
            'group-hover:translate-y-0 group-hover:opacity-100'
          )}
        >
          <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
        </span>
      </div>
    </a>
  );
}

export function Shots({
  id,
  showTitle = true,
  limit,
  offset = 0,
  title,
  subtitle,
}: ShotsProps) {
  const { t } = useLanguage();
  const items = shots.slice(offset, limit ? offset + limit : undefined);

  if (items.length === 0) return null;

  return (
    <section id={id} className="py-20 sm:py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        {showTitle && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              {title ?? t.shots.title}
            </h2>
            {(subtitle ?? t.shots.subtitle) && (
              <p className="text-muted-foreground max-w-xl mx-auto">
                {subtitle ?? t.shots.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Bento grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-4 sm:gap-5">
          {items.map((shot) => (
            <ShotCard key={shot.id} shot={shot} />
          ))}
        </div>
      </div>
    </section>
  );
}
