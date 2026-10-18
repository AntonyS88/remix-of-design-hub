import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsEvents, trackEvent, trackPageView } from '@/lib/analytics';

export function RouteAnalytics() {
  const location = useLocation();
  const [consentRevision, setConsentRevision] = useState(0);

  useEffect(() => {
    const handleConsentChange = () => setConsentRevision((revision) => revision + 1);
    window.addEventListener(analyticsEvents.consentChanged, handleConsentChange);
    return () => window.removeEventListener(analyticsEvents.consentChanged, handleConsentChange);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      trackPageView();

      const caseMatch = location.pathname.match(/^\/case\/([^/]+)$/);
      if (caseMatch) {
        trackEvent('case_view', { case_slug: caseMatch[1] });
      }

      const resumeMatch = location.pathname.match(/^\/resume\/(ru|en)$/);
      if (resumeMatch) {
        trackEvent('resume_open', { resume_language: resumeMatch[1] });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, consentRevision]);

  return null;
}
