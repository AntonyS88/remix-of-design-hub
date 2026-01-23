import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      <button
        onClick={() => setLang('ru')}
        className={cn(
          "px-2 py-1 rounded-md transition-all duration-200",
          lang === 'ru' 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => setLang('en')}
        className={cn(
          "px-2 py-1 rounded-md transition-all duration-200",
          lang === 'en' 
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
