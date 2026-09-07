import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '@/config/site.config';
import { i18n, type Language } from '@/config/i18n';

export function Header() {
  const { lang: selectedLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routeLanguage = location.pathname.match(/^\/resume\/(ru|en)$/)?.[1] as Language | undefined;
  const lang = routeLanguage ?? selectedLanguage;
  const t = i18n[lang];
  const navigationLabel = lang === 'ru' ? 'Основная навигация' : 'Primary navigation';
  const mobileNavigationLabel = lang === 'ru' ? 'Мобильная навигация' : 'Mobile navigation';
  const menuLabel = lang === 'ru' ? 'Открыть меню' : 'Toggle menu';

  const navItems = [
    { label: t.nav.work, href: '#selected-work', type: 'scroll' as const },
    { label: t.nav.capabilities, href: '#capabilities', type: 'scroll' as const },
    { label: t.nav.resume, href: `/resume/${lang}`, type: 'route' as const },
    { label: t.nav.contact, href: '#contact', type: 'scroll' as const },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="rounded-sm text-sm font-semibold tracking-[-0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          >
            <span className="sm:hidden">{siteConfig.name.split(' ')[0]}</span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label={navigationLabel}>
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                  className="nav-link rounded-sm py-1 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={location.pathname === '/' ? item.href : `/${item.href}`}
                  onClick={(event) => {
                    if (location.pathname === '/') {
                      event.preventDefault();
                      scrollToSection(item.href);
                    }
                  }}
                  className="nav-link rounded-sm py-1 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="ml-6 flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <LanguageSwitcher className="hidden sm:flex" />

            {/* Mobile menu button */}
            <button
              className="rounded-full p-2 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={menuLabel}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 border-b border-border/70 bg-background md:hidden">
          <nav id="mobile-navigation" className="container mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label={mobileNavigationLabel}>
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                  className="border-t border-border/60 py-3 text-left text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={location.pathname === '/' ? item.href : `/${item.href}`}
                  onClick={(event) => {
                    if (location.pathname === '/') {
                      event.preventDefault();
                      scrollToSection(item.href);
                    }
                  }}
                  className="border-t border-border/60 py-3 text-left text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-1 flex items-center justify-between border-t border-border/60 py-3">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
