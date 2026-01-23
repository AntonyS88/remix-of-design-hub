import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
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
            className="rounded-full px-10 cta-glow group"
            asChild
          >
            <a href={siteConfig.telegram.url} target="_blank" rel="noopener noreferrer">
              {t.cta.button}
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
