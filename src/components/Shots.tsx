import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { shots, type Shot } from '@/config/shots';
import { cn } from '@/lib/utils';

interface ShotsProps {
  id?: string;
  showTitle?: boolean;
  limit?: number;
  offset?: number;
  title?: string;
  subtitle?: string;
}

function ShotCard({ shot, index }: { shot: Shot; index: number }) {
  const { lang } = useLanguage();
  const { colStart, colSpan, rowStart, rowSpan } = shot.desktop;

  // Inline styles for grid placement (Tailwind can't safely template arbitrary numeric spans)
  const desktopStyle: React.CSSProperties = {
    gridColumn: `${colStart} / span ${colSpan}`,
    gridRow: `${rowStart} / span ${rowSpan}`,
  };

  // Mobile fallback: full-width stack with simple alternating heights for rhythm
  const mobileTall = index % 3 === 0;

  return (
    <a
      href={shot.href}
      target={shot.external ? '_blank' : undefined}
      rel={shot.external ? 'noopener noreferrer' : undefined}
      aria-label={shot.title[lang]}
      style={desktopStyle}
      className={cn(
        'group relative block overflow-hidden rounded-[20px] bg-card/60 backdrop-blur-sm shot-card',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        // Mobile: ignore desktop grid placement, stack full width
        'col-[unset] row-[unset]',
        mobileTall ? 'min-h-[280px]' : 'min-h-[200px]',
        'sm:min-h-0',
        // Tablet & desktop: honor inline grid styles
      )}
    >
      <img
        src={shot.image}
        alt={shot.title[lang]}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Bottom gradient for legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

      {/* Hover violet tint */}
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

        {/*
          Grid:
          - Mobile (<640): 1 col, natural row height (each card sets min-h)
          - Tablet (640–1024): 2 cols, auto rows
          - Desktop (≥1024): 6 cols × 4 rows, fixed row height for true bento
        */}
        <div
          className={cn(
            'grid gap-4 sm:gap-5',
            'grid-cols-1 sm:grid-cols-2',
            'lg:grid-cols-6 lg:auto-rows-[160px] xl:auto-rows-[180px]'
          )}
        >
          {items.map((shot, i) => (
            <ShotCard key={shot.id} shot={shot} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
