// Error Tracking Service
// Placeholder for integration with Sentry, LogRocket, or other error tracking services

interface ErrorContext {
  componentStack?: string;
  errorBoundary?: boolean;
  userAgent?: string;
  url?: string;
  timestamp?: string;
}

export const initErrorTracking = () => {
  if (typeof window === 'undefined' || !import.meta.env.PROD) {
    return;
  }

  // Initialize error tracking service here
  // Example for Sentry:
  // import * as Sentry from "@sentry/react";
  // Sentry.init({
  //   dsn: "YOUR_SENTRY_DSN",
  //   environment: "production",
  //   integrations: [new Sentry.BrowserTracing()],
  //   tracesSampleRate: 0.1,
  // });

  if (import.meta.env.DEV) {
    console.log('Error tracking initialized (placeholder)');
  }
};

export const trackError = (error: Error, context?: ErrorContext) => {
  if (typeof window === 'undefined' || !import.meta.env.PROD) {
    if (import.meta.env.DEV) {
      console.error('Error tracked:', error, context);
    }
    return;
  }

  // Send error to tracking service
  // Example for Sentry:
  // Sentry.captureException(error, {
  //   contexts: {
  //     react: {
  //       componentStack: context?.componentStack,
  //     },
  //   },
  //   tags: {
  //     errorBoundary: context?.errorBoundary ? 'true' : 'false',
  //   },
  //   extra: context,
  // });

  // Fallback: Send to analytics
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'error',
      errorMessage: error.message,
      errorStack: error.stack,
      errorContext: context,
    });
  }
};

export const trackPerformance = (metric: string, value: number, unit: string = 'ms') => {
  if (typeof window === 'undefined' || !import.meta.env.PROD) {
    return;
  }

  // Track performance metrics
  // Example for Google Analytics:
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'performance',
      metric,
      value,
      unit,
    });
  }
};

