// Analytics utility for tracking events with Google Tag Manager
// GTM is installed in index.html and automatically initializes dataLayer

import { hasCookieConsent } from "./cookies";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Initialize dataLayer for GTM (GTM script in index.html handles initialization)
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  // Check cookie consent before initializing
  if (!hasCookieConsent()) {
    console.log('Analytics: Cookie consent not given, skipping initialization');
    return;
  }
  
  // Ensure dataLayer exists (GTM script should already initialize it)
  window.dataLayer = window.dataLayer || [];
  
  // Push initial page view
  window.dataLayer.push({
    event: 'page_view',
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  if (!hasCookieConsent()) return; // Respect cookie consent
  
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track custom events (GTM format)
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  if (!hasCookieConsent()) return; // Respect cookie consent
  
  window.dataLayer.push({
    event: 'custom_event',
    event_category: category,
    event_action: action,
    event_label: label,
    value: value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (!hasCookieConsent()) return; // Respect cookie consent
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean = true) => {
  if (!hasCookieConsent()) return; // Respect cookie consent
  trackEvent('submit', 'form', formName, success ? 1 : 0);
};

// Track conversions
export const trackConversion = (conversionName: string, value?: number) => {
  if (!hasCookieConsent()) return; // Respect cookie consent
  trackEvent('conversion', 'engagement', conversionName, value);
};

