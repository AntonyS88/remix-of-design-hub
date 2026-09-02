import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import avatarImage from '@/assets/avatar.jpg';

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* Avatar with subtle brand glow */}
        <div className="mb-8 flex justify-center">
          <div className="avatar-glow relative">
            <img
              src={avatarImage}
              alt={siteConfig.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover bg-muted relative z-10"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
          {siteConfig.name}
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-6 text-balance">
          {t.hero.role}
        </p>

        {/* Bio */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto text-balance">
          {t.hero.bio}
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
          <MapPin className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          <span>{t.hero.locationStatus}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 min-w-[200px] cta-glow group"
            asChild
          >
            <a href="#selected-work">
              {t.hero.viewWork}
              <ArrowDown className="w-5 h-5 shrink-0 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="rounded-full px-8 min-w-[200px] group"
            asChild
          >
            <Link to={`/resume/${lang}`}>
              {t.hero.resume}
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
