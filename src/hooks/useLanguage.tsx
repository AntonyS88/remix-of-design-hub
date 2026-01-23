import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { i18n, Language, I18nContent } from '@/config/i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: I18nContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-lang';

function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ru')) return 'ru';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage first, then browser language
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'ru' || stored === 'en')) {
      setLangState(stored);
    } else {
      const detected = detectBrowserLanguage();
      setLangState(detected);
    }
  }, []);

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = i18n[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
