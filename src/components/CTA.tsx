import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import ctaOrb from '@/assets/cta-orb.png';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto w-full md:w-[90%] lg:w-[80%] max-w-5xl">
        <div className="cta-card glass-card rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden group transition-all duration-300">
          {/* 3D Orb Element */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 sm:translate-x-1/6 lg:translate-x-0 opacity-60 sm:opacity-70 lg:opacity-80 pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:opacity-90">
            <img 
              src={ctaOrb} 
              alt="" 
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain select-none"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-md">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.cta.title}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold gradient-text mb-4">
              {t.cta.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-muted-foreground mb-8">
              {t.cta.description}
            </p>

            {/* CTA Button */}
            <Button
              variant="default"
              size="lg"
              className="rounded-full px-10 cta-glow group/btn"
              asChild
            >
              <a href={siteConfig.telegram.url} target="_blank" rel="noopener noreferrer">
                {t.cta.button}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" strokeWidth={2} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
