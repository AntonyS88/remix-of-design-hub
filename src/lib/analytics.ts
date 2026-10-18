export const GA_MEASUREMENT_ID = 'G-ZDKTWC50J2';

export type AnalyticsConsent = 'accepted' | 'rejected';

const CONSENT_STORAGE_KEY = 'portfolio-analytics-consent';
const SCRIPT_ID = 'portfolio-ga4';
const DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`;
const CONSENT_CHANGED_EVENT = 'portfolio:analytics-consent-changed';
const OPEN_SETTINGS_EVENT = 'portfolio:open-analytics-settings';
const PRODUCTION_HOSTNAME = 'antonys88.github.io';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let consentDefaultsSet = false;
let tagConfigured = false;
let previousPageLocation = '';

function setCollectionDisabled(disabled: boolean) {
  (window as unknown as Record<string, unknown>)[DISABLE_KEY] = disabled;
}

function ensureGtagQueue() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
}

function setConsentDefaults() {
  if (consentDefaultsSet) return;

  ensureGtagQueue();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500,
  });
  window.gtag?.('set', 'ads_data_redaction', true);
  consentDefaultsSet = true;
}

function updateConsent(analyticsStorage: 'granted' | 'denied') {
  setConsentDefaults();
  window.gtag?.('consent', 'update', {
    analytics_storage: analyticsStorage,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    personalization_storage: 'denied',
  });
}

function canLoadGoogleTag() {
  return window.location.hostname === PRODUCTION_HOSTNAME;
}

function configureGoogleTag() {
  if (tagConfigured || !canLoadGoogleTag()) return;

  ensureGtagQueue();
  window.gtag?.('js', new Date());
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_flags: 'SameSite=Lax;Secure',
  });

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  tagConfigured = true;
}

function saveConsent(value: AnalyticsConsent) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // The current session still respects the user's choice if storage is unavailable.
  }
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

export function removeAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => /^_ga(?:_|$)/.test(name));

  const paths = new Set(['/', import.meta.env.BASE_URL || '/']);
  const domains = [undefined, window.location.hostname, `.${window.location.hostname}`];

  cookieNames.forEach((name) => {
    paths.forEach((path) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=${path}; SameSite=Lax${domain ? `; domain=${domain}` : ''}`;
      });
    });
  });
}

export function initializeAnalytics() {
  setConsentDefaults();
  const consent = getAnalyticsConsent();

  if (consent === 'accepted') {
    setCollectionDisabled(false);
    updateConsent('granted');
    configureGoogleTag();
  } else {
    setCollectionDisabled(true);
  }
}

export function setAnalyticsConsent(value: AnalyticsConsent) {
  const previousConsent = getAnalyticsConsent();
  saveConsent(value);

  if (value === 'accepted') {
    setCollectionDisabled(false);
    updateConsent('granted');
    configureGoogleTag();
  } else {
    setCollectionDisabled(true);
    updateConsent('denied');
    removeAnalyticsCookies();
    previousPageLocation = '';
  }

  if (previousConsent !== value) {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: value }));
  }
}

export function openAnalyticsSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function sanitizeAnalyticsUrl(value: string) {
  try {
    const url = new URL(value, window.location.origin);
    return `${url.origin}${url.pathname}`;
  } catch {
    return `${window.location.origin}${window.location.pathname}`;
  }
}

export function trackEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  if (getAnalyticsConsent() !== 'accepted' || !canLoadGoogleTag()) return;

  configureGoogleTag();
  window.gtag?.('event', name, parameters);
}

export function trackPageView() {
  if (getAnalyticsConsent() !== 'accepted' || !canLoadGoogleTag()) return;

  const pageLocation = sanitizeAnalyticsUrl(window.location.href);
  const initialReferrer = document.referrer ? sanitizeAnalyticsUrl(document.referrer) : '';

  trackEvent('page_view', {
    page_title: document.title,
    page_location: pageLocation,
    page_path: window.location.pathname,
    page_referrer: previousPageLocation || initialReferrer,
  });

  previousPageLocation = pageLocation;
}

export const analyticsEvents = {
  consentChanged: CONSENT_CHANGED_EVENT,
  openSettings: OPEN_SETTINGS_EVENT,
} as const;
