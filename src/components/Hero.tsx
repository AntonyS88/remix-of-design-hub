import { ArrowUpRight } from 'lucide-react';
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
        <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-6">
          {siteConfig.role}
        </p>

        {/* Bio */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto text-balance">
          {t.hero.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full px-8 min-w-[180px] group"
            asChild
          >
            <Link to={`/resume/${lang}`}>
              {t.hero.openResume}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </Link>
          </Button>

          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 min-w-[180px] cta-glow group"
            asChild
          >
            <a href={siteConfig.telegram.url} target="_blank" rel="noopener noreferrer">
              {t.hero.messageTelegram}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
