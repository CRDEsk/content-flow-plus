import { Component, ReactNode } from "react";
import CookieConsent from "./CookieConsent";

interface State {
  hasError: boolean;
}

/**
 * Error boundary wrapper for CookieConsent to prevent it from crashing the entire app
 */
class CookieConsentWrapper extends Component<{ children?: ReactNode }, State> {
  constructor(props: { children?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("[CookieConsent] Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Silently fail - cookie consent is not critical for app functionality
      console.warn("[CookieConsent] Failed to render, app continues normally");
      return null;
    }

    return <CookieConsent />;
  }
}

export default CookieConsentWrapper;
