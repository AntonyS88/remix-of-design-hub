import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.cases, href: '#cases' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contacts, href: '#contacts' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-sm font-medium py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Logo/Name */}
          <div className="md:hidden">
            <span className="font-semibold text-foreground">{siteConfig.name.split(' ')[0]}</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <LanguageSwitcher className="hidden sm:flex" />
            
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex items-center rounded-full px-4"
              asChild
            >
              <a href={`mailto:${siteConfig.email}?subject=${siteConfig.emailSubject}`}>
                {t.nav.emailMe}
                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl transition-all duration-300",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-border/30 my-2" />
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-4"
              asChild
            >
              <a href={`mailto:${siteConfig.email}?subject=${siteConfig.emailSubject}`}>
                {t.nav.emailMe}
                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
