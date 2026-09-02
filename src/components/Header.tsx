import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.work, href: '#selected-work', type: 'scroll' as const },
    { label: t.nav.capabilities, href: '#capabilities', type: 'scroll' as const },
    { label: t.nav.resume, href: `/resume/${lang}`, type: 'route' as const },
    { label: t.nav.contact, href: '#contact', type: 'scroll' as const },
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
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link key={item.href} to={item.href} className="nav-link text-sm font-medium py-1">
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link text-sm font-medium py-1"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Mobile Logo/Name */}
          <div className="md:hidden">
            <span className="font-semibold text-foreground">{siteConfig.name.split(' ')[0]}</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <LanguageSwitcher className="hidden sm:flex" />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
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
        <nav id="mobile-navigation" className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {item.label}
              </button>
            )
          )}
          <div className="border-t border-border/30 my-2" />
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
