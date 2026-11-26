import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Portfolio } from '@/components/Portfolio';
import CasePage from '@/pages/CasePage';
import ResumePage from '@/pages/ResumePage';
import { BackToTop } from '@/components/BackToTop';
import { cases } from '@/config/cases';

class Observer { observe() {} unobserve() {} disconnect() {} }
beforeEach(() => {
  localStorage.setItem('portfolio-lang', 'en');
  vi.stubGlobal('IntersectionObserver', Observer);
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

function renderCase(slug: string, lang: 'en' | 'ru') {
  localStorage.setItem('portfolio-lang', lang);
  return render(<LanguageProvider><MemoryRouter initialEntries={[`/case/${slug}`]}><Routes><Route path="/case/:slug" element={<CasePage />} /></Routes></MemoryRouter></LanguageProvider>);
}

describe('portfolio case journeys', () => {
  it('shows all four selected projects and independent product links', () => {
    render(<LanguageProvider><MemoryRouter><Portfolio /></MemoryRouter></LanguageProvider>);
    for (const slug of ['remy', 'workenglish', 'mobile-app-concept', 'forex-trading-simulator']) {
      const item = cases.find((value) => value.slug === slug)!;
      expect(screen.getByRole('heading', { name: item.title.en })).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: /Open Remy/i })).toHaveAttribute('href', 'https://remy-focus-task-app.onrender.com/');
    expect(screen.getByRole('link', { name: /Open WorkEnglish/i })).toHaveAttribute('href', 'https://workenglish.workenglish.workers.dev/');
    const card = screen.getByRole('img', { name: /WorkEnglish/i });
    expect(card.getAttribute('src')).toContain('workenglish-cover-card');
  });
  for (const slug of ['remy', 'workenglish', 'mobile-app-concept', 'forex-trading-simulator']) {
    for (const lang of ['en', 'ru'] as const) {
      it(`renders ${slug} case in ${lang}`, () => {
        renderCase(slug, lang);
        const content = cases.find((item) => item.slug === slug)!.content[lang];
        expect(screen.getByRole('heading', { level: 1, name: content.hero.title })).toBeInTheDocument();
        expect(screen.getByRole('navigation', { name: lang === 'ru' ? 'Следующий проект' : 'Next project' })).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: /.+/ }).length).toBeGreaterThan(1);
      });
    }
  }
  it('keeps focus in the lightbox when navigating and restores the initiating control on close', () => {
    renderCase('workenglish', 'en');
    const trigger = screen.getByRole('button', { name: /Feedback makes the answer/ });
    trigger.focus(); fireEvent.click(trigger);
    const next = screen.getByRole('button', { name: 'Next image' });
    next.focus(); fireEvent.click(next);
    expect(next).toHaveFocus();
    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    expect(next).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
  it('reserves the mobile WorkEnglish cover dimensions', () => {
    renderCase('workenglish', 'en');
    const source = document.querySelector('picture source');
    expect(source).toHaveAttribute('width', '390');
    expect(source).toHaveAttribute('height', '844');
  });
  it('retains every Forex gallery image and caption', () => {
    renderCase('forex-trading-simulator', 'en');
    const captions = cases.find((item) => item.slug === 'forex-trading-simulator')!.content.en.galleryCaptions!;
    expect(captions).toHaveLength(11);
    captions.forEach((caption) => expect(screen.getByRole('button', { name: caption })).toBeInTheDocument());
  });
  for (const lang of ['en', 'ru'] as const) {
    it(`offers the ${lang} Google Docs resume`, () => {
      localStorage.setItem('portfolio-lang', lang);
      render(<LanguageProvider><MemoryRouter initialEntries={[`/resume/${lang}`]}><Routes><Route path="/resume/:lang" element={<ResumePage />} /></Routes></MemoryRouter></LanguageProvider>);
      const link = screen.getByRole('link', { name: /Google Doc/i });
      expect(link.getAttribute('href')).toMatch(/^https:\/\/docs\.google\.com\/document\//);
    });
  }
  it('avoids smooth scrolling for reduced motion', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList);
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 600 });
    render(<BackToTop />);
    fireEvent.scroll(window);
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});
