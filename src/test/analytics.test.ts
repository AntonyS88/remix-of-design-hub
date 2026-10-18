import { beforeEach, describe, expect, it } from 'vitest';
import {
  GA_MEASUREMENT_ID,
  analyticsEvents,
  getAnalyticsConsent,
  initializeAnalytics,
  removeAnalyticsCookies,
  sanitizeAnalyticsUrl,
  setAnalyticsConsent,
  trackEvent,
} from '@/lib/analytics';

describe('privacy-safe analytics', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.getElementById('portfolio-ga4')?.remove();
    document.cookie = '_ga=ga-value; path=/';
    document.cookie = '_ga_TEST=ga-test-value; path=/';
    document.cookie = 'portfolio-theme=dark; path=/';
  });

  it('removes query parameters and hash fragments from tracked URLs', () => {
    expect(sanitizeAnalyticsUrl('https://example.com/case/remy?email=test@example.com#private')).toBe(
      'https://example.com/case/remy',
    );
  });

  it('deletes only Google Analytics cookies', () => {
    removeAnalyticsCookies();

    expect(document.cookie).not.toContain('_ga=');
    expect(document.cookie).not.toContain('_ga_TEST=');
    expect(document.cookie).toContain('portfolio-theme=dark');
  });

  it('does not load Google Analytics or send events before consent', () => {
    initializeAnalytics();
    trackEvent('case_view', { case_slug: 'remy' });

    expect(getAnalyticsConsent()).toBeNull();
    expect(document.getElementById('portfolio-ga4')).toBeNull();
    expect((window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`]).toBe(true);
  });

  it('stores rejection without removing unrelated preferences', () => {
    setAnalyticsConsent('rejected');

    expect(getAnalyticsConsent()).toBe('rejected');
    expect(window.localStorage.getItem('portfolio-theme')).toBeNull();
    expect(document.cookie).toContain('portfolio-theme=dark');
    expect(document.getElementById('portfolio-ga4')).toBeNull();
  });

  it('does not announce a consent change twice for the same choice', () => {
    let changeCount = 0;
    const countChange = () => { changeCount += 1; };
    window.addEventListener(analyticsEvents.consentChanged, countChange);

    setAnalyticsConsent('rejected');
    setAnalyticsConsent('rejected');

    window.removeEventListener(analyticsEvents.consentChanged, countChange);
    expect(changeCount).toBe(1);
  });
});
