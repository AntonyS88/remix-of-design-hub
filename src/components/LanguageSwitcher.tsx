import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Language } from '@/config/i18n';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const routeLanguage = location.pathname.match(/^\/resume\/(ru|en)$/)?.[1] as Language | undefined;
  const activeLanguage = routeLanguage ?? lang;

  const selectLanguage = (nextLanguage: Language) => {
    setLang(nextLanguage);
    if (routeLanguage) {
      navigate(`/resume/${nextLanguage}`);
    }
  };

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      <button
        onClick={() => selectLanguage('ru')}
        className={cn(
          "px-2 py-1 rounded-md transition-all duration-200",
          activeLanguage === 'ru'
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => selectLanguage('en')}
        className={cn(
          "px-2 py-1 rounded-md transition-all duration-200",
          activeLanguage === 'en'
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
